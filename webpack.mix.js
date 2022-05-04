const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.webpackConfig({
    stats: {
        children: true
    }
});

mix 

    // Universal files
    .js('resources/js/main.js', 'public/js')
    .sass('resources/scss/main.scss', 'public/css')


    // Auth
    .sass('resources/scss/auth/auth.scss', 'public/css/auth')


    // Recipes
    .sass('resources/scss/recipes/create.scss', 'public/css/recipes')
    .sass('resources/scss/recipes/show.scss', 'public/css/recipes')
    .sass('resources/scss/recipes/index.scss', 'public/css/recipes')
    .js('resources/js/recipes/create.js', 'public/js/recipes')


    // Welcome
    .sass('resources/scss/welcome.scss', 'public/css')


    // Dashboard
    .sass('resources/scss/dashboard.scss', 'public/css')
    .js('resources/js/dashboard.js', 'public/js')

    // User
    .sass('resources/scss/user.scss', 'public/css')


    .sourceMaps();
