Repo Manager
============

Repo Project Manager for Web development projects using micro services architecture :)

Requirements
------------

-	Node ES6 compatible (f.ex [io.js](iojs.org)\)
-	npm (node package manager)

Installation
------------

Install IO.js via [nvm](https://github.com/creationix/nvm)

`nvm install iojs``nvm alias default iojs`

Install node packages required by the server app

`npm install`

Run
---

`node server.js`

Leverages the Markoa appplication architecture for Rapid rendering of static sites and rapid prototyping!!!

Project structure
-----------------

This project consists of multiple SPAs.

### Views

```bash
views/
  - /layouts
    - app-layout.marko
  - /components
  - marko-taglib.json
  - /pages/[app]/
    - [app].marko
    - [app]-layout.marko
    - /components
    - marko-taglib.json
```

Each app can have its own custom tag lib. If a tag is not found for the SPA, the tag lib discovery will traverse the parent folder tree until it finds a tag lib with that tag.

### State

When a page is mounted on an App container, it can be mounted with a State, representing all the data and data provider functions available on first render.

Tag libs
--------

This project uses [Custom tag libs](https://github.com/marko-js/marko#custom-taglibs).

Semantic UI
-----------

After `npm install` navigate to `semantic` and run `gulp build` to build semantic `dist` distribution.

```bash
cd semantic/
gulp build
```

TODO
----

Styles:

-	Semantic UI
-	Stylus
-	Jeet and other nice Stylus addons :)

Npm installs

-	`npm install -g jeet`
-	`npm install gulp-stylus autoprefixer-stylus nib axis rupture fluidity jeet --save-dev`

[Stylus screencasts](https://www.youtube.com/watch?v=eJahtnmywMI)

Stylus plugins

-	[Jeet](http://jeet.gs/) and [screencast](https://www.youtube.com/watch?v=roqlCwEn4iI)
-	[Axis](http://axis.netlify.com/) and [screencast](https://www.youtube.com/watch?v=Kv6H6mMDeuA)
-	[Nib](https://github.com/tj/nib) and [screencast](http://www.screenr.com/M6a)
-	[Rupture](http://jenius.github.io/rupture/) and [screencast](https://www.youtube.com/watch?v=fRVRtO95VhU)

Lasso:

-	Reference external assets
