var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimerManager = (function (_super) {
    __extends(TimerManager, _super);
    function TimerManager() {
        var _this = _super.call(this) || this;
        // Init
        _this._handlers = new Array;
        _this._delHandlers = new Array;
        _this._currTime = egret.getTimer();
        _this._currFrame = 0;
        _this._count = 0;
        _this._timeScale = 1;
        egret.Ticker.getInstance().register(_this.onEnterFrame, _this);
        return _this;
    }
    TimerManager.prototype.onEnterFrame = function () {
        this._currFrame++;
        this._currTime = egret.getTimer();
        App.DebugUtils.start("TimerManager:");
        //
        for (var i = 0; i < this._count; i++) {
            var handle = this._handlers[i];
            var used_tm = handle.userFrame ? this._currFrame : this._currTime;
            if (used_tm >= handle.exeTime) {
                App.DebugUtils.start(handle.method.toString());
                handle.method.call(handle.methodObj, (this._currTime - handle.dealTime) * this._timeScale);
                App.DebugUtils.stop(handle.method.toString());
                handle.dealTime = this._currTime;
                handle.exeTime += handle.delay;
                if (!handle.repeat) {
                    if (handle.repeatCount > 1) {
                        handle.repeatCount--;
                    }
                    else {
                        if (handle.complateMethod) {
                            handle.complateMethod.apply(handle.complateMethodObj);
                            this._delHandlers.push(handle);
                        }
                    }
                }
            }
        }
        //
        while (this._delHandlers.length > 0) {
            var del_handle = this._delHandlers.pop();
            this.remove(del_handle.method, del_handle.methodObj);
        }
        //
        App.DebugUtils.stop("TimerManager:");
    };
    TimerManager.prototype.create = function (userFrame, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
        if (!(delay < 0 || repeatCount < 0 || method == null)) {
            this.remove(method, methodObj);
            var handler = ObjectPool.pop("TimerHandler");
            handler.userFrame = userFrame;
            handler.repeat = (0 == repeatCount);
            handler.repeatCount = repeatCount;
            handler.delay = delay;
            handler.method = method;
            handler.methodObj = methodObj;
            handler.complateMethod = complateMethod;
            handler.complateMethodObj = complateMethodObj;
            handler.exeTime = delay + (userFrame ? this._currFrame : this._currTime);
            handler.dealTime = this._currTime;
            this._handlers.push(handler);
            this._count++;
        }
    };
    TimerManager.prototype.doTimer = function (delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
        if (complateMethod == 0) {
            complateMethod = null;
        }
        if (complateMethodObj == 0) {
            complateMethodObj = null;
        }
        this.create(false, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
    };
    TimerManager.prototype.doFrame = function (delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
        if (complateMethod == 0) {
            complateMethod = null;
        }
        if (complateMethodObj == 0) {
            complateMethodObj = null;
        }
        this.create(true, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
    };
    Object.defineProperty(TimerManager.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    TimerManager.prototype.remove = function (method, methodObj) {
        for (var i = 0; i < this._count; i++) {
            var handle = this._handlers[i];
            if (handle.method == method && handle.methodObj == methodObj) {
                this._handlers.splice(i, 1);
                ObjectPool.push(handle);
                this._count--;
                break;
            }
        }
    };
    TimerManager.prototype.removeAll = function (method) {
        for (var i = 0; i < this._count; i++) {
            var handle = this._handlers[i];
            if (handle.method == method) {
                this._handlers.splice(i, 1);
                ObjectPool.push(handle);
                this._count--;
                i--;
            }
        }
    };
    TimerManager.prototype.isExist = function (method, methodObj) {
        for (var i = 0; i < this._count; i++) {
            var handle = this._handlers[i];
            if (handle.method == method && handle.methodObj == methodObj) {
                return true;
            }
        }
        return false;
    };
    return TimerManager;
}(BaseClass));
__reflect(TimerManager.prototype, "TimerManager");
//# sourceMappingURL=TimerManager.js.map