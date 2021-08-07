<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Referral;
use Illuminate\Http\Request;

class ReferralController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index(Request $request){
        return Referral::with('client.plan')->whereClientId($request->user()->id)->latest()->get();
    }
}
