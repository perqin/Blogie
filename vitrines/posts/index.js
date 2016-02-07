/*
Posts stores and renders blog posts.
 */

var express = require('express');
var path = require('path');

function serveStatic(app, rootDir) {
    app.use('/posts', express.static(path.join(rootDir, 'posts', 'public')));
}

function route(app) {
    // TODO
}

module.exports = {
    //tag: 'posts',
    serveStatic: serveStatic,
    route: route
};
