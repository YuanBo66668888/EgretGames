module UY {
	/**
	 *
	 * @Tom
	 *
	 */
    export class Garen extends Unit {
		
        private static role: Garen;
        
        // 基本属性
        // 盖伦 - 近攻
    	public constructor() {
            super();
		}
		
        public static getInstance(): Garen{
            if(!Garen.role) {
                Garen.role = new Garen();
                Garen.role.unit_type = ROLE_ATTACK_TYPE.SOLDIER;
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
		}
		
		public common_atk(hero:HeroRole) {
            var emeny = <HeroRole>hero.curr_atk_object;
            emeny.reduceBlood(Garen.role.attack_damage);
		}
		
		public common_atk_next(hero:HeroRole) {
            
            hero.play("idle",-1);
            var e = <HeroRole>hero.curr_atk_object;
            if(e.status != UY.ROLE_STATUS.DEAD && hero.status != ROLE_STATUS.DEAD) {
                var ani = egret.Tween.get(hero);
                ani.wait(this.attack_freq).call(() => {
                    hero.attack(<HeroRole>hero.curr_atk_object);
                });
            } else {
                var main = <Main>UY.SceneManager.getInstance().getScene();
                var ani = egret.Tween.get(hero);
                ani.wait(this.attack_freq).call(() => {
                    if(!main.game_over) {
                        hero.move();
                    }
                });
            }
		}
		
        public died(hero: any) {
            
            var ani = egret.Tween.get(hero.getArm().getDisplay());
            ani.to({ alpha: 0 },150).call(() => {
                (<egret.DisplayObjectContainer>hero.getArm().getDisplay().parent).removeChild(hero.getArm().getDisplay());
                hero.stop_update();
                hero = null;
            });
        }
        
        public createHero(): UY.HeroRole {
            var hero: UY.HeroRole = UY.HeroRole.create("role_3001");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 460;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
            
            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(UY.ROLE_TYPE.MINE);
            hero.move();
            armatureDisplay.scaleX = -1;
            // this.teams.push(hero);

            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75,75);
            return hero;
        }
        
        public createEnemyHero(): UY.HeroRole {
            var hero: UY.HeroRole = UY.HeroRole.create("role_3001");
            var armatureDisplay = hero.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = Math.random() * 100 + 2300;
            armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());

            UY.TierManager.getInstance().dealWithPosition();
            hero.setType(UY.ROLE_TYPE.EMENY);
            hero.move();
            armatureDisplay.scaleX = 1;
            // this.teams.push(hero);

            hero.blood_bar.setFlipX(true);
            hero.blood_bar.setPosition(75,75);
            return hero;
        }
		
	}
}
