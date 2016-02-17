var collector = require('../../utils/page-data-collector/index');
var express = require('express');
var router = express.Router();

//noinspection JSUnusedLocalSymbols
/**
 * Auth page.
 */

router.get('/auth', function(req, res, next) {
    var data = collector
        .create()
        .titleIt('Login')
        .themeIt('material-design', 'theme')
        .themeIt('material-design', 'auth')
        .getData();
    res.render('auth', data);
});

module.exports = router;
