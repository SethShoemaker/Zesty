@extends('layouts.app_layout')
@section('title', "Register")
@section('stylesheets')
    <link href="{{ asset('css/form.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
    <h1 class="formTitle mb-3">Register</h1>
    <form class='row' action="{{ route('register') }}" method="POST">
        @csrf
        <div class="col-12 my-3">
            <label for="name">
                Name
            </label>

            <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autofocus>
        
            @error('name')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
        <div class="col-12 my-3">
            <label for="email">
                Email
            </label>

            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required>
        
            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
        <div class="col-12 my-3">
            <label for="username">
                Username
            </label>
            
            <input name="username" id='username' class="form-control @error('username') is-invalid @enderror"" value="{{ old('username') }}" type="text" required>
        
            @error('username')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div> 
        <div class="col-12 my-3">
            <label for="password">
                Password
            </label>

            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required>
        
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
            
            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
        
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
        <div class="col-12 mb-1 mt-4 row">
            <div class='col-6 offset-6 d-flex flex-row-reverse'>
                <button type="submit" class="btn btn-primary">Register</button>

                <a class='btn' href='login.php'>Login</a>
            </div>
        </div>
    </form>
</div>
@endsection
