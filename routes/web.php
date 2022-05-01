<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RecipeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Index
Route::get('/', function () {
    return view('welcome');
});


Auth::routes();


// Dashboard routes
Route::get('/dashboard', [DashboardController::class, 'index']);

Route::post('/dashboard', [DashboardController::class, 'update']);


// Recipe routes
Route::resource('recipes', RecipeController::class);
