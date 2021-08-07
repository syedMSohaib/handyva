<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{

    public function index(Request $request){
        return Faq::all()->groupBy("category");
    }
}
