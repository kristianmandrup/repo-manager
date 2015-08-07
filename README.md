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
public/
  stylus/
  fonts/
  js/
views/
  - /layouts
    - app-layout.marko
  - /components
  - marko-taglib.json
  - /pages/
    - [app]/
      - [app].marko
      - [app]-layout.marko
      - /components
      - marko-taglib.json
```

Each app can have its own custom tag lib. If a tag is not found for the SPA, the tag lib discovery will traverse the parent folder tree until it finds a tag lib with that tag.

NOTE: We will likely change this as described further below!!!

### State

When a page is mounted on an App container, it can be mounted with a state, representing all the data and data provider functions available on first render. The state can be either mounted as an object or a function.

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

Roots
-----

Superior static sites builder!!!

[Roots screencast playlist](https://www.youtube.com/watch?v=fQq6kWhOSxk&list=PL_3xEq49qQMGQKc7CTFgf17zIwMeQbgay)

-	[Built in extensions](http://roots.cx/extensions)
-	[Writing custom extensions](http://roots.cx/docs/extensions)

### Records

Data extensions

-	[contentful: data from API endpoint such as CMS](https://github.com/carrot/roots-contentful)
-	[yaml data](https://github.com/carrot/roots-yaml)
-	[json data](https://github.com/carrot/roots-records)

Katon local server
------------------

Super cool :)

[Katon](http://roots.cx/articles/katon)

`$ katon add 'roots watch --port $PORT --no-open'`

`$PORT variable` will dynamically assign you a port so that you don't get stuck with a conflict.

Your site will now be accessible via it's `http://<app>.ka` URL and you just need to pull it up in your browser. Edit a couple files and watch the *live reload* in action.

To serve from specific static site folder:

`$ katon add 'charge public --port $PORT'`

Stylus
------

[Stylus](https://learnboost.github.io/stylus/) is the mean/clean super hero of SCSS. So much better!!! Pure Node :)

[Stylus playlist screencasts](https://www.youtube.com/watch?v=eJahtnmywMI)

### Stylus plugins

-	[Jeet](http://jeet.gs/) and [screencast](https://www.youtube.com/watch?v=roqlCwEn4iI)
-	[Axis](http://axis.netlify.com/) and [screencast](https://www.youtube.com/watch?v=Kv6H6mMDeuA)
-	[Nib](https://github.com/tj/nib) and [screencast](http://www.screenr.com/M6a)
-	[Rupture](http://jenius.github.io/rupture/) and [screencast](https://www.youtube.com/watch?v=fRVRtO95VhU)

Authoring Templates
-------------------

We should author Marko templates using [Jade](jade-lang.com), since it is much cleaner/faster. However, Jade only knows about certain tags, so we need to teach it about Marko tags and custom tags we define. For this we can use Pencil :)

[Pencil](https://www.npmjs.com/package/pencil)

It also improves the built in tags!!!

Configuration of Pencil has been started in `config/pencil` let's make it work with the build pipeline of Roots :)

Next step is to have Pencil traverse the views folder and find the `marko-taglib.json` files, use it to find the dirs with tags and register them in the same fashion! Let's have fun!!!

### Lasso

-	[Referencing external assets](https://github.com/lasso-js/lasso#external-dependencies)

TODO
----

Styles:

-	Semantic UI
-	Stylus
-	[Roots](http://roots.cx/)
-	Jeet (optional)

STOP USING: Markoa LAYOUTS and PARTIALS!!! Instead use Jade features for this!!!

Npm installs (Roots will take care of most of these...)

-	`npm install -g jeet`
-	`npm install gulp-stylus autoprefixer-stylus nib axis rupture fluidity jeet --save-dev`

New App file structure
----------------------

```sh
/apps
  /_global
    /components
    /state
      index.js
    /layouts
      _default_page.jade
  /index
  /projects
    /components
      /project-feed
        template.marko
    /layouts
      _page.jade
    /state
      index.js
    /page
      projects.jade
      projects.marko
      projects.browser.json
    marko-taglib.json
  /repositories
  /teams
  ...
  marko-taglib.json  
```

We will have all application state and views (templates, page defs, taglibs etc.) under the same `/apps` folder. This makes it easy to port or extract the app as a single unit, such as creating a separate module for the app.

Let's see if we can make Roots.cx play nice with this kind of structure. If not, perhaps drop the jade part of Roots and mainly use the Stylus compilation or just drop it for our own gulp tasks solution.

We need to write a small app generator which generates an app with the basic file structure as defined for the `projects` app.

### Generators

The markoa CLI binaries can leverage Yeoman or Slush under the covers ;) Use node Commander for command API.

Create new markoa project:

`$ markoa new repo-man`

Create new app in `/apps`:

`$ markoa app projects`

### Jade

Each marko page or tag should be developed in jade and compiled to marko. We might need a post processing step to the compile process to rename files from default `.html` to `.marko` and strip any unnecessary markup generated in the process. By convention, all jade layout templates should be prefixed with underscore.

### Jade compilation

We can perhaps use the [Jade API](http://jade-lang.com/api/) directly or use the [Jade compiler](https://www.npmjs.com/package/jade-compiler). We can use Jade compilation to generate: HTML or javascript functions. The javascript can be re-used either on the server, the client or both!

### Jade layout

We should consider using Jade layouts in favor of Marko layouts. But perhaps we can combine them.

*Page layout*

```jade
//- _page.jade
doctype html
html
  head
    block title
      title Default title
  body
    block content
```

*Index page*

```jade
//- index.jade
extends ../layouts/_page.jade

block title
  title Article Title

block content
  h1 My Article
```
