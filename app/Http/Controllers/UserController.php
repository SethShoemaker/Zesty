<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Show user profile.
     *
     * 
     */

    public function show(Request $request)
    {
        $username = $request->username;
        $user = User::where('username', "=", $username)->first();
        $recipes = Recipe::where('user_id', $user->id)->paginate(20);

        return view('user', [
            'username' => $user->username,
            'name' => $user->name,
            'avatar' => $user->avatar,
            'bio' => $user->bio,
            'created_at' => $user->created_at->format('m/d/Y'),
            'recipes' => $recipes
        ]);
    }
}
