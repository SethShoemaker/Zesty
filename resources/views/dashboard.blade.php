@extends('layouts.app_layout')
@section('title', "Dashboard")
@section('stylesheets')
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
    @if (session('status'))
        {{ session('status') }}
    @endif
    <div id="infoContainer" class='row'>
        <div class="col-md-3 col-lg-2" id='avatarContainer'>
            <div id="avatarFrame">
                <div id="avatarEditIcon">
                    <img src='/images/iconEdit.svg'>
                </div>
                <img src='https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'>
            </div>  
        </div>
        <div id="nameContainer" class='col-md-8'>
            <h1 class='fs-1'>{{ $username }}</h1>
            <h2 class='fs-6'>{{ $name }}</h2>
            <p class='fs-6'>Account created on {{ $created }}</p>
        </div>
    </div>
    <div id="avatarFormContainer">
        <div id="screenOverlay"></div>
        <form id='avatarForm'>
            @csrf
            <div id="avatarPreview">
                <img src='https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'>
            </div>
            <div id="updateButtons">
                <label for='avatarUpload'>Upload</label>
                <input type="file" name="avatarUpload" id="avatarUpload" accept="image/jpg, image/jpeg, image/png, image/svg">
                <button type='submit' value='delete'>Delete</button>
            </div>
            <div id="submitButtons">
                <button type='submit' value='cancel' id='avatarFormCancel'>Cancel</button>
                <button type='submit' id='avatarFormSave'>Save Changes</button>
            </div>
        </form>
    </div>
</div>
@endsection
@section('scripts')
    <script src='/js/dashboard.js'></script>
@endsection