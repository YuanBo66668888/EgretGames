var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LanManager = (function (_super) {
    __extends(LanManager, _super);
    function LanManager() {
        return _super.call(this) || this;
    }
    LanManager.prototype.initLanguageData = function (dat) {
        this._data = dat;
    };
    LanManager.prototype.trans = function (key) {
        return this._data[key] ? this._data[key] : this._data.invalid;
    };
    return LanManager;
}(BaseClass));
__reflect(LanManager.prototype, "LanManager");
//# sourceMappingURL=LanManager.js.map