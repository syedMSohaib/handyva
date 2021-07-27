<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index(){
        return Blog::latest()->get();
    }

    /**
     * show
     *
     * @param  mixed $blog
     * @return void
     */
    public function show(Blog $blog){
        return $blog;
    }


    public function store(Request $request){

    }


    public function update(Request $request){

    }


    public function destroy(Request $request){

    }
}
