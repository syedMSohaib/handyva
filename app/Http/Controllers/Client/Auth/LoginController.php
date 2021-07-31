<?php

namespace App\Http\Controllers\Client\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::CLIENTHOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function __construct()
    {
        $this->middleware('guest:client')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.login', ['action' => route('clients.login')]);
    }

    protected function guard()
    {
        return Auth::guard('client');
    }


    protected function authenticated(Request $request, $user)
    {
        $token = $user->createToken(config('app.name'))->accessToken;

        Log::info($token);

        setcookie('p_token', $token, time() + (86400 * 30), "/"); // 86400 = 1 day

        return redirect(url("client/dashboard"));
    }
}
