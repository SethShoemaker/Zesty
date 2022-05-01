<?php

namespace App\Http\Controllers;

use App\Http\Requests\Recipe\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class RecipeController extends Controller
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
        //
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
            'servings' => $request['servings'],
            'description' => $request['description'],
            'user_id' => $userID,
            'ingredients' => $request['ingredientsJSON'],
            'instructions' => $request['instructions'],
        ]);

        // Saves file in storage and name in DB
        if (!empty($request->file('image'))) {

            // Creates file name to be stored
            $recipeTitle = $request['title'];
            $time = time();
            $fileMime = $request->file('image')->extension();
            $avatarStoreName = $recipeTitle . "-" .  $userID . "-" . $time . "." .  $fileMime;

            $request->file('image')->storeAs('public/recipes', $avatarStoreName);

            $recipe->image = $avatarStoreName;
            $recipe->save();
        }

        return Redirect::to('/recipes/' . $recipe->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recipe = Recipe::find($id);

        return view('recipes.show')->with('recipe', $recipe);
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
        $recipe->servings = $request['servings'];
        $recipe->description = $request['description'];

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

        $recipe->ingredients = $request['ingredientsJSON'];
        $recipe->instructions = $request['instructions'];
        $recipe->save();

        return Redirect::to('/recipes/' . $recipe->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
