var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BitmapNumber = (function (_super) {
    __extends(BitmapNumber, _super);
    function BitmapNumber() {
        return _super.call(this) || this;
    }
    BitmapNumber.prototype.createNumPic = function () {
    };
    BitmapNumber.prototype.desstroyNumPic = function () {
    };
    BitmapNumber.prototype.changeNum = function () {
    };
    BitmapNumber.prototype.repositionNumPic = function () {
    };
    BitmapNumber.prototype.clearContainer = function () {
    };
    BitmapNumber.prototype.recycleBM = function () {
    };
    BitmapNumber.prototype.getContainer = function () {
    };
    BitmapNumber.prototype.getSingleNumPic = function () {
    };
    BitmapNumber.prototype.getTexture = function () {
    };
    BitmapNumber.prototype.getBitmap = function () {
    };
    return BitmapNumber;
}(BaseClass));
__reflect(BitmapNumber.prototype, "BitmapNumber");
//# sourceMappingURL=BitmapNumber.js.map