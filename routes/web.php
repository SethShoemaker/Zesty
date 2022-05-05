<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipesController;
use Illuminate\Support\Facades\Storage;

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
Route::get('/', [WelcomeController::class, 'index']);

// Auth
Auth::routes();

// User Routes
Route::get('/user/{username}', [UserController::class, 'show']);

// Dashboard routes
Route::get('/dashboard', [DashboardController::class, 'show']);
Route::post('/dashboard', [DashboardController::class, 'update']);

// Recipe routes
Route::resource('recipe', RecipesController::class);
Route::get('/search', [RecipesController::class, 'index']);
