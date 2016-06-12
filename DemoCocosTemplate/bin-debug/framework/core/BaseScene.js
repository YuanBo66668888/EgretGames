/**
 * @author TomYuan
 * @desc EgretCocos V1.0
 * @date 2016-06-12 Sunday
 */
var EgretCocos;
(function (EgretCocos) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
        }
        var d = __define,c=Scene,p=c.prototype;
        p.init = function () {
            var ret = false;
            if (this.onEnter()) {
                ret = true;
            }
            return ret;
        };
        p.onEnter = function () {
            return true;
        };
        Scene.create = function () {
            var ret = new Scene();
            return ret;
        };
        p.change_scene = function () {
            return true;
        };
        return Scene;
    }(EgretCocos.Base));
    EgretCocos.Scene = Scene;
    egret.registerClass(Scene,'EgretCocos.Scene');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=BaseScene.js.map