<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;

Route::post('login', [App\Http\Controllers\Api\LoginController::class, 'login']);

Route::get('receipts', function(){
    return response()->json([
        'message'=>'Hola MUndo'
    ],200);
})->middleware('auth:sanctum');