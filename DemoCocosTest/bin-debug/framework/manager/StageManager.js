var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var StageManager = (function () {
        function StageManager() {
        }
        var d = __define,c=StageManager,p=c.prototype;
        StageManager.getInstance = function () {
            if (!StageManager.stageManager) {
                StageManager.stageManager = new StageManager();
            }
            return StageManager.stageManager;
        };
        p.setStage = function (stage) {
            this.stage = stage;
        };
        p.getStage = function () {
            return this.stage;
        };
        return StageManager;
    }());
    UY.StageManager = StageManager;
    egret.registerClass(StageManager,'UY.StageManager');
})(UY || (UY = {}));
//# sourceMappingURL=StageManager.js.map