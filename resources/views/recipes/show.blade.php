@extends('layouts.app_layout')
@section('title', $recipe->title)
@section('stylesheets')
    <link href="{{ asset('css/recipes/show.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="container">
        {{ $recipe->title }}
    </div>
@endsection