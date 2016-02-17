'use strict';

/**
 * palettes Definition of theme palettes.
 * colors are a series of colors ordered in 50, 100, 200, 300, 400, 500, 600, 700, 800, 900.
 * Add your custom palette and set palette in module.exports.
 */

var palettes = {
    purple: {
        colors: ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C'],
        accentColor: '#E91E63'
    }
};

/**
 * themeName(required)
 * themeDirName(required)
 * themePalette(theme required)
 */

module.exports = {
    themeName: 'Material design',
    themeDirName: 'material-design',
    themePalette: 'purple'
    //serveStatic: serveStatic
};
