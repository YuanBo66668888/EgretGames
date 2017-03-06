var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var QueueExecutor = (function () {
    function QueueExecutor() {
        this._functions = new Array;
    }
    QueueExecutor.prototype.setCallBack = function (cb, target) {
        this._callBack = cb;
        this._callBackTarget = target;
    };
    QueueExecutor.prototype.regist = function (func, params) {
        this._functions.push([func, params]);
    };
    QueueExecutor.prototype.start = function () {
        this.next();
    };
    QueueExecutor.prototype.next = function () {
        if (this._functions) {
            if (this._functions.length == 0) {
                if (this._callBack) {
                    this._callBack.call(this._callBackTarget);
                    this._callBack = null;
                    this._callBackTarget = null;
                }
                else {
                    var func_arr = this._functions.shift();
                    func_arr[0].call(func_arr[1]);
                }
            }
        }
    };
    return QueueExecutor;
}());
__reflect(QueueExecutor.prototype, "QueueExecutor");
//# sourceMappingURL=QueueExecutor.js.map