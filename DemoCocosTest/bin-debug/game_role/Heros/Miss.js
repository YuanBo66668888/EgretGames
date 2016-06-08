var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var Miss = (function (_super) {
        __extends(Miss, _super);
        // 基本属性
        // 女枪 - 远攻
        function Miss() {
            _super.call(this);
        }
        var d = __define,c=Miss,p=c.prototype;
        Miss.getInstance = function () {
            if (!Miss.role) {
                Miss.role = new Miss();
                Miss.role.unit_type = 1 /* MAGA */;
                Miss.role.speeed = 5.7;
                Miss.role.attack_distance = 600;
                Miss.role.attack_damage = 180;
                Miss.role.attack_freq = 2200;
                Miss.role.position_min_y = 400;
                Miss.role.position_max_y = 410;
                Miss.role.totalBlood = 9000;
                Miss.role.resurrection_tm = 0;
                Miss.role.money = 240;
                Miss.role.skill_id = "6003";
                Miss.role.skill_money = 333;
            }
            return Miss.role;
        };
        p.common_atk = function (hero) {
            var emeny = hero.curr_atk_object;
            emeny.reduceBlood(Miss.role.attack_damage);
        };
        p.common_atk_next = function (hero) {
            hero.play("idle", -1);
            var ani = egret.Tween.get(hero);
            ani.wait(this.attack_freq).call(function () {
                hero.attack(hero.curr_atk_object);
            });
        };
        p.died = function (hero) {
        };
        p.createHero = function () {
            var hero = UY.HeroRole.create("role_3003");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            // (<egret.ScrollView>this.main_objects["content"]).addChild(armatureDisplay);
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(0 /* MINE */);
            hero.move();
            armatureDisplay.scaleX = -1;
            // this.teams.push(hero);
            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75, 75);
            return hero;
        };
        return Miss;
    }(UY.Unit));
    UY.Miss = Miss;
    egret.registerClass(Miss,'UY.Miss');
})(UY || (UY = {}));
//# sourceMappingURL=Miss.js.map