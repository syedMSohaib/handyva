@extends('layouts.app')

@section('content')

<div class="row justify-content-center h-100 align-items-center">
    <div class="col-md-6">
        <div class="authincation-content">
            <div class="row no-gutters">
                <div class="col-xl-12">
                    <div class="auth-form">
                        <div class="text-center mb-3">
                            <img style="width:150px" src="{{ asset('images/logo-black.png') }}" alt="">
                        </div>
                        <h4 class="text-center mb-4">Sign in your account</h4>
                        <form method="POST" action="{{ $action ?? route('login') }}">
                            @csrf
                                <div class="form-group">
                                <label class="mb-1"><strong>Email</strong></label>
                                <input type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="hello@example.com">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                            </div>
                            <div class="form-group">
                                <label class="mb-1"><strong>Password</strong></label>
                                <input type="password" name="password" class="form-control" placeholder="Password">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                            </div>
                            <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                <div class="form-group">
                                   <div class="custom-control custom-checkbox ml-1">
                                        <input type="checkbox" name="remember" id="remember" class="custom-control-input">
                                        <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    @if (Route::has('password.request'))
                                    <a  href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                    @endif
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
