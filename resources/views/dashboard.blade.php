@extends('layouts.app_layout')
@section('title', "Dashboard")
@section('stylesheets')
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
    @if (session('status'))
        {{ session('status') }}
    @endif

    <div id="infoContainer" class='row'>
        <div class="col-md-3 col-lg-2" id='avatarContainer'>
            <form id="avatarFrame">
                <img src='https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'>
                <label for="avatar" id='overlay'></label>
                <input type="file" name="avatar" id="avatar" accept="image/jpg, image/jpeg, image/png, image/svg">
            </form>
        </div>

        <div id="nameContainer" class='col-md-8'>
            <h1>{{ $username }}</h1>
            <h2>{{ $name }}</h2>
            <p>Account created on {{ $created }}</p>
        </div>
    </div>

    <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
        Logout
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>
</div>
@endsection
