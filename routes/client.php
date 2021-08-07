<?php

use App\Http\Controllers\Client\BlogController;
use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Client\DashboardController;
use App\Http\Controllers\Client\FaqController;
use App\Http\Controllers\Client\ListingController;
use App\Http\Controllers\Client\ProfileController;
use App\Http\Controllers\Client\ReferralController;
use App\Http\Controllers\Client\ReminderController;
use App\Http\Controllers\Client\TaskController;
use App\Http\Controllers\Client\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:client_api'], function(){

    //Generic
    Route::post('update', [DashboardController::class, 'updateProfile']);
    Route::post('charge-task', [DashboardController::class, 'chargeTask']);
    Route::post('update-card-details', [DashboardController::class, 'updateCardDetails']);
    Route::post('upgrade-package', [DashboardController::class, 'upgradePackage']);

    //Profile
    Route::post('update-password', [ProfileController::class, 'changePassword']);
    Route::post('update-cover', [ProfileController::class, 'updateCover']);
    Route::post('update-profilepic', [ProfileController::class, 'updateProfilePic']);

    Route::get('social-life', [ProfileController::class, 'getSocialLife']);
    Route::post('social-life', [ProfileController::class, 'saveSocialLife']);
    Route::delete('social-life/{id}', [ProfileController::class, 'deleteSocialLife']);

    Route::get('contacts', [ProfileController::class, 'getContacts']);
    Route::post('contacts', [ProfileController::class, 'saveContacts']);
    Route::delete('contacts/{id}', [ProfileController::class, 'deleteContacts']);

    Route::get('travels', [ProfileController::class, 'getTravels']);
    Route::post('travels', [ProfileController::class, 'saveTravels']);
    Route::delete('travels/{id}', [ProfileController::class, 'deleteTravels']);


    // Dashboard
    Route::apiResource('dashboard', DashboardController::class);
    Route::get('dashboard/my/info', [DashboardController::class, 'me']);

    // Task
    Route::apiResource('task', TaskController::class);
    Route::get('task/{task}/extensive-task', [TaskController::class, 'makeextensiveTask']);
    Route::post('task/{task}/files/upload', [TaskController::class, 'upload']);
    Route::post('task/{task}/update-status', [TaskController::class, 'updateStatus']);
    Route::post('task/{task}/assign-resource', [TaskController::class, 'assignResource']);
    Route::post('task/{task}/add-note', [TaskController::class, 'addNote']);
    Route::delete('task/{note}/delete-note', [TaskController::class, 'deleteNote']);

    // Listing
    Route::get('listing/task-pre-data', [ListingController::class, 'taskPreData'] );
    Route::get('listing/packages', [ListingController::class, 'getPackages'] );

    // Client
    Route::apiResource('client', ClientController::class);

    // Blog
    Route::apiResource('blog', BlogController::class);

    // Referels
    Route::apiResource('referral', ReferralController::class);

    //Reminder
    Route::apiResource('reminder', ReminderController::class);
    Route::post('reminder/{reminder}/update', [ReminderController::class, 'update']);

    //faq
    Route::apiResource('faqs', FaqController::class);


});
