<?php

use App\Http\Controllers\Client\BlogController;
use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Client\DashboardController;
use App\Http\Controllers\Client\ListingController;
use App\Http\Controllers\Client\ReferralController;
use App\Http\Controllers\Client\TaskController;
use App\Http\Controllers\Client\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:client_api'], function(){

    Route::post('update', [DashboardController::class, 'updateProfile']);
    Route::post('update-password', [DashboardController::class, 'changePassword']);
    Route::post('update-cover', [DashboardController::class, 'updateCover']);
    Route::post('update-profilepic', [DashboardController::class, 'updateProfilePic']);


    // Dashboard
    Route::apiResource('dashboard', DashboardController::class);
    Route::get('dashboard/my/info', [DashboardController::class, 'me']);


    // Task
    Route::apiResource('task', TaskController::class);
    Route::post('task/{task}/files/upload', [TaskController::class, 'upload']);
    Route::post('task/{task}/update-status', [TaskController::class, 'updateStatus']);
    Route::post('task/{task}/assign-resource', [TaskController::class, 'assignResource']);

    // Listing
    Route::get('listing/task-pre-data', [ListingController::class, 'taskPreData'] );

    // Client
    Route::apiResource('client', ClientController::class);

    // Blog
    Route::apiResource('blog', BlogController::class);

    // Referels
    Route::apiResource('referral', ReferralController::class);

});
