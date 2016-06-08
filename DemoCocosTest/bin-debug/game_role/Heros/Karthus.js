var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var Karthus = (function (_super) {
        __extends(Karthus, _super);
        // 基本属性
        // 卡尔萨斯 - 远攻
        function Karthus() {
            _super.call(this);
        }
        var d = __define,c=Karthus,p=c.prototype;
        Karthus.getInstance = function () {
            if (!Karthus.role) {
                Karthus.role = new Karthus();
                Karthus.role.unit_type = 1 /* MAGA */;
                Karthus.role.speeed = 3.7;
                Karthus.role.attack_distance = 480;
                Karthus.role.attack_damage = 180;
                Karthus.role.attack_freq = 1500;
                Karthus.role.position_min_y = 380;
                Karthus.role.position_max_y = 390;
                Karthus.role.totalBlood = 9000;
                Karthus.role.resurrection_tm = 0;
                Karthus.role.money = 310;
                Karthus.role.skill_id = "6005";
                Karthus.role.skill_money = 499;
            }
            return Karthus.role;
        };
        p.common_atk = function (hero) {
            var emeny = hero.curr_atk_object;
            emeny.reduceBlood(Karthus.role.attack_damage);
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
            var hero = UY.HeroRole.create("role_3005");
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
        return Karthus;
    }(UY.Unit));
    UY.Karthus = Karthus;
    egret.registerClass(Karthus,'UY.Karthus');
})(UY || (UY = {}));
//# sourceMappingURL=Karthus.js.map