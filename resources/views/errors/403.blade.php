@extends('layouts.app_layout')
@section('title', "Not Found")
@section('stylesheets')
    <link href="{{ asset('css/error.css') }}" rel="stylesheet">
@endsection
@section('content')
<div id="error">
    <h1>403 Forbidden</h1>
</div>
@endsection
