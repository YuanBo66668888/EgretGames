var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EgretExpandUtils = (function (_super) {
    __extends(EgretExpandUtils, _super);
    function EgretExpandUtils() {
        return _super.call(this) || this;
    }
    EgretExpandUtils.prototype.init = function () {
        AnchorUtils.init();
    };
    return EgretExpandUtils;
}(BaseClass));
__reflect(EgretExpandUtils.prototype, "EgretExpandUtils");
//# sourceMappingURL=EgretExpandUtils.js.map