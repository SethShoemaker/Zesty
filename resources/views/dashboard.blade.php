@extends('layouts.app_layout')
@section('title', "Dashboard")
@section('stylesheets')
    <link href="{{ asset('css/dashboard/dashboard.css') }}" rel="stylesheet">
@endsection
@section('content')
    @if (session('status'))
        {{ session('status') }}
    @endif
    <section id="profile">
        <div id='profileHeading'>
            <div id='userAvatar'>
                <img src="{{ asset('/storage/avatars/' . Auth::user()->avatar) }}">
            </div>
            <div id='userDetails'>
                <h1>{{ Auth::user()->username }}</h1>
                <h2>{{ Auth::user()->name }}</h2>
                <p>Member since {{ Auth::user()->created_at->format('m/d/Y') }}</p>
            </div>
        </div>
        <p id='userSummary'>
            {{ Auth::user()->bio }}
        </p>
        <button class='btn btn-primary' id='updateBtn'>Edit Profile</button>
    </section>
    <div id="editContainer">
        <div id="screenOverlay"></div>
        <form action="{{ url('/dashboard') }}" method="POST" class='row' id='updateForm' enctype= multipart/form-data>
            @csrf
            <div class="col-12" id="avatarContainer">
                <label for='avatar' id="avatarFrame">
                    <img id='editIcon' src='/images/iconEdit.svg'>
                    <img id='avatarPreview' src="{{ asset('/storage/avatars/' . Auth::user()->avatar) }}">
                </label>
                <input type="file" accept="image/jpg, image/jpeg, image/png, image/svg" name="avatar" class='d-none' id="avatar">
            </div>
            <div class="col-12">
                <label for="name">
                    Name
                </label>

                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ Auth::user()->name }} "autocomplete="name">
            
                @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-12">
                <label for="bio">
                    Bio
                </label>
            
                <textarea name="bio" class="form-control @error('bio') is-invalid @enderror" id="bio" rows="3">{{ Auth::user()->bio }}</textarea>

                @error('bio')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-6 d-flex justify-content-start align-items-center">
                <button class='btn btn-secondary m-3' id='updateFormCancel'>Cancel</button>
            </div> 
            <div class="col-6 d-flex justify-content-end align-items-center">
                <button class='btn btn-primary m-3'>Save Changes</button>
            </div>
        </form>
    </div>
    <div class="container">
        <section id='recipes'>
            @foreach ($recipes as $recipe)
                <a class="recipe-card" href='{{ url('/recipe/' . $recipe->id) }}'>
                    <div class="recipe-image">
                        <img src='{{ asset('/storage/recipes/' . $recipe->image) }}'>
                    </div>
                    <div class="recipe-details">
                        <span>{{ $recipe->title }}</span>
                        <p>{{ Str::limit($recipe->description, 50) }}</p>
                    </div>
                </a>
            @endforeach
        </section>
    </div>
@endsection
@section('scripts')
    <script src='/js/dashboard/dashboard.js'></script>
@endsection