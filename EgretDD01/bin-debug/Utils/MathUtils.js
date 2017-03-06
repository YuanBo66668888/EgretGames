var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MathUtils = (function (_super) {
    __extends(MathUtils, _super);
    function MathUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 获得
    MathUtils.prototype.getAngle = function (rad) {
        return 180 * rad / Math.PI;
    };
    // 
    MathUtils.prototype.getRadian = function (angle) {
        return angle / 180 * Math.PI;
    };
    //
    MathUtils.prototype.getRadian2 = function (t, e, i, n) {
        var s = i - t, r = n - e;
        return Math.atan2(r, s);
    };
    //
    MathUtils.prototype.getDistance = function (t, e, i, n) {
        var s = i - t, r = n - e, a = s * s + r * r;
        return Math.sqrt(a);
    };
    return MathUtils;
}(BaseClass));
__reflect(MathUtils.prototype, "MathUtils");
//# sourceMappingURL=MathUtils.js.map