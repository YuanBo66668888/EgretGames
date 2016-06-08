var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var SceneManager = (function () {
        function SceneManager() {
            // TODO
        }
        var d = __define,c=SceneManager,p=c.prototype;
        SceneManager.getInstance = function () {
            if (!SceneManager.sceneManager) {
                SceneManager.sceneManager = new SceneManager();
            }
            return SceneManager.sceneManager;
        };
        p.setScene = function (scene) {
            this.currentScene = scene;
        };
        p.getScene = function () {
            return this.currentScene;
        };
        return SceneManager;
    }());
    UY.SceneManager = SceneManager;
    egret.registerClass(SceneManager,'UY.SceneManager');
})(UY || (UY = {}));
//# sourceMappingURL=SceneManager.js.map