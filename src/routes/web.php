<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/auth-request', function () {
    return response()->json([
        'response' => 'Web response from Laravel'
    ]);
});