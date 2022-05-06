@extends('layouts.app_layout')
@section('title', "Dashboard")
@section('stylesheets')
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
@endsection
@section('content')
    @if (session('status'))
        {{ session('status') }}
    @endif
    <section id="profile">
        <div id='profileHeading'>
            <div id='userAvatar'>
                <img src="{{ asset('/storage/avatars/' . $avatar) }}">
            </div>
            <div id='userDetails'>
                <h1>{{ $username }}</h1>
                <h2>{{ $name }}</h2>
                <p>Member since {{ $created_at }}</p>
            </div>
        </div>
        <p id='userSummary'>
            {{ $bio }}
        </p>
        <button class='btn btn-primary' id='updateBtn'>Edit Profile</button>
    </section>
    <div id="editContainer">
        <form action="{{ url('/dashboard') }}" method="POST" class='row' id='updateForm' enctype= multipart/form-data>
            @csrf
            <div class="col-12" id="avatarContainer">
                <label for='avatar' id="avatarFrame">
                    <img id='editIcon' src='/images/iconEdit.svg'>
                    <img id='avatarPreview' src="{{ asset('/storage/avatars/' . $avatar) }}">
                </label>
                <input type="file" accept="image/jpg, image/jpeg, image/png" name="avatar" class='d-none' id="avatar">
            </div>
            <div class="col-12">
                <label for="name">
                    Name
                </label>

                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $name }} "autocomplete="name">
            
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
            
                <textarea name="bio" class="form-control @error('bio') is-invalid @enderror" id="bio" rows="3">{{ $bio }}</textarea>

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
    <section id='recipes'>
        <div class="container">
            <h2 class='h1'>My Recipes</h2>
            <ul id="recipes-list">
                @forelse ($recipes as $recipe)
                    <li class="recipe-card">
                        <a href='{{ url('/recipe/' . $recipe->id) }}'>
                            <div class="recipe-image" style="background-image: url({{ asset('/storage/recipes/' . $recipe->image) }})"></div>
                            <div class="recipe-title">
                                <h3>{{ $recipe->title }}</h3>
                            </div>
                        </a>
                    </li>
                @empty
                    <p id='no-results'>You have no recipes</p>
                @endforelse
            </ul>
            {{ $recipes->links() }}
        </div> 
    </section>
@endsection
@section('scripts')
    <script src='/js/dashboard.js'></script>
@endsection