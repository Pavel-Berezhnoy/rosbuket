<?php

use App\Http\Controllers\AdminBouquetsController;
use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\BouquetsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/', [MainController::class, 'index'])->middleware('cors');
Route::get('/catalog', [CategoryController::class, 'index']);
Route::get('/category/all', [CategoryController::class, 'all']);
Route::get('/category/{id}', [CategoryController::class, 'view']);
Route::get('/bouquet/{id}', [BouquetsController::class, 'view']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart', [CartController::class, 'create']);
Route::post('/question', [QuestionController::class, 'create']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user', [AuthController::class, 'user']);
});
//admin
Route::group([
    'middleware' => 'auth:api',
    'prefix' => 'admin'
], function ($router) {
    Route::get('/main', [MainController::class, 'adminMain'])->middleware('cors');

    Route::get('/bouquets', [AdminBouquetsController::class, 'view'])->middleware('cors');
    Route::post('/bouquets', [AdminBouquetsController::class, 'create'])->middleware('cors');
    Route::put('/bouquets', [AdminBouquetsController::class, 'update'])->middleware('cors');
    Route::delete('/bouquets', [AdminBouquetsController::class, 'delete'])->middleware('cors');

    Route::get('/categories', [AdminCategoriesController::class, 'index'])->middleware('cors');
    Route::get('/category/{id}', [AdminCategoriesController::class, 'view'])->middleware('cors');
    Route::post('/categories', [AdminCategoriesController::class, 'create'])->middleware('cors');
    Route::put('/categories', [AdminCategoriesController::class, 'update'])->middleware('cors');
    Route::delete('/categories', [AdminCategoriesController::class, 'delete'])->middleware('cors');

    Route::get('/orders', [AdminOrderController::class, 'index'])->middleware('cors');
    Route::get('/order/{id}', [AdminOrderController::class, 'view'])->middleware('cors');
    Route::put('/orders', [AdminOrderController::class, 'update'])->middleware('cors');
    Route::put('/order/status', [AdminOrderController::class, 'checked'])->middleware('cors');

    Route::get('/questions', [QuestionController::class, 'index'])->middleware('cors');
    Route::get('/question/{id}', [QuestionController::class, 'view'])->middleware('cors');
    Route::put('/questions', [QuestionController::class, 'update'])->middleware('cors');
    Route::put('/question/status', [QuestionController::class, 'checked'])->middleware('cors');

    Route::post('/settings', [SettingsController::class, 'create'])->middleware('cors');
    Route::put('/settings', [SettingsController::class, 'update'])->middleware('cors');
    Route::delete('/settings', [SettingsController::class, 'delete'])->middleware('cors');
});

Route::get('/admin/settings', [SettingsController::class, 'index'])->middleware('cors');