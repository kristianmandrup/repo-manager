'use strict';
let markoa = require('markoa');
let path = require('path');

let lassoFile = path.join(__dirname, './lasso-config.json');
let serverOpts = {port: 4004, lassoFile: lassoFile};
let Server = markoa.Server;

let koaApp = new Server(serverOpts).init(function(mws) {
  mws.minimal();
});

let AppContainer = markoa.AppContainer;
let myAppContainer = new AppContainer(koaApp).start();

let apps = ['project', 'repository'];
// mounting multiple apps on appContainer instance
myAppContainer.mount.apps(apps);
