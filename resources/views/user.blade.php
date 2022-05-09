@extends('layouts.app_layout')
@section('title', $username)
@section('stylesheets')
    <link href="{{ asset('css/user.css') }}" rel="stylesheet">
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
    </section>
    <section id='recipes'>
        <div class="container">
            <h2 class='h1'>Recipes</h2>
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
                    <p id='no-results'>This user has no recipes</p>
                @endforelse
            </ul>
            {{ $recipes->links() }}
        </div> 
    </section>
@endsection