<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RecipesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $q = $_GET['q'];

        $recipes = Recipe::where('title', 'LIKE', "%" . $q . "%")
            ->orWhere('description', 'LIKE', '%' . $q . '%')
            ->orWhere('instructions', 'LIKE', '%' . $q . '%')
            ->simplePaginate(60)
            ->withPath('/search?q=' . $q);

        return view('recipes.index', [
            'recipes' => $recipes,
            'q' => $q
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('recipes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RecipeRequest $request)
    {
        $userID = Auth::id();

        $recipe = Recipe::create([

            'title' => $request['title'],
            'servings' => $request['servings'] ?? null,
            'description' => $request['description'] ?? null,
            'user_id' => $userID,
            'ingredients' => $request['ingredients'],
            'instructions' => $request['instructions'] ?? null,
        ]);

        // Saves file in storage and name in DB
        if (!empty($request->file('image'))) {

            // Creates file name to be stored
            $recipeID = $recipe->id;
            $fileMime = $request->file('image')->extension();
            $avatarStoreName = $recipeID . "." .  $fileMime;

            $request->file('image')->storeAs('public/recipes', $avatarStoreName);

            $recipe->image = $avatarStoreName;
            $recipe->save();
        }

        return redirect('/recipe/' . $recipe->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $query = DB::table('recipes')
            ->select(
                'recipes.id',
                'recipes.title',
                'recipes.description',
                'recipes.servings',
                'recipes.image',
                'recipes.ingredients',
                'recipes.instructions',
                'recipes.user_id',
                'users.username'
            )
            ->join('users', 'recipes.user_id', '=', 'users.id')
            ->where('recipes.id', '=',  $id)
            ->get();

        $recipe = $query[0];

        return view(
            'recipes.show',
            [
                'id' => $recipe->id,
                'title' => $recipe->title,
                'servings' => $recipe->servings,
                'description' => $recipe->description,
                'image' => $recipe->image,
                'ingredients' => json_decode($recipe->ingredients),
                'instructions' => $recipe->instructions,
                'user_id' => $recipe->user_id,
                'username' => $recipe->username,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $recipe = Recipe::find($id);

        if ($recipe->user_id !== Auth::id()) {
            abort(401);
        }

        return view('recipes.edit')->with('recipe', $recipe);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RecipeRequest $request, $id)
    {

        $recipe = Recipe::find($id);

        if ($recipe->user_id !== Auth::id()) {
            abort(401);
        }

        $recipe->title = $request['title'];
        $recipe->servings = $request['servings'] ?? null;
        $recipe->description = $request['description'] ?? null;

        if (!empty($request->file('image'))) {

            // Creates file name to be stored
            $recipeTitle = $request['title'];
            $userID = Auth::id();
            $time = time();
            $fileMime = $request->file('image')->extension();
            $avatarStoreName = $recipeTitle . "-" .  $userID . "-" . $time . "." .  $fileMime;

            $request->file('image')->storeAs('public/recipes', $avatarStoreName);

            $recipe->image = $avatarStoreName;
        }

        $recipe->ingredients = $request['ingredients'];
        $recipe->instructions = $request['instructions'];
        $recipe->save();

        return redirect('/recipe/' . $recipe->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $recipe = Recipe::find($id);

        if ($recipe->user_id !== Auth::id()) {
            abort(401);
        }

        $recipe->delete();
    }
}
