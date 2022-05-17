<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show user dashboard.
     *
     * 
     */

    public function show()
    {
        $user = Auth::user();
        $recipes = $user->recipes->paginate(20);

        return view('dashboard', [
            'username' => $user->username,
            'name' => $user->name,
            'avatar' => $user->avatar,
            'bio' => $user->bio,
            'created_at' => $user->created_at->format('m/d/Y'),
            'recipes' => $recipes
        ]);
    }

    /**
     * Update user record
     *
     * 
     */

    public function update(Request $request)
    {
        $request->validate([
            'avatar' => ['mimes:png,jpg,jpeg', 'max:5048'],
            'name' => ['string', 'max:25'],
            'bio' => ['string', 'max:100']
        ]);

        $user_id = Auth::user()->id;
        $user = User::find($user_id);

        // Saves image in storage and DB if entered
        if (!empty($request->file('avatar'))) {

            // Creates file name to be stored
            $username = Auth::user()->username;
            $fileMime = $request->file('avatar')->extension();
            $avatarStoreName = $username . "." . $fileMime;

            $request->file('avatar')->storeAs('public/avatars', $avatarStoreName);

            $user->avatar = $avatarStoreName;
        }

        $user->name = $request['name'];
        $user->bio = $request['bio'];
        $user->save();
        return Redirect::to('/dashboard');
    }
}
