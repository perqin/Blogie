var routeMain = require('./routes/main');
var routeApi = require('./routes/api');
var routeDefault = require('./routes/default');

function route(app) {
    app.use('/', routeMain);
    app.use('/api', routeApi);
}

function routeDefaultFn(app) {
    app.use('/', routeDefault);
}

module.exports = {
    route: route,
    routeDefault: routeDefaultFn
};
