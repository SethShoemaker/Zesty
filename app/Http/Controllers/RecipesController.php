<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecipesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }




    /**
     * Show single recipe
     *
     * 
     */
    public function show($id)
    {
        $recipe = Recipe::find($id);

        return view('recipes.show')->with('recipe', $recipe);
    }




    /**
     * Create new recipe
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function create(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:50'],
            'description' => ['required', 'string', 'max:350'],
            'servings' => ['required', 'numeric'],
            'image' => ['mimes:jpg,jpeg,png', 'max:5048'],
            'ingredientsJSON' => ['required', 'json'],
            'instructions' => ['required', 'string', 'max:500'],
        ]);

        $userID = Auth::user()->id;

        $recipe = Recipe::create([
            'title' => $request['title'],
            'description' => $request['description'],
            'user_id' => $userID,
            'servings' => $request['servings'],
            'ingredients' => $request['ingredientsJSON'],
            'instructions' => $request['instructions'],
        ]);

        // Saves image in storage and DB if entered
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

        return $request;
    }
}
