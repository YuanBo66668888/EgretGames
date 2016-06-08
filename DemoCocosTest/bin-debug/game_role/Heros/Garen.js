var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var Garen = (function (_super) {
        __extends(Garen, _super);
        // 基本属性
        // 盖伦 - 近攻
        function Garen() {
            _super.call(this);
        }
        var d = __define,c=Garen,p=c.prototype;
        Garen.getInstance = function () {
            if (!Garen.role) {
                Garen.role = new Garen();
                Garen.role.unit_type = 0 /* SOLDIER */;
                Garen.role.speeed = 4.6;
                Garen.role.attack_distance = 220;
                Garen.role.attack_damage = 47;
                Garen.role.attack_freq = 1500;
                Garen.role.position_min_y = 350;
                Garen.role.position_max_y = 355;
                Garen.role.totalBlood = 300;
                Garen.role.resurrection_tm = 0;
                Garen.role.money = 175;
                Garen.role.skill_id = "6001";
                Garen.role.skill_money = 227;
            }
            return Garen.role;
        };
        p.common_atk = function (hero) {
            var emeny = hero.curr_atk_object;
            emeny.reduceBlood(Garen.role.attack_damage);
        };
        p.common_atk_next = function (hero) {
            hero.play("idle", -1);
            var e = hero.curr_atk_object;
            if (e.status != 5 /* DEAD */ && hero.status != 5 /* DEAD */) {
                var ani = egret.Tween.get(hero);
                ani.wait(this.attack_freq).call(function () {
                    hero.attack(hero.curr_atk_object);
                });
            }
            else {
                var main = UY.SceneManager.getInstance().getScene();
                var ani = egret.Tween.get(hero);
                ani.wait(this.attack_freq).call(function () {
                    if (!main.game_over) {
                        hero.move();
                    }
                });
            }
        };
        p.died = function (hero) {
            var ani = egret.Tween.get(hero.getArm().getDisplay());
            ani.to({ alpha: 0 }, 150).call(function () {
                hero.getArm().getDisplay().parent.removeChild(hero.getArm().getDisplay());
                hero.stop_update();
                hero = null;
            });
        };
        p.createHero = function () {
            var hero = UY.HeroRole.create("role_3001");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(0 /* MINE */);
            hero.move();
            armatureDisplay.scaleX = -1;
            // this.teams.push(hero);
            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75, 75);
            return hero;
        };
        p.createEnemyHero = function () {
            var hero = UY.HeroRole.create("role_3001");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 2300;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(1 /* EMENY */);
            hero.move();
            armatureDisplay.scaleX = 1;
            // this.teams.push(hero);
            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75, 75);
            return hero;
        };
        return Garen;
    }(UY.Unit));
    UY.Garen = Garen;
    egret.registerClass(Garen,'UY.Garen');
})(UY || (UY = {}));
//# sourceMappingURL=Garen.js.map