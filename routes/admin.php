<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ListingController;
use App\Http\Controllers\Admin\ReferralController;
use App\Http\Controllers\Admin\TaskController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:admin_api'], function(){

    // Dashboard
    Route::apiResource('dashboard', DashboardController::class);

    // Task
    Route::apiResource('task', TaskController::class);
    Route::post('task/{task}/files/upload', [TaskController::class, 'upload']);
    Route::post('task/{task}/update-status', [TaskController::class, 'updateStatus']);
    Route::post('task/{task}/assign-resource', [TaskController::class, 'assignResource']);

    // Listing
    Route::get('listing/task-pre-data', [ListingController::class, 'taskPreData'] );

    // Client
    Route::apiResource('client', ClientController::class);

    // User
    Route::apiResource('user', UserController::class);
    Route::post('user/{user}', [UserController::class, 'update']);

    // Blog
    Route::apiResource('blog', BlogController::class);

    // Referels
    Route::apiResource('referral', ReferralController::class);

});
