var UY;
(function (UY) {
    /**
     *
     * @author
     *
     */
    var Soraka = (function (_super) {
        __extends(Soraka, _super);
        // 基本属性
        // 索拉卡 - 远攻
        function Soraka() {
            _super.call(this);
        }
        var d = __define,c=Soraka,p=c.prototype;
        Soraka.getInstance = function () {
            if (!Soraka.role) {
                Soraka.role = new UY.Miss();
                Soraka.role.unit_type = 1 /* MAGA */;
                Soraka.role.speeed = 4.66;
                Soraka.role.attack_distance = 600;
                Soraka.role.attack_damage = 180;
                Soraka.role.attack_freq = 1500;
                Soraka.role.position_min_y = 290;
                Soraka.role.position_max_y = 300;
                Soraka.role.totalBlood = 9000;
                Soraka.role.resurrection_tm = 0;
                Soraka.role.money = 300;
                Soraka.role.skill_id = "6004";
                Soraka.role.skill_money = 405;
            }
            return Soraka.role;
        };
        p.common_atk = function (hero) {
            var emeny = hero.curr_atk_object;
            emeny.reduceBlood(Soraka.role.attack_damage);
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
            var hero = UY.HeroRole.create("role_3004");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            // (<egret.ScrollView>this.main_objects["content"]).addChild(armatureDisplay);
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(0 /* MINE */);
            hero.move();
            armatureDisplay.scaleX = -1;
            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75, 75);
            return hero;
        };
        return Soraka;
    }(UY.Unit));
    UY.Soraka = Soraka;
    egret.registerClass(Soraka,'UY.Soraka');
})(UY || (UY = {}));
//# sourceMappingURL=Soraka.js.map