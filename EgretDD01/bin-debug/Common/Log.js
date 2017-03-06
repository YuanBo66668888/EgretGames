var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Log = (function () {
    function Log() {
    }
    Log.trace = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
    };
    return Log;
}());
__reflect(Log.prototype, "Log");
//# sourceMappingURL=Log.js.map