@extends('layouts.app_layout')
@section('title', "Login")
@section('stylesheets')
    <link href="{{ asset('css/auth/auth.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="container">
        <h1 class="mb-3">Login</h1>
        <form class='row' method="POST" action="{{ route('login') }}">
            @csrf
            <div class="col-12 my-3">
                <label for="email">
                    Email
                </label>

                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div> 
            <div class="col-12 my-3">
                <label for="password">
                    Password
                </label>

                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
            
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-12 my-3">
                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                <label class="form-check-label" for="remember">
                    Remember Me
                </label>
            </div>
            <div class="col-12 my-3 d-flex align-items-center flex-row-reverse">
                <button type="submit" class="btn btn-primary">Login</button>
                @if (Route::has('password.request'))
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        Forgot Your Password?
                    </a>
                @endif
            </div>
        </form>
    </div>
@endsection
