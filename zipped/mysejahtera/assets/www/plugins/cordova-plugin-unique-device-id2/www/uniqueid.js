cordova.define("cordova-plugin-unique-device-id2.UniqueDeviceID", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
    
    get: function(success, fail) {
        cordova.exec(success, fail, 'UniqueDeviceID', 'get', []);
    }

};
});
