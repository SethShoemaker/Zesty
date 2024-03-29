@extends('layouts.app_layout')
@section('title', $title)
@section('stylesheets')
    <link href="{{ asset('css/recipes/show.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div id="recipe-container">
        <section id="general-information">
            <div id="info-container">
                <div id="recipe-details">
                    <h1>{{ $title }}</h1>
                    @if (!empty($servings))
                        <h2>{{ $servings }} Servings</h2>
                    @endif
                <p>Created by: <a href='{{ url('/user/' . $username)}}'>{{ $username }}</a></p>
                @if ($user_id === Auth::id())
                    <a href='{{ url('/recipe/' . $id . "/edit") }}' class='btn btn-primary'>Edit</a>
                    <a id='delete-show'class='btn btn-delete'>Delete</a>
                    <div id="delete-confirmation">
                        <div id="delete-prompt">
                            <p>
                                <span>Are you sure?</span>
                                <br>
                                Deleting this recipe cannot be reversed.
                            </p>
                        </div>
                        <div id="delete-buttons">
                            <a id="delete-cancel" class='btn'>Cancel</a>
                            <a class="btn btn-delete" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('delete-form').submit();">
                                Delete
                            </a>
                            <form id="delete-form" action="{{ route('recipe.destroy', $id) }}" method="POST" class="d-none">
                                @csrf
                                @method('DELETE')
                            </form>
                        </div>
                    </div>
                @endif
                </div>
                <div id="recipe-image">
                    @if ($image != "default.svg")
                        <img src='{{ url('/storage/recipes/' . $image) }}'>
                    @endif
                </div>
            </div>
            
        </section>
        <section id="description">
            <p>{{ $description }}</p>
        </section>
        <section id="ingredients">
            <h2 class='h5'>Ingredients</h2>
            <ul>
                @foreach ($ingredients as $ingredient)
                    <li>
                        {{ $ingredient }}
                    </li>
                @endforeach
            </ul>
        </section>
        <section id="instructions">
            @if( $instructions != null)
                <h2 class='h5'>Instructions</h2>
                <p>
                    {{ $instructions }}
                </p>
            @endif
        </section>
    </div>
@endsection
@section('scripts')
    <script src='{{ asset('js/recipes/show.js') }}'></script>
@endsection