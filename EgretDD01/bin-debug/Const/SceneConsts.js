var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneConsts = (function () {
    function SceneConsts() {
    }
    return SceneConsts;
}());
SceneConsts.Game = 1;
SceneConsts.UI = 2;
SceneConsts.LOADING = 3;
__reflect(SceneConsts.prototype, "SceneConsts");
//# sourceMappingURL=SceneConsts.js.map