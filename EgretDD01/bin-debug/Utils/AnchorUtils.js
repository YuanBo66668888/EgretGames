var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnchorUtils = (function (_super) {
    __extends(AnchorUtils, _super);
    function AnchorUtils() {
        return _super.call(this) || this;
    }
    AnchorUtils.init = function () {
        AnchorUtils._anchorChange = Object.create(null);
        AnchorUtils._propertyChange = Object.create(null);
    };
    AnchorUtils.injectAnchor = function () {
    };
    return AnchorUtils;
}(BaseClass));
__reflect(AnchorUtils.prototype, "AnchorUtils");
//# sourceMappingURL=AnchorUtils.js.map