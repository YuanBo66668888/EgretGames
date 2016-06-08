module UY {
	/**
	 *
	 * @author 
	 *
	 */
    export class Soraka extends Unit{
        private static role: Soraka;
		// 基本属性
        // 索拉卡 - 远攻
        public constructor() {
            super();
		}
		
        public static getInstance(): Soraka {
            if(!Soraka.role) {
                Soraka.role = new Miss();
                Soraka.role.unit_type = ROLE_ATTACK_TYPE.MAGA;
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
        }

        public common_atk(hero: HeroRole) {
            var emeny = <HeroRole>hero.curr_atk_object;
            emeny.reduceBlood(Soraka.role.attack_damage);
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
            var hero: UY.HeroRole = UY.HeroRole.create("role_3004");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            // (<egret.ScrollView>this.main_objects["content"]).addChild(armatureDisplay);
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(UY.ROLE_TYPE.MINE);
            hero.move();
            armatureDisplay.scaleX = -1;
            
            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75,75);
            return hero;
        }
	}
}
