var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RandomUtils = (function (_super) {
    __extends(RandomUtils, _super);
    function RandomUtils() {
        return _super.call(this) || this;
    }
    RandomUtils.prototype.limit = function (min, max) {
        min = Math.min(min, max);
        max = Math.max(min, max);
        var off = max - min;
        return min + Math.random() * off;
    };
    RandomUtils.prototype.limitInteger = function (min, max) {
        return Math.round(this.limit(min, max));
    };
    RandomUtils.prototype.randomArray = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    return RandomUtils;
}(BaseClass));
__reflect(RandomUtils.prototype, "RandomUtils");
//# sourceMappingURL=RandomUtils.js.map