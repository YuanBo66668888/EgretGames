var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HotspotBitmap = (function (_super) {
    __extends(HotspotBitmap, _super);
    function HotspotBitmap() {
        var _this = _super.call(this) || this;
        _this._hotspot = [];
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
        return _this;
    }
    HotspotBitmap.prototype.addHotspotArea = function (rt, cb, obj, param) {
        this._hotspot.push({
            rect: rt,
            callBack: cb,
            thisObj: obj,
            para: param
        });
    };
    HotspotBitmap.prototype.onTouch = function (evt) {
        for (var obj, x = evt.localX, y = evt.localY, i = 0; i < this._hotspot.length; i++) {
            obj = this._hotspot[i];
            if (obj.rect.contains(x, y)) {
                if (obj.para) {
                    obj.callBack.call(obj.thisObj, obj.para);
                }
                else {
                    obj.callBack.call(obj.thisObj);
                }
            }
        }
    };
    return HotspotBitmap;
}(egret.Bitmap));
__reflect(HotspotBitmap.prototype, "HotspotBitmap");
//# sourceMappingURL=HotspotBitmap.js.map