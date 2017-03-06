var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AverageUtils = (function (_super) {
    __extends(AverageUtils, _super);
    function AverageUtils() {
        return _super.call(this) || this;
    }
    AverageUtils.prototype.push = function () {
    };
    AverageUtils.prototype.getValue = function () {
    };
    AverageUtils.prototype.clear = function () {
    };
    return AverageUtils;
}(BaseClass));
__reflect(AverageUtils.prototype, "AverageUtils");
//# sourceMappingURL=AverageUtils.js.map