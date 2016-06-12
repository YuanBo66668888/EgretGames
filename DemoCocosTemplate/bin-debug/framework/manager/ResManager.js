/**
 * @author TomYuan
 * @desc EgretCocos V1.0
 * @date 2016-06-12 Sunday
 */
var EgretCocos;
(function (EgretCocos) {
    var ResManager = (function () {
        function ResManager() {
        }
        var d = __define,c=ResManager,p=c.prototype;
        ResManager.getInstance = function () {
            if (!ResManager.resManager) {
                ResManager.resManager = new ResManager();
            }
            return ResManager.resManager;
        };
        p.loadConfig = function (file) {
            RES.loadConfig("resource/" + file, "resource/");
        };
        p.loadFile = function (group, complete_func, progress_func, error_func) {
            var scene = EgretCocos.SceneManager.getInstance().getScene();
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, complete_func, scene);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, progress_func, scene);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, error_func, scene);
            RES.loadGroup(group);
            return ResManager.resManager;
        };
        return ResManager;
    }());
    EgretCocos.ResManager = ResManager;
    egret.registerClass(ResManager,'EgretCocos.ResManager');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=ResManager.js.map