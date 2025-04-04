<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

// This route group does not require the user to be authenticated to access each route.
Route::middleware('guest')->group(function () {
    Route::get('/', [LoginController::class, 'show'])
        ->name('login');
    Route::post('/login', [LoginController::class, 'authenticate'])
        ->name('authenticate');
});

// This route group does require the user to be authenticated in order to access each route.
Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])
        ->name('dashboard');
    Route::post('/tasks', [TaskController::class, 'store'])
        ->name('store.task');
    Route::put('/tasks/{task}', [TaskController::class, 'update'])
        ->name('update.task');
});
