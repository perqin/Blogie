/*
Vitrines are modules that organize data and render page displaying data.
Post is a built-in vitrine which make Blogie a blog system.
 */

function loadAllVitrines(vs) {
    // add all vitrines
    vs.push(require('./posts/index'));
}

function Vitrines() {
    var self = this;
    self.vitrines = [];
    self.serveStatic = serveStatic;
    self.route = route;

    function serveStatic(app) {
        for (var i = 0; i < self.vitrines.length; ++i) {
            self.vitrines[i].serveStatic(app);
        }
    }

    function route(app) {
        for (var i = 0; i < self.vitrines.length; ++i) {
            self.vitrines[i].route(app);
        }
    }

    loadAllVitrines(this.vitrines);
}

module.exports = new Vitrines();
