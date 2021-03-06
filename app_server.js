'use strict';
let markoa = require('markoa');
let path = require('path');
var gulp = require('gulp');
var jadeMarko = require('jade-markoa');

function startService(){
  let lassoFile = path.join(__dirname, './lasso-config.json');
  let serverOpts = {port: 4005, lassoFile: lassoFile};
  let Server = markoa.Server;

  let koaApp = new Server(serverOpts).init(function(mws) {
    mws.minimal();
  });

  let AppContainer = markoa.AppContainer;
  let myAppContainer = new AppContainer(); //.start();

  let appConfigurator = new markoa.AppConfigurator(myAppContainer, {rootPath: __dirname});

  let apps = ['project', 'repository'];
  // mounting multiple apps on appContainer instance
  appConfigurator.mountApps(apps);
  myAppContainer.createRoutes(koaApp).start();
}

function jadeToMarko(done) {
  gulp.src(['apps/**/*.jade'])
      .pipe(jadeMarko({basedir: 'apps'}))
      .pipe(gulp.dest('./test_marko_jade'));
}


jadeToMarko(function () {
  startService();
});
