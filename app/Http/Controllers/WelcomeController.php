<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::orderBy('created_at')->simplePaginate(60);
        return view('welcome')->with('recipes', $recipes);
    }
}
