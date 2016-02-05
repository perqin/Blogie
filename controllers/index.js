var routeMain = require('./routes/main');
var routeApi = require('./routes/api');

function route(app) {
    app.use('/', routeMain);
    app.use('/api', routeApi);
}

module.exports = {
    route: route
};
