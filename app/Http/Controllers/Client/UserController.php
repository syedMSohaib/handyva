<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\WelcomeEmail;
use App\Models\Client;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(){
        return User::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => ['required'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            "password" => ['required'],
            "gender" => ['required'],
            "phone" => ['required'],
            "address" => ['required'],
            "cnic" => ['required'],
            "cv" => ['required'],
            "image" => ['required'],
        ]);

        $user = new User();

        $password = $request->password;
        $data = $request->only($user->getFillable());
        $data['password'] = bcrypt($password);
        $data['status'] = 1;

        if($request->hasfile('image')){
            $path = $request->file('image')->store('public/profile_pictures');
            $data['image'] = str_replace('public/','',$path);
        }

        if($request->hasfile('cv')){
            $path = $request->file('cv')->store('public/employee_cv');
            $data['cv'] = str_replace('public/','',$path);
        }

        $user->fill($data);
        $user->save();
        // try{
        //     Mail::to($user->email)->send(new WelcomeEmail($user, $password));
        // }
        // catch(Exception $e){
        //     return response()->json(['message' => 'User is added successfully but mail is not sent, Please check the mailing credentials']);
        // }
        return response()->json(['message' => 'User is added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => ['required'],
            "gender" => ['required'],
            "phone" => ['required'],
            "address" => ['required'],
            "cnic" => ['required'],
        ]);

        $user = User::find($id);
        $data = $request->only($user->getFillable());
        if($data)
            $data['password'] = bcrypt($request->password);
        unset($data['email']);

        if($request->hasfile('image')){
            $path = $request->file('image')->store('public/profile_pictures');
            $data['image'] = str_replace('public/','',$path);
        }

        if($request->hasfile('cv')){
            $path = $request->file('cv')->store('public/employee_cv');
            $data['cv'] = str_replace('public/','',$path);
        }


        $user->fill($data);
        $user->save();
        return response()->json(['message' => 'User is updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->status = !$user->status;
        $user->save();
        return response(['message' => 'User has been ' . ($user->status? 'activated': "blocked")]);
    }
}
