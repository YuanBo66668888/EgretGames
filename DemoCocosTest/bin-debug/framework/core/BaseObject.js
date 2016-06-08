/**
 *
 * @author Tom
 *
 */
var UY;
(function (UY) {
    var BaseObject = (function (_super) {
        __extends(BaseObject, _super);
        function BaseObject() {
            BaseObject.dt = 0.02;
            _super.call(this);
        }
        var d = __define,c=BaseObject,p=c.prototype;
        p.update = function () {
            this.life_tm = this.life_tm + BaseObject.dt;
            // console.log(this.life_tm);
        };
        p.next_updated = function () {
            this.update_timer.start();
        };
        p.start_update = function () {
            if (!this.update_timer) {
                this.update_timer = new egret.Timer(20, 1);
                this.update_timer.addEventListener(egret.TimerEvent.TIMER, this.update, this);
                this.update_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.next_updated, this);
                this.update_timer.start();
            }
        };
        p.stop_update = function () {
            if (this.update_timer) {
                this.update_timer.removeEventListener(egret.TimerEvent.TIMER, this.update, this);
            }
        };
        return BaseObject;
    }(egret.DisplayObject));
    UY.BaseObject = BaseObject;
    egret.registerClass(BaseObject,'UY.BaseObject');
})(UY || (UY = {}));
//# sourceMappingURL=BaseObject.js.map