var EgretCocos;
(function (EgretCocos) {
    var Bar = (function (_super) {
        __extends(Bar, _super);
        function Bar() {
            _super.call(this);
        }
        var d = __define,c=Bar,p=c.prototype;
        Bar.create = function (on, off, off_x, off_y) {
            var ret = new Bar();
            ret.flip = 1;
            ret.reflush = false;
            if (off) {
                ret.bottom = new egret.Bitmap();
                ret.bottom.texture = RES.getRes(off);
                ret.addChildAt(ret.bottom, 1);
            }
            if (on) {
                ret.bar = new egret.Bitmap();
                ret.bar.texture = RES.getRes(on);
                ret.addChildAt(ret.bar, 2);
                if (off_y) {
                    ret.bar.x = off_x;
                    ret.bar.y = off_y;
                }
                else {
                    ret.bar.x = 0;
                    ret.bar.y = 1;
                }
            }
            return ret;
        };
        // 共有方法
        p.setPercent = function (num) {
            this.bar.scaleX = this.flip * num;
        };
        p.setFlipX = function (v) {
            if (v) {
                this.flip = -1;
            }
            else {
                this.flip = 1;
            }
            this.bar.scaleX = this.flip;
            this.bottom.scaleX = this.flip;
        };
        p.setPosition = function (p1_x, p2_x, p1_y, p2_y) {
            if (p1_x) {
                this.bar.x = this.bar.x + p1_x;
            }
            if (p1_y) {
                this.bar.y = this.bar.y + p1_y;
            }
            if (p2_x) {
                this.bottom.x = this.bottom.x + p2_x;
            }
            if (p2_y) {
                this.bottom.y = this.bottom.y + p2_y;
            }
        };
        return Bar;
    }(egret.Sprite));
    EgretCocos.Bar = Bar;
    egret.registerClass(Bar,'EgretCocos.Bar');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=Bar.js.map