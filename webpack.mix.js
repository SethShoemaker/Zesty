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

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/dashboard.js', 'public/js')
    .sass('resources/scss/main.scss', 'public/css')
    .sass('resources/scss/form.scss', 'public/css')
    .sass('resources/scss/auth.scss', 'public/css')
    .sass('resources/scss/post.scss', 'public/css')
    .sass('resources/scss/mail.scss', 'public/css')
    .sass('resources/scss/dashboard.scss', 'public/css')
    .sourceMaps();
