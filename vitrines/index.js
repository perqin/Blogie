/*
Vitrines are modules that organize data and render page displaying data.
Post is a built-in vitrine which make Blogie a blog system.
 */
var express = require('express');
var path = require('path');

function serveStatic(app) {
    // TODO : use loop
    app.use('/posts', express.static(path.join(__dirname, 'vitrines', 'posts', 'public')));
}

function loadAllVitrines(vs) {
    // add all vitrines
    vs.push(require('./posts/index'));
}

function Vitrines(app) {
    this.vs = [];
    this.serveStatic = serveStatic;

    loadAllVitrines(this.vs);
}

module.exports = function (app) {
    return new Vitrines(app);
};
