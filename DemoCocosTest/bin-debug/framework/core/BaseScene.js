/**
 *
 * @author Tom
 *
 */
var UY;
(function (UY) {
    var BaseScene = (function (_super) {
        __extends(BaseScene, _super);
        // 构造函数
        function BaseScene() {
            _super.call(this);
            //
            this.container = new egret.DisplayObjectContainer();
        }
        var d = __define,c=BaseScene,p=c.prototype;
        // Init
        p.init = function () {
            // 组件Init
            var ret = false;
            if (this.onEnter()) {
                ret = true;
            }
            return ret;
        };
        p.onEnter = function () {
            // TODO
            return true;
        };
        BaseScene.create = function () {
            var ret = new BaseScene();
            return ret;
        };
        p.change_scene = function () {
            return true;
        };
        return BaseScene;
    }(UY.BaseObject));
    UY.BaseScene = BaseScene;
    egret.registerClass(BaseScene,'UY.BaseScene');
})(UY || (UY = {}));
//# sourceMappingURL=BaseScene.js.map