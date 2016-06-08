var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var ResManager = (function () {
        function ResManager() {
            // TODO
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
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, complete_func, UY.SceneManager.getInstance().getScene());
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, progress_func, UY.SceneManager.getInstance().getScene());
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, error_func, UY.SceneManager.getInstance().getScene());
            RES.loadGroup(group);
            return ResManager.resManager;
        };
        p.testSingleton = function () {
            egret.log("singleton");
        };
        return ResManager;
    }());
    UY.ResManager = ResManager;
    egret.registerClass(ResManager,'UY.ResManager');
})(UY || (UY = {}));
//# sourceMappingURL=ResManager.js.map