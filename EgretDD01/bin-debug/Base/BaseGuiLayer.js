var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseGuiLayer = (function (_super) {
    __extends(BaseGuiLayer, _super);
    function BaseGuiLayer() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    return BaseGuiLayer;
}(eui.Group));
__reflect(BaseGuiLayer.prototype, "BaseGuiLayer");
//# sourceMappingURL=BaseGuiLayer.js.map