var EgretCocos;
(function (EgretCocos) {
    var Font = (function (_super) {
        __extends(Font, _super);
        function Font() {
            _super.call(this);
        }
        var d = __define,c=Font,p=c.prototype;
        // 普通文本
        Font.createText = function (content, color, font) {
            var ret = new egret.TextField();
            ret.text = content;
            ret.textColor = color;
            ret.fontFamily = font;
            return ret;
        };
        // 输入文本
        Font.createInputText = function () {
            var ret = new egret.TextField();
            ret.type = egret.TextFieldType.INPUT;
            ret.textColor = 0x000000;
            return ret;
        };
        // BitMap字体
        Font.createNumber = function (n, pre_name, jianju) {
            var ret = new Font();
            ret.current_font = pre_name;
            var k = 0;
            if (n != 0) {
                while (n != 0) {
                    var bit = n % 10;
                    n = Math.floor(n / 10);
                    var BP = EgretCocos.ImageManager.getInstance().createWithSpriteFrameName(pre_name + bit);
                    if (jianju) {
                        ret.current_jianju = jianju;
                        BP.x = -k * jianju;
                    }
                    else {
                        ret.current_jianju = 20;
                        BP.x = -k * 20;
                    }
                    BP.y = 5;
                    ret.addChild(BP);
                    k++;
                }
            }
            else {
                if (jianju) {
                    ret.current_jianju = jianju;
                }
                else {
                    ret.current_jianju = 20;
                }
                var BP = EgretCocos.ImageManager.getInstance().createWithSpriteFrameName(pre_name + "0");
                BP.y = 5;
                ret.addChild(BP);
            }
            return ret;
        };
        // 变更
        p.changeFont = function (n) {
            this.removeChildren();
            var k = 0;
            if (n != 0) {
                while (n != 0) {
                    var bit = n % 10;
                    n = Math.floor(n / 10);
                    var BP = EgretCocos.ImageManager.getInstance().createWithSpriteFrameName(this.current_font + bit);
                    if (this.current_jianju) {
                        BP.x = -k * this.current_jianju;
                    }
                    else {
                        BP.x = -k * 20;
                    }
                    BP.y = 5;
                    this.addChild(BP);
                    k++;
                }
            }
            else {
                var BP = EgretCocos.ImageManager.getInstance().createWithSpriteFrameName(this.current_font + "0");
                BP.y = 5;
                this.addChild(BP);
            }
        };
        return Font;
    }(egret.Sprite));
    EgretCocos.Font = Font;
    egret.registerClass(Font,'EgretCocos.Font');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=Font.js.map