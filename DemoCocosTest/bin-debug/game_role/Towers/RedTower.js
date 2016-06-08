var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var RedTower = (function (_super) {
        __extends(RedTower, _super);
        function RedTower() {
            _super.call(this);
        }
        var d = __define,c=RedTower,p=c.prototype;
        RedTower.getInstance = function () {
            if (!RedTower.role) {
                RedTower.role = new RedTower();
                RedTower.role.totalBlood = 3000;
            }
            return RedTower.role;
        };
        p.createTower = function () {
            var tower = UY.TowerRole.create("role_2002");
            var armatureDisplay = tower.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = 2600;
            armatureDisplay.y = 260;
            UY.TierManager.getInstance().dealWithPosition();
            tower.setType(1 /* EMENY */);
            armatureDisplay.scaleX = 1;
            tower.blood_bar.setFlipX(false);
            tower.blood_bar.setPosition(-37, -37, -18, -18);
            return tower;
        };
        p.died = function (tower) {
            // 游戏胜利
            var main = UY.SceneManager.getInstance().getScene();
            var teams = main.get_team();
            for (var i = 0; i < teams.length; i++) {
                var role = teams[i];
                if (role.getType() == 0 /* MINE */) {
                    main.game_over = true;
                    role.play("cheer", -1);
                    role.status = 6 /* CELE */;
                }
            }
            var ani = egret.Tween.get(tower.getArm().getDisplay());
            ani.to({ alpha: 0 }, 150).call(function () {
                tower.getArm().getDisplay().parent.removeChild(tower.getArm().getDisplay());
                tower.stop_update();
                tower = null;
            });
        };
        return RedTower;
    }(UY.Unit));
    UY.RedTower = RedTower;
    egret.registerClass(RedTower,'UY.RedTower');
})(UY || (UY = {}));
//# sourceMappingURL=RedTower.js.map