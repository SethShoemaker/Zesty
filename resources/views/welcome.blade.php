@extends('layouts.app_layout')
@section('title', "Zesty")
@section('stylesheets')
    <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">
@endsection
@section('content')
    <section id='recipes'>
        <div class="container">
            <h1 class='h1'>Latest Recipes</h1>
            <ul id="recipes-list">
                @foreach ($recipes as $recipe)
                    <li class="recipe-card">
                        <a href='{{ url('/recipe/' . $recipe->id) }}'>
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