module UY {
	/**
	 *
	 * @Tom
	 *
	 */
    export class Miss extends Unit {
        private static role: Miss;
        // 基本属性
        // 女枪 - 远攻
		public constructor() {
            super();
		}
		
        public static getInstance(): Miss {
            if(!Miss.role) {
                Miss.role = new Miss();
                Miss.role.unit_type = ROLE_ATTACK_TYPE.MAGA;
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
        }

        public common_atk(hero: HeroRole) {
            var emeny = <HeroRole>hero.curr_atk_object;
            emeny.reduceBlood(Miss.role.attack_damage);
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
            var hero: UY.HeroRole = UY.HeroRole.create("role_3003");
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
