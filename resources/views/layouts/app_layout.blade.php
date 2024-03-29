<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    <link rel="icon" href="{{ asset('images/ZestyIcon.svg') }}"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    @yield('stylesheets')
</head>
<body>
    @include('inc.nav_inc')
    <main>
        <div id="outer-container">
            @yield('content')
        </div>
    </main>    
</body>
@include('inc.footer_inc')
</html>