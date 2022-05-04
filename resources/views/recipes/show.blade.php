@extends('layouts.app_layout')
@section('title', $title)
@section('stylesheets')
    <link href="{{ asset('css/recipes/show.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="container">
        {{ $title }}
        <br>
        {{ $description }}
        <br>
        {{ $username }}
        <br>
        {{ $servings }}
        <br>
        @foreach ($ingredients as $ingredient)
            {{ $ingredient }}
            <br>
        @endforeach
        <br>
        {{ $instructions }}
        <br>
        <img src='{{ url('/storage/recipes/' . $image) }}'>
        @if ($user_id === Auth::id())
                <a href='{{ url('/recipes/' . $id . "/edit") }}' class='btn btn-primary'>Edit</a>
        @endif
    </div>
@endsection