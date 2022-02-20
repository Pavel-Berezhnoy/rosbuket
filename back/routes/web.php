<?php

use App\Http\Controllers\BouquetsController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

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

Route::get('/', [MainController::class, 'index'])
  ->middleware('cors');

Route::get('/catalog', [CategoryController::class, 'index']);
Route::get('/category/{id}', [CategoryController::class, 'view']);
Route::get('/bouquet/{id}', [BouquetsController::class, 'view']);