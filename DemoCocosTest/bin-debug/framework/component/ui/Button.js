var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.call(this);
        }
        var d = __define,c=Button,p=c.prototype;
        p.touch_begin = function (e) {
            this.texture = RES.getRes(this.on_name);
        };
        p.touch_moved = function (e) {
        };
        p.touch_ended = function (e) {
            this.texture = RES.getRes(this.off_name);
            this.click_func();
        };
        p.touch_out = function (e) {
            this.texture = RES.getRes(this.off_name);
        };
        Button.create = function (on, off, click_func) {
            var button = new Button();
            button.click_func = click_func;
            button.on_name = on;
            button.off_name = off;
            button.texture = RES.getRes(button.off_name);
            button.touchEnabled = true;
            button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, button.touch_begin, button);
            button.addEventListener(egret.TouchEvent.TOUCH_MOVE, button.touch_moved, button);
            button.addEventListener(egret.TouchEvent.TOUCH_END, button.touch_ended, button);
            button.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, button.touch_out, button);
            return button;
        };
        return Button;
    }(egret.Bitmap));
    UY.Button = Button;
    egret.registerClass(Button,'UY.Button');
})(UY || (UY = {}));
//# sourceMappingURL=Button.js.map