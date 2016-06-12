var EgretCocos;
(function (EgretCocos) {
    var DBManager = (function () {
        function DBManager() {
            this.factory = new dragonBones.EgretFactory();
        }
        var d = __define,c=DBManager,p=c.prototype;
        DBManager.getInstance = function () {
            if (!DBManager.dbManager) {
                DBManager.dbManager = new DBManager();
                egret.Ticker.getInstance().register(function (advancedTime) {
                    dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
                }, this);
            }
            return DBManager.dbManager;
        };
        p.loadData = function (name) {
            this.factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(RES.getRes(name + "_json")));
            this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(RES.getRes(name + "_texture_png"), RES.getRes(name + "_texture_json")));
        };
        p.loadDataArray = function (name) {
            for (var i = 0; i < name.length; i++) {
                this.loadData(name[i]);
            }
        };
        p.createDBArmature = function (name) {
            var armature = this.factory.buildArmature(name);
            var armatureDisplay = armature.getDisplay();
            this.addInWorld(armature);
            return armature;
        };
        p.addInWorld = function (arm) {
            dragonBones.WorldClock.clock.add(arm);
        };
        p.removeFromWorld = function (arm) {
            dragonBones.WorldClock.clock.remove(arm);
        };
        return DBManager;
    }());
    EgretCocos.DBManager = DBManager;
    egret.registerClass(DBManager,'EgretCocos.DBManager');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=DBManager.js.map