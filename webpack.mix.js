const mix = require('laravel-mix');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production"){
    mix.js('resources/js/admin/app.js', 'public/js/admin/')
        .vue()
        .sass('resources/sass/admin/app.scss', 'public/css/admin/')
        .webpackConfig({
            plugins: [
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            ],
            output: {
                publicPath: `${process.env.MIX_BASE_URL}/`,
                chunkFilename: `js/admin/admin-chunks/[name].js`,
            }
        })
        .options({
            processCssUrls: false
        });
}

if(process.env.NODE_ENV === "clientdevelopment" || process.env.NODE_ENV === "clientproduction"){
    mix.js('resources/js/client/app.js', 'public/js/client/')
        .vue()
        .sass('resources/sass/client/app.scss', 'public/css/client/')
        .webpackConfig({
            plugins: [
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            ],
            output: {
                publicPath: `${process.env.MIX_BASE_URL}/`,
                chunkFilename: `js/client/client-chunks/[name].js`,
            }
        })
        .options({
            processCssUrls: false
        });
}


// mix.js('resources/js/admin/app.js', 'public/js/admin')
//     // .vue()
//     .sass('resources/sass/admin/app.scss', 'public/css/admin/app.css');

