'use strict';

var clone = require('clone');

function Collectee(d) {
    var cee = this;
    cee.data = d ? clone(d) : {};
    cee.titleIt = titleIt;
    cee.themeIt = themeIt;
    cee.getData = getData;

    function titleIt(t) {
        cee.data.title = t;
        return cee;
    }

    function themeIt(theme, css) {
        cee.data[css + 'Css'] = '/themes/' + theme + '/css/' + css + '.css';
        return cee;
    }

    function getData() {
        return cee.data;
    }
}

function create(data) {
    return new Collectee(data);
}

module.exports = {
    Collectee: Collectee,
    create: create
};
