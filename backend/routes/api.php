<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlatformController;
use App\Http\Controllers\ProductKeyController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\XboxGameController;
use App\Http\Controllers\XboxSubscriptionController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Публичные маршуры
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/platforms', [PlatformController::class, 'index']);
Route::get('/platforms/{id}', [PlatformController::class, 'show']);
Route::post('/platforms', [PlatformController::class, 'store']);
Route::put('/platforms/{id}', [PlatformController::class, 'update']);
Route::delete('/platforms/{id}', [PlatformController::class, 'destroy']);

Route::get('/product_keys', [ProductKeyController::class, 'index']);
Route::get('/product_keys/{id}', [ProductKeyController::class, 'show']);
Route::post('/product_keys', [ProductKeyController::class, 'store']);
Route::put('/product_keys/{id}', [ProductKeyController::class, 'update']);
Route::delete('/product_keys/{id}', [ProductKeyController::class, 'destroy']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
// Route::get('/products/search/{name}', [ProductController::class, 'search']);

Route::get('/xbox/games', [XboxGameController::class, 'index']);
Route::get('/xbox/games/{id}', [XboxGameController::class, 'show']);
Route::post('/xbox/games', [XboxGameController::class, 'store']);
Route::put('/xbox/games/{id}', [XboxGameController::class, 'update']);
Route::delete('/xbox/games/{id}', [XboxGameController::class, 'destroy']);
Route::get('/xbox/games/search/{name}', [XboxGameController::class, 'search']);

Route::get('/xbox/subscriptions', [XboxSubscriptionController::class, 'index']);
Route::get('/xbox/subscriptions/{id}', [XboxSubscriptionController::class, 'show']);
Route::post('/xbox/subscriptions', [XboxSubscriptionController::class, 'store']);
Route::put('/xbox/subscriptions/{id}', [XboxSubscriptionController::class, 'update']);
Route::delete('/xbox/subscriptions/{id}', [XboxSubscriptionController::class, 'destroy']);
Route::get('/xbox/subscriptions/search/{name}', [XboxSubscriptionController::class, 'search']);




// Защищённые маршруты
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/products/search/{name}', [ProductController::class, 'search']);
});