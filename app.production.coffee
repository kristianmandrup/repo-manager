axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
jeet      = require 'jeet'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'


module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore']

  extensions: [
    js_pipeline(files: 'public/js/*.js', out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: 'public/stylus/*.styl', out: 'css/build.css', minify: true, hash: true)
  ]
  output: 'dist'
  server: 'app.js'
  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  jade:
    pretty: true
