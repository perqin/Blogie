var path = require('path');
var express = require('express');

function loadAllThemes(ts) {
    // add all themes
    ts.push(require('./material-design/index'));
}

function ThemeManager() {
    var tm = this;
    tm.themes = [];
    tm.serveStatic = serveStatic;

    loadAllThemes(this.themes);

    function serveStatic(app) {
        for (var i = 0; i < tm.themes.length; ++i) {
            // /themes/md/css/theme.css => /themes/md/public/css/theme.css
            app.use('/themes/' + tm.themes[i].themeDirName, express.static(
                path.join(__dirname, tm.themes[i].themeDirName, 'public')));
        }
    }
}

module.exports = new ThemeManager();
