<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AuthController::class, 'show'])->name('welcome');
Route::post('/login', [AuthController::class, 'store'])->name('login');
