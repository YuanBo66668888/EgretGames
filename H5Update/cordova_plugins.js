cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cocoon-plugin-common/www/cocoon.js",
        "id": "cocoon-plugin-common.Cocoon",
        "pluginId": "cocoon-plugin-common",
        "runs": true
    },
    {
        "file": "plugins/cocoon-plugin-canvasplus-common/www/cocoon_canvasplus.js",
        "id": "cocoon-plugin-canvasplus-common.CanvasPlus",
        "pluginId": "cocoon-plugin-canvasplus-common",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "com.ludei.splash.ios": "1.1.0",
    "cocoon-plugin-common": "1.0.2",
    "cocoon-plugin-canvasplus-common": "1.0.3",
    "com.ludei.canvasplus.ios": "2.3.3",
    "com.ludei.defaultres.ubuntu": "1.0.0",
    "com.ludei.defaultres.android": "1.0.0",
    "com.ludei.defaultres.ios": "1.1.1"
}
// BOTTOM OF METADATA
});