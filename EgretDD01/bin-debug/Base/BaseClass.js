var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseClass = (function () {
    function BaseClass() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    BaseClass.getInstance = function () {
        for (var params = [], i = 0; i < arguments.length; i++) {
            params[i] = arguments[i];
        }
        if (!this._instance) {
            var n = params.length;
            if (n == 0) {
                this._instance = new BaseClass();
            }
            else if (n == 1) {
                this._instance = new BaseClass(params[0]);
            }
            else if (n == 2) {
                this._instance = new BaseClass(params[0], params[1]);
            }
            else if (n == 3) {
                this._instance = new BaseClass(params[0], params[1], params[2]);
            }
            else if (n == 4) {
                this._instance = new BaseClass(params[0], params[1], params[2], params[3]);
            }
            else if (n == 4) {
                this._instance = new BaseClass(params[0], params[1], params[2], params[3], params[4]);
            }
        }
        return this._instance;
    };
    return BaseClass;
}());
__reflect(BaseClass.prototype, "BaseClass");
//# sourceMappingURL=BaseClass.js.map