<?php

namespace App\Http\Controllers;

use App\Models\Recipe;

class WelcomeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::orderBy('created_at')->simplePaginate(60);
        return view('welcome')->with('recipes', $recipes);
    }
}
