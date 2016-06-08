var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var DataManager = (function () {
        function DataManager() {
            // TODO
        }
        var d = __define,c=DataManager,p=c.prototype;
        DataManager.getInstance = function () {
            if (!DataManager.dataManager) {
                DataManager.dataManager = new DataManager();
            }
            return DataManager.dataManager;
        };
        p.getJson = function (name) {
            return RES.getRes(name);
        };
        return DataManager;
    }());
    UY.DataManager = DataManager;
    egret.registerClass(DataManager,'UY.DataManager');
})(UY || (UY = {}));
//# sourceMappingURL=DataManager.js.map