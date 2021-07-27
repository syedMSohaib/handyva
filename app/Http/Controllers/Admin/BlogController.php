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


    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request){
        $request->validate([
            "title" => 'required',
            "body" => 'required',
            "author_name" => 'required',
            "mini_description" => 'required',
        ]);

        $blog = new Blog();
        $blog->fill($request->all());
        $blog->save();

        return $this->responseSuccess("Blog is saved successfully");

    }


    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $blog
     * @return void
     */
    public function update(Request $request, Blog $blog){
        $request->validate([
            "title" => 'required',
            "body" => 'required',
            "author_name" => 'required',
            "mini_description" => 'required',
        ]);

        $blog->fill($request->all());
        $blog->save();

        return $this->responseSuccess("Blog is updated successfully");

    }


    /**
     * destroy
     *
     * @param  mixed $request
     * @param  mixed $blog
     * @return void
     */
    public function destroy(Request $request, Blog $blog){
        $blog->delete();
        return $this->responseSuccess("Blog is deleted successfully");
    }
}
