@extends('layouts.app_layout')
@section('title', "Reset Password")
@section('stylesheets')
    <link href="{{ asset('css/auth/auth.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="container">
        <h1 class="mb-3">Reset Password</h1>
        <form action="{{ route('password.update') }}" method="POST">
            @csrf

            <input type="hidden" name="token" value="{{ $token }}">

            <div class="col-12 my-3">
                <label for="email">
                    Email
                </label>

                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
            
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
                <label for="password-confirm">
                    Confirm Password
                </label>
                
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
            
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-12 mb-1 mt-4 row">
                <div class='col-6 offset-6 d-flex flex-row-reverse'>
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    </div>
@endsection
