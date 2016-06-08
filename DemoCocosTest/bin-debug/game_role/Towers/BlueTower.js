var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var BlueTower = (function (_super) {
        __extends(BlueTower, _super);
        function BlueTower() {
            _super.call(this);
        }
        var d = __define,c=BlueTower,p=c.prototype;
        BlueTower.getInstance = function () {
            if (!BlueTower.role) {
                BlueTower.role = new BlueTower();
                BlueTower.role.totalBlood = 3000;
            }
            return BlueTower.role;
        };
        p.createTower = function () {
            var tower = UY.TowerRole.create("role_2001");
            var armatureDisplay = tower.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = 300;
            armatureDisplay.y = 260;
            UY.TierManager.getInstance().dealWithPosition();
            tower.setType(0 /* MINE */);
            armatureDisplay.scaleX = -1;
            tower.blood_bar.setFlipX(true);
            tower.blood_bar.setPosition(125, 125, -18, -18);
            return tower;
        };
        p.died = function (tower) {
            var ani = egret.Tween.get(tower.getArm().getDisplay());
            ani.to({ alpha: 0 }, 150).call(function () {
                tower.getArm().getDisplay().parent.removeChild(tower.getArm().getDisplay());
                tower.stop_update();
                tower = null;
            });
        };
        return BlueTower;
    }(UY.Unit));
    UY.BlueTower = BlueTower;
    egret.registerClass(BlueTower,'UY.BlueTower');
})(UY || (UY = {}));
//# sourceMappingURL=BlueTower.js.map