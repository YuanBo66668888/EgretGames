var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DebugUtils = (function (_super) {
    __extends(DebugUtils, _super);
    function DebugUtils() {
        var _this = _super.call(this) || this;
        _this._threshold = 3;
        _this._startTimes = {};
        return _this;
    }
    DebugUtils.prototype.isOpen = function (open) {
        this._isOpen = open;
    };
    Object.defineProperty(DebugUtils.prototype, "isDebug", {
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DebugUtils.prototype.start = function (msg) {
        if (this._isOpen) {
            this._startTimes[msg] = egret.getTimer;
        }
    };
    DebugUtils.prototype.stop = function (id) {
        if (!this._isOpen) {
            return 0;
        }
        else if (!this._startTimes[id]) {
            return 0;
        }
        var between = egret.getTimer() - this._startTimes[id];
        if (between > this._threshold) {
            Log.trace(id + ":" + between);
        }
    };
    return DebugUtils;
}(BaseClass));
__reflect(DebugUtils.prototype, "DebugUtils");
//# sourceMappingURL=DebugUtils.js.map