<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;

// Public route
Route::get('/products', [ProductController::class, 'index']);

// Auth routes (example for login)
Route::post('/login', [AuthController::class, 'login']);

// Protected routes (require auth middleware)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
