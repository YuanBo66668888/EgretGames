var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeviceUtils = (function (_super) {
    __extends(DeviceUtils, _super);
    function DeviceUtils() {
        return _super.call(this) || this;
    }
    DeviceUtils.prototype.IsHtml5 = function () {
        return egret.Capabilities.runtimeType == egret.RuntimeType.WEB;
    };
    DeviceUtils.prototype.IsNative = function () {
        return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
    };
    DeviceUtils.prototype.IsMobile = function () {
        return egret.Capabilities.isMobile;
    };
    DeviceUtils.prototype.IsPC = function () {
        return !egret.Capabilities.isMobile;
    };
    DeviceUtils.prototype.IsQQBrowser = function () {
        return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MQQBrowser");
    };
    DeviceUtils.prototype.IsIEBrowser = function () {
        return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MSIE");
    };
    DeviceUtils.prototype.IsFirefoxBrowser = function () {
        return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Firefox");
    };
    DeviceUtils.prototype.IsChromeBrowser = function () {
        return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Chrome");
    };
    DeviceUtils.prototype.IsSafariBrowser = function () {
        return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Safari");
    };
    DeviceUtils.prototype.IsOperaBrowser = function () {
        return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Opera");
    };
    return DeviceUtils;
}(BaseClass));
__reflect(DeviceUtils.prototype, "DeviceUtils");
//# sourceMappingURL=DeviceUtils.js.map