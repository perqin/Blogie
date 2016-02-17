'use strict';

module.exports = {
    getVal: getVal,
    setVal: setVal
};

function getVal(key) {
    if (key === 'theme') return 'material-design'; else return '';
}

function setVal(key, val) {
}
