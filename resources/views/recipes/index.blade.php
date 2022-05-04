@extends('layouts.app_layout')
@section('title', 'Search')
@section('stylesheets')
    <link href="{{ asset('css/recipes/index.css') }}" rel="stylesheet">
@endsection
@section('content')
    <section id='recipes'>
        <div class="container">
            <h1 class='h1'>Search Results for '{{ $q }}'</h1>
            <ul id="recipes-list">
                @forelse ($recipes as $recipe)
                    <li class="recipe-card">
                        <a href='{{ url('/recipes/' . $recipe->id) }}'>
                            <div class="recipe-image" style="background-image: url({{ asset('/storage/recipes/' . $recipe->image) }})"></div>
                            <div class="recipe-title">
                                <h3>{{ $recipe->title }}</h3>
                            </div>
                        </a>
                    </li>
                @empty
                    <p>No Results :(</p>
                @endforelse
            </ul>
            {{ $recipes->links() }}
        </div> 
    </section>
@endsection