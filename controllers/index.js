var routeMain = require('./routes/main');
var routeApi = require('./routes/api');
var routeDefault = require('./routes/default');

/**
 * Prior routes.
 *
 * @param app Express app object.
 */

function route(app) {
    app.use('/', routeMain);
    app.use('/api', routeApi);
}

/**
 * Default routes. These routes may be overridden by vitrines' routes.
 *
 * @param app Express app object.
 */

function routeDefaultFn(app) {
    app.use('/', routeDefault);
}

module.exports = {
    route: route,
    routeDefault: routeDefaultFn
};
