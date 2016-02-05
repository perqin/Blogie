var routeMain = require('./routes/main');
var routeApi = require('./routes/api');

function addRoutes(app) {
    app.use('/', routeMain);
    app.use('/api', routeApi);
}

module.exports = {
    addRoutes: addRoutes
};
