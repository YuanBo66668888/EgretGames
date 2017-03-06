var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MessageCenter = (function (_super) {
    __extends(MessageCenter, _super);
    function MessageCenter(tp) {
        var _this = _super.call(this) || this;
        _this.type = tp;
        Log.trace("constructorMessg:" + _this.type);
        _this.dict = {};
        _this.eVec = new Array;
        _this.lastRunTime = 0;
        if (0 == _this.type) {
            App.TimerManager.doFrame(1, 0, _this.run, _this, 0, 0);
        }
        return _this;
    }
    MessageCenter.prototype.clear = function () {
        this.dict = {};
        this.eVec.splice(0);
    };
    MessageCenter.prototype.addListener = function (type, func, param) {
        var msg = this.dict[type];
        if (msg == null) {
            msg = new Array;
            this.dict[type] = msg;
        }
        var i = 0;
        while (i < msg.length) {
            if (msg[i][0] == func && msg[i][1] == param) {
                return;
            }
            msg.push([func, param]);
            i++;
        }
    };
    MessageCenter.prototype.removeListener = function (type, func, param) {
        var msg = this.dict[type];
        if (msg != null) {
            var i = 0;
            while (i < msg.length) {
                if (msg[i][0] == func && msg[i][1] == param) {
                    msg.splice(i, 1);
                    break;
                }
            }
            if (msg.length == 0) {
                this.dict[type] = null;
                delete this.dict[type];
            }
        }
    };
    MessageCenter.prototype.removeAll = function (type) {
        var keys = Object.keys(this.dict);
        var total = keys.length;
        for (var i = 0; i < total; i++) {
            var tp = keys[i];
            var msgs = this.dict[tp];
            for (var j = 0; j < msgs.length; j++) {
                if (msgs[j][1] == type) {
                    msgs.splice(j, 1);
                    j--;
                }
            }
            if (msgs.length == 0) {
                this.dict[tp] = null;
                delete this.dict[tp];
            }
        }
    };
    MessageCenter.prototype.dispatch = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var params = [];
        for (var i = 1; i < arguments.length; i++) {
            params[i - 1] = arguments[i];
            if (this.dict[i] != null) {
                var msg_vo = ObjectPool.pop("MessageVo");
                msg_vo.type = type;
                msg_vo.param = params;
                Log.trace("Msgdispatch:" + this.type);
                if (this.type == 0) {
                    this.eVec.push(msg_vo);
                }
                else if (this.type == 1) {
                    this.dealMsg(msg_vo);
                }
                else {
                    Log.trace("MessageCenter未实现的类型");
                }
            }
        }
    };
    MessageCenter.prototype.run = function () {
        var t = egret.getTimer();
        var dt = t - this.lastRunTime > 100;
        if (dt) {
            this.lastRunTime = t;
            while (this.eVec.length > 0) {
            }
        }
    };
    MessageCenter.prototype.dealMsg = function (msg) {
        var msgs = this.dict[msg.type];
        var total = msgs.length;
        for (var i = 0; i < total;) {
            var msg_eve = msgs[i];
            msg_eve[0].apply(msg_eve[1], msg.param);
            if (msgs.length != total) {
                total = msgs.length;
                i--;
            }
            i++;
            msg.dispose();
            ObjectPool.push(msg);
        }
    };
    return MessageCenter;
}(BaseClass));
__reflect(MessageCenter.prototype, "MessageCenter");
//# sourceMappingURL=MessageCenter.js.map