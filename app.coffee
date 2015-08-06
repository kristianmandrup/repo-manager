axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
jeet      = require 'jeet'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
paths = require 'build/paths.js'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore']

  extensions: [
    js_pipeline(files: paths.source),
    css_pipeline(files: paths.stylus)
  ]
  output: paths.output
  server: 'app.js'
  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  jade:
    pretty: true
