<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$admin_namespace = "\App\Http\Controllers\Admin";
$client_namespace = "\App\Http\Controllers\Client";

//Admin Routes

Route::prefix('admin')->name('admins.')->namespace($admin_namespace)->group(function(){

    Auth::routes(['register' => false]);

    Route::get('logout',function(){ Auth::guard('admin')->logout(); return redirect(url('/admin/login')); });

    Route::view('/{home?}','layouts/admin')->middleware('auth:admin')->where('home', '.*');

});

//Client Routes

Route::prefix('client')->name('clients.')->namespace($client_namespace)->group(function(){

    Auth::routes(['register' => false]);

    Route::get('logout',function(){ Auth::guard('client')->logout(); return redirect(url('/client/login')); });

    Route::view('/{home?}','layouts/client')->middleware('auth:client')->where('home', '.*');

});

Auth::routes();
