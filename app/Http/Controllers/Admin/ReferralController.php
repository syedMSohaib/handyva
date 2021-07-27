<?php

namespace App\Http\Controllers\Admin;

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
    public function index(){
        return Referral::with('client.plan')->latest()->get();
    }
}
