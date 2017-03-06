var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ByteArrayMsg = (function () {
    function ByteArrayMsg() {
        this.receive = function () {
        };
        this._msgBuffer = new egret.ByteArray;
    }
    ByteArrayMsg.prototype.send = function () {
    };
    ByteArrayMsg.prototype.decode = function () {
    };
    ByteArrayMsg.prototype.encode = function () {
    };
    return ByteArrayMsg;
}());
__reflect(ByteArrayMsg.prototype, "ByteArrayMsg");
//# sourceMappingURL=ByteArrayMsg.js.map