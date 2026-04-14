<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/logout', [UserController::class, 'logout']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

Route::get('/auth-request', function () {
    return response()->json([
        'response' => 'Web response from Laravel'
    ]);
});

Route::get('/', function () {
    return view('welcome');
});

