@extends('layouts.app_layout')
@section('title', "Reset Password")
@section('stylesheets')
    <link href="{{ asset('css/auth/auth.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="container">
        <h1 class="mb-3">Reset Password</h1>
        <form action="{{ route('password.email') }}" method="POST">
            @csrf

            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

            <div class="col-12 my-4">
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
            <div class="col-12 mb-1 mt-4 row">
                <div class='col-12 d-flex flex-row-reverse'>
                    <button type="submit" class="btn btn-primary">
                        Send Password Reset Link
                    </button>
                </div>
            </div>
        </form>
    </div>
@endsection
