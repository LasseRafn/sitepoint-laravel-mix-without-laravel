const {mix} = require('laravel-mix');

mix.js('js/app.js', 'public/js')
   .sass('sass/app.sass', 'public/css');
