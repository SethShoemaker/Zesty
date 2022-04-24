@extends('layouts.app_layout')
@section('title', "Post Recipe")
@section('stylesheets')
    <link href="{{ asset('css/form.css') }}" rel="stylesheet">
    <link href="{{ asset('css/post.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class='container'>
        <h1 class="formTitle mb-3">Post Recipe</h1>
        <form action="post" method="post" class='row'>
            @csrf
            <div class="col-12 my-3">
                <label for="title">
                    Recipe Title
                </label>
    
                <input id="title" type="text" class="form-control @error('title') is-invalid @enderror" name="title" value="{{ old('title') }}" required autofocus>
            
                @error('title')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-12 my-3">
                <label for="servings">
                    Servings
                </label>

                <input type="number" name="servings" id="servings" class='form-control' min='0' step='1' max='16' required>

                {{-- <select name="servings" id="servings" class='form-control form-select'>
                    <option value='1'> 1 </option>
                    <option value='2'> 2 </option>
                    <option value='3'> 3 </option>
                    <option value='4'> 4 </option>
                    <option value='5'> 5 </option>
                    <option value='6'> 6 </option>
                    <option value='7'> 7 </option>
                    <option value='8'> 8 </option>
                    <option value='9'> 9 </option>
                    <option value='10'> 10 </option>
                    <option value='11'> 11 </option>
                    <option value='12'> 12 </option>
                    <option value='13'> 13 </option>
                    <option value='14'> 14 </option>
                    <option value='15'> 15 </option>
                    <option value='16'> 16 </option>
                </select> --}}
            
                @error('servings')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div> 
            <div class="col-12 my-3">
                <label for="image">
                    Image
                </label>
    
                <input id="image" type="file" class="form-control @error('image') is-invalid @enderror" name="image" value="{{ old('image') }}">
            
                @error('image')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col-12">
                <button type='submit' class='btn btn-primary'>Post</button>
            </div>
        </form>
    </div>
@endsection