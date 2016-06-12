var EgretCocos;
(function (EgretCocos) {
    var DataManager = (function () {
        function DataManager() {
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
    EgretCocos.DataManager = DataManager;
    egret.registerClass(DataManager,'EgretCocos.DataManager');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=DataManager.js.map