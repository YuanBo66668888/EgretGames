var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BuildTimer = (function (_super) {
    __extends(BuildTimer, _super);
    function BuildTimer() {
        var _this = _super.call(this) || this;
        _this.cd = 0;
        _this.cdMax = 0;
        _this.bspe = false;
        return _this;
    }
    BuildTimer.prototype.initLogic = function (curr, max) {
        this.cd = Math.ceil(curr);
        this.cdMax = max;
    };
    BuildTimer.prototype.initView = function (keybtn, progress, timelabel, costlabel, timeCallback, target) {
        this.keyBtn = keybtn;
        this.progress = progress;
        this.timeLabel = timelabel;
        this.costLabel = costlabel;
        this.timeupCallback = timeCallback;
        this.target = target;
    };
    BuildTimer.prototype.refresh = function () {
        if (this.keyBtn == null && this.bspe || this.keyBtn != null && this.keyBtn.selected) {
        }
    };
    BuildTimer.getStandTime = function (tm, e) {
        if (tm <= 0) {
            return "0S";
        }
        var ret = "";
        var tm_tmp = tm;
        var day = Math.floor(tm / 86400);
        var last = tm - day * 86400;
        var hour = Math.floor(last / 3600);
        last -= 3600 * last;
        var min = Math.floor(last / 60);
        var sec = last;
        var dats = [day, hour, min, sec];
        var day_key = ["D", "H", "M", "S"];
    };
    BuildTimer.getCountDownTime = function (v) {
    };
    BuildTimer.prototype.getCost = function () {
        var ret = Math.ceil(this.cd / 60);
        return ret;
    };
    BuildTimer.prototype.timeFly = function (v) {
        if (this.cd <= 0 || v <= 0) {
            return false;
        }
    };
    BuildTimer.prototype.applyCallback = function () {
        if (this.timeupCallback != null && this.keyBtn.selected) {
            this.timeupCallback.call(this.target);
        }
    };
    BuildTimer.prototype.isActive = function () {
        return this.cd > 0 ? true : false;
    };
    BuildTimer.prototype.isCostEnough = function () {
    };
    return BuildTimer;
}(BaseClass));
__reflect(BuildTimer.prototype, "BuildTimer");
//# sourceMappingURL=BuildTimer.js.map