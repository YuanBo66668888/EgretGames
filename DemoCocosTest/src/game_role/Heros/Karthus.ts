module UY {
	/**
	 *
	 * @Tom
	 *
	 */
    export class Karthus extends Unit {
        private static role: Karthus;
		// 基本属性
        // 卡尔萨斯 - 远攻
        public constructor() {
            super();
		}
		
        public static getInstance(): Karthus {
            if(!Karthus.role) {
                Karthus.role = new Karthus();
                Karthus.role.unit_type = ROLE_ATTACK_TYPE.MAGA;
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
        }

        public common_atk(hero: HeroRole) {
            var emeny = <HeroRole>hero.curr_atk_object;
            emeny.reduceBlood(Karthus.role.attack_damage);
        }

        public common_atk_next(hero: HeroRole) {
            hero.play("idle",-1);
            var ani = egret.Tween.get(hero);
            ani.wait(this.attack_freq).call(() => {
                hero.attack(<HeroRole>hero.curr_atk_object);
            });
        }
        
        public died(hero: HeroRole) {

        }
        
        public createHero(): UY.HeroRole {
            var hero: UY.HeroRole = UY.HeroRole.create("role_3005");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            // (<egret.ScrollView>this.main_objects["content"]).addChild(armatureDisplay);
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(UY.ROLE_TYPE.MINE);
            hero.move();
            armatureDisplay.scaleX = -1;
            // this.teams.push(hero);

            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75,75);
            return hero;
        }
	}
}
