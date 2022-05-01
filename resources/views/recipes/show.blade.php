@extends('layouts.app_layout')
@section('title', $recipe->title)
@section('stylesheets')
    <link href="{{ asset('css/recipes/show.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="container">
        {{ $recipe->title }}
        @if ($recipe->user_id === Auth::id())
                <a href='{{ url('/recipes/' . $recipe->id . "/edit") }}' class='btn btn-primary'>Edit</a>
        @endif
    </div>
@endsection