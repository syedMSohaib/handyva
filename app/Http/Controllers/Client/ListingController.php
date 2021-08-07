<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Package;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    public function taskPreData(Request $request){
        $clients = Client::with('plan')->get();
        return [
            'clients' => $clients,
        ];
    }


    public function getPackages(Request $request){
        return Package::get()->groupBy('title');
    }
}
