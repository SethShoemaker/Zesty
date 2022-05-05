<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        if ($user->id === Auth::id()) {
            return redirect('/dashboard');
        }

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
