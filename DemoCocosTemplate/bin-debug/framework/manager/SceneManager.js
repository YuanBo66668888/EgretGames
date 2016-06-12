var EgretCocos;
(function (EgretCocos) {
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
    EgretCocos.SceneManager = SceneManager;
    egret.registerClass(SceneManager,'EgretCocos.SceneManager');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=SceneManager.js.map