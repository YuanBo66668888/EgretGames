module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	export class Aich extends Unit {
        private static role: Aich;
        // 基本属性
        // 艾希 - 远攻
		public constructor() {
            super();
		}
		
        public static getInstance(): Aich{
            if(!Aich.role) {
                Aich.role = new Aich();
                Aich.role.unit_type = ROLE_ATTACK_TYPE.MAGA;
                Aich.role.speeed = 5.0;
                Aich.role.attack_distance = 510;
                Aich.role.attack_damage = 200;
                Aich.role.attack_freq = 1500;
                Aich.role.position_min_y = 320;
                Aich.role.position_max_y = 330;
                Aich.role.totalBlood = 9000;
                Aich.role.resurrection_tm = 0;
                Aich.role.money = 297;
                Aich.role.skill_id = "6002";
                Aich.role.skill_money = 300;
            }
            return Aich.role;
        }

        public common_atk(hero: HeroRole) :boolean{
            var ret = false;
            var emeny = <HeroRole>hero.curr_atk_object;
            ret = emeny.reduceBlood(Aich.role.attack_damage);
            return ret;
        }

        public common_atk_next(hero: HeroRole) {
            hero.play("idle",-1);
            var ani = egret.Tween.get(hero);
            ani.wait(this.attack_freq).call(() => {
                hero.attack(<HeroRole>hero.curr_atk_object);
            });
        }
        
        // 死亡
        public died(hero: HeroRole) {
            
        }
        
        public createHero(): UY.HeroRole {
            var hero: UY.HeroRole = UY.HeroRole.create("role_3002");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
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
