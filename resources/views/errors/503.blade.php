@extends('layouts.app_layout')
@section('title', "Not Found")
@section('stylesheets')
    <link href="{{ asset('css/error.css') }}" rel="stylesheet">
@endsection
@section('content')
<div id="error">
    <h1>503 Service Unavailable</h1>
</div>
@endsection
