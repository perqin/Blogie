/*
Vitrines are modules that organize data and render page displaying data.
Post is a built-in vitrine which make Blogie a blog system.
 */
var path = require('path');

function loadAllVitrines(vs) {
    // add all vitrines
    vs.push(require('./posts/index'));
}

function Vitrines() {
    this.vitrines = [];
    this.rootDirectory = path.join(__dirname, 'vitrines');
    this.serveStatic = function (app) {
        for (var i = 0; i < this.vitrines.length; ++i) {
            this.vitrines[i].serveStatic(app, this.rootDirectory);
        }
    };
    this.route = function (app) {
        for (var i = 0; i < this.vitrines.length; ++i) {
            this.vitrines[i].route(app);
        }
    };

    loadAllVitrines(this.vitrines);
}

module.exports = function () {
    return new Vitrines();
};
