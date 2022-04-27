@extends('layouts.app_layout')
@section('title', "Post Recipe")
@section('stylesheets')
    <link href="{{ asset('css/form.css') }}" rel="stylesheet">
    <link href="{{ asset('css/post.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class='container'>
        <h1 class="mb-3">Post Recipe</h1>
        <form action="post" method="post">
            @csrf
            <div class="row form-section">
                <h2 class='h4'>Step 1: General Information</h2>
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

                    <select name="servings" id="servings" class='form-control form-select'>
                        <option value=1>1 Serving</option>
                        <option value=2>2 Servings</option>
                        <option value=3>3 Servings</option>
                        <option value=4>4 Servings</option>
                        <option value=5>5 Servings</option>
                        <option value=6>6 Servings</option>
                        <option value=7>7 Servings</option>
                        <option value=8>8 Servings</option>
                        <option value=9>9 Servings</option>
                        <option value=10>10 Servings</option>
                        <option value=11>11 Servings</option>
                        <option value=12>12 Servings</option>
                        <option value=13>13 Servings</option>
                        <option value=14>14 Servings</option>
                        <option value=15>15 Servings</option>
                        <option value=16>16 Servings</option>
                    </select>

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

                    <label for='image' id='imageFrame'>
                        <img src='/storage/recipes/recipe-placeholder.svg' id='imagePreview'>
                    </label>

                    <input type="file" accept="image/jpg, image/jpeg, image/png, image/svg" class="d-none" name="image" id='image'>

                    @error('image')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="row form-section">
                <h2 class='h4'>Step 2: Ingredients</h2>
                <div class="row my-3">
                    <div class="col-4 col-md-3">
                        <label for="ingredientQuantity">Quantity</label>
                        <input type="text" id="ingredientQuantity" class='form-control ingredientInput' oninput="this.value = this.value.replace(/[^0-9.]/g, '')">
                        <div class="ingredientQuantity-feedback">
                            <span class='form-text'>Ex: 2</span>
                        </div>
                    </div>
                    <div class="col-8 col-md-7">
                        <label for="ingredientName">Ingredient</label>
                        <input id='ingredientName' class="form-control ingredientInput" type="text">
                        <div class="ingredientName-feedback">
                            <span class='form-text'>Ex: Cups Milk</span>
                        </div>
                    </div>
                    <div class="col-12 col-md-2">
                        <label class='invisible'>Add</label>
                        <input value='Add' id='addIngredient' class='btn btn-primary form-control ingredientInput' type='button'>
                    </div>
                </div>
                <div class="col-12 mb-5 mt-2">
                    <input type='text' id='ingredientsJSON' name='ingredientsJSON' readonly class='d-none'>
                    <ul id='ingredientsList' class='list-group my-2 fs-4'>
                    </ul>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-end align-items-center mt-2">
                <button type='submit' class='btn btn-primary'>Post Recipe</button>
            </div>
        </form>
    </div>
@endsection
@section('scripts')
    <script src='/js/post.js'></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
@endsection