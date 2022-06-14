<?php

use App\Http\Controllers\AdminBouquetsController;
use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\BouquetsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FlowerController;
use App\Http\Controllers\ReviewController;
use App\Models\Review;

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


Route::get('/main', [MainController::class, 'index']);
Route::get('/catalog', [CategoryController::class, 'index']);
Route::get('/review', [ReviewController::class, 'index']);
Route::get('/category/all', [CategoryController::class, 'all']);
Route::get('/category/{id}', [CategoryController::class, 'view']);
Route::get('/bouquet/{id}', [BouquetsController::class, 'view']);
Route::get('/glossary', [FlowerController::class, 'index']);
Route::get('/glossary/{id}', [FlowerController::class, 'view']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart', [CartController::class, 'create']);
Route::post('/question', [QuestionController::class, 'create']);
Route::post('/review', [ReviewController::class, 'create']);
Route::get('/admin/settings', [SettingsController::class, 'index']);
Route::post('/answer', [AnswerController::class, 'create']);

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
    Route::get('/main', [MainController::class, 'adminMain']);

    Route::get('/bouquets', [AdminBouquetsController::class, 'index']);
    Route::get('/bouquet/{id}', [AdminBouquetsController::class, 'view']);
    Route::post('/bouquets', [AdminBouquetsController::class, 'create']);
    Route::put('/bouquets', [AdminBouquetsController::class, 'update']);
    Route::delete('/bouquets', [AdminBouquetsController::class, 'delete']);

    Route::get('/categories', [AdminCategoriesController::class, 'index']);
    Route::get('/category/{id}', [AdminCategoriesController::class, 'view']);
    Route::post('/categories', [AdminCategoriesController::class, 'create']);
    Route::put('/categories', [AdminCategoriesController::class, 'update']);
    Route::delete('/categories', [AdminCategoriesController::class, 'delete']);

    Route::get('/orders', [AdminOrderController::class, 'index']);
    Route::get('/order/{id}', [AdminOrderController::class, 'view']);
    Route::put('/orders', [AdminOrderController::class, 'update']);
    Route::put('/order/status', [AdminOrderController::class, 'checked']);

    Route::get('/questions', [QuestionController::class, 'index']);
    Route::get('/question/{id}', [QuestionController::class, 'view']);
    Route::put('/questions', [QuestionController::class, 'update']);
    Route::put('/question/status', [QuestionController::class, 'checked']);

    Route::post('/settings', [SettingsController::class, 'create']);
    Route::put('/settings', [SettingsController::class, 'update']);
    Route::delete('/settings', [SettingsController::class, 'delete']);

    Route::get('/glossary/{id}', [FlowerController::class, 'view']);
    Route::get('/glossary', [FlowerController::class, 'adminFlowers']);
    Route::post('/glossary', [FlowerController::class, 'create']);
    Route::put('/glossary', [FlowerController::class, 'update']);
    Route::delete('/glossary', [FlowerController::class, 'delete']);

    Route::get('/review', [ReviewController::class, 'adminIndex']);
    Route::get('/review/{id}', [ReviewController::class, 'adminView']);
    Route::put('/review', [ReviewController::class, 'update']);
    Route::delete('/review', [ReviewController::class, 'delete']);
});
