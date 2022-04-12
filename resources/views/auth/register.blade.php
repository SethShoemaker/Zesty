@extends('layouts.app')
@section('title', "Register")
@section('stylesheets')
    <link href="{{ asset('css/form.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container formContainer">
    <h2 class="mb-3">Signup</h2>
        <form class='row' action="{{ route('register') }}" method="POST">
            <div class="col-12 my-3">
                <label for="fname">First name</label>
                <input name="name" id='name' class="form-control" oninput="this.value=this.value.replace(/[^a-zA-Z]/g,'');" type="text" required>
            </div>
            <div class="col-12 my-3">
                <label for="email">Email address</label>
                <input name="email" id='email' class="form-control" type="text" required>
            </div>
            <div class="col-12 my-3">
                <label for="user">Username</label>
                <input name="user" id='user' class="form-control" oninput="this.value=this.value.replace(/[\s]/g,'');" type="text" required>
            </div> 
            <div class="col-12 my-3">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" name="pwd" id='pwd' oninput="this.value=this.value.replace(/[\s]/g,'');" required>
            </div>
            <div class="col-12 my-1 row">
                <div class='col-6 offset-6 d-flex flex-row-reverse'>
                    <button class="btn-primary" name='form' value='initial'>Next</button>
                    <a class='btn' href='login.php'>Login</a>
                </div>
            </div>
        </form>
    
    {{-- <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> --}}
</div>
@endsection
