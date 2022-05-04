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
            <h2 class='h1'>My Recipes</h2>
            <ul id="recipes-list">
                @foreach ($recipes as $recipe)
                    <li class="recipe-card">
                        <a href='{{ url('/recipes/' . $recipe->id) }}'>
                            <div class="recipe-image" style="background-image: url({{ asset('/storage/recipes/' . $recipe->image) }})"></div>
                            <div class="recipe-title">
                                <h3>{{ $recipe->title }}</h3>
                            </div>
                        </a>
                    </li>
                @endforeach
            </ul>
            {{ $recipes->links() }}
        </div> 
    </section>
@endsection
@section('scripts')
    <script src='/js/dashboard/dashboard.js'></script>
@endsection