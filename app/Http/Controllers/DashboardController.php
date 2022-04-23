<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view(
            'dashboard',
            [
                "avatar" => Auth::user()->avatar,
                "username" => Auth::user()->username,
                "name" => Auth::user()->name,
                "created" => Auth::user()->created_at->format('m/d/Y'),
                "bio" => Auth::user()->bio,
            ]
        );
    }

    /**
     * Update user record.
     *
     * 
     */

    public function store(Request $request)
    {
        $request->validate([
            'avatar' => 'mimes:png,jpg,jpeg,svg|max:5048',
            'name' => 'string|max:50',
            'bio' => 'max:350'
        ]);

        $id = Auth::user()->id;
        $user = User::find($id);

        if (!empty($request->file('avatar'))) {

            // Creates file name to be stored
            $username = Auth::user()->username;
            $fileMime = $request->file('avatar')->extension();
            $avatarStoreName = $username . "." . $fileMime;

            // Stores avatar file
            $request->file('avatar')->storeAs('public/avatars', $avatarStoreName);

            // Save avatar file name
            $user->avatar = $avatarStoreName;
        }

        $user->name = $request['name'];
        $user->bio = $request['bio'];
        $user->save();
        return Redirect::to('/dashboard');
    }
}
