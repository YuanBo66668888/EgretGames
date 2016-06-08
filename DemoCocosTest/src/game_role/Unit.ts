module UY {
	/**
	 *
	 * @tom
	 *
	 */
	export class Unit {
		
        private types:Array<any>;
        private static unit: Unit;
        
        // 类别
        protected unit_type: ROLE_ATTACK_TYPE;
        // 攻击距离
        protected attack_distance: number;
        // 普通攻击力
        protected attack_damage: number;
        // 移动速度 
        protected speeed: number;
        // 站位
        protected position_min_y: number;
        protected position_max_y: number;
        // 攻击频率(毫秒)
        protected attack_freq: number;
        // 血量
        protected totalBlood: number;
        // 原价
        protected money: number;
        // 复活时间
        protected resurrection_tm: number;
        // 技能ID
        protected skill_id: string;
        // 技能Money
        protected skill_money: number;
        //
        
        
    	public constructor() {
		}
		
		public static getInstance():Unit {
		    if (!Unit.unit) {
                Unit.unit = new Unit();
                Unit.unit.create();
		    }
            return Unit.unit;
		}
		
		private create() {
            this.types = new Array<any>();
            this.types["Aich"] = Aich.getInstance();
            this.types["Garen"] = Garen.getInstance();
            this.types["Karthus"] = Karthus.getInstance();
            this.types["Miss"] = Miss.getInstance();
            this.types["Soraka"] = Soraka.getInstance();
            this.types["BlueTower"] = BlueTower.getInstance();
            this.types["RedTower"] = RedTower.getInstance();
		}
		
		public getType(n):Unit {
            return this.types[n];
		}
		
		// 继承函数
        public common_atk(hero: HeroRole) {
        }

        public common_atk_next(hero: HeroRole) {
        }
        
        // 获取属性
        public getUnitType(): ROLE_ATTACK_TYPE {
            return this.unit_type;
        }

        public getAttackDistance(): number {
            return this.attack_distance;
        }

        public getAttackDamage(): number {
            return this.attack_damage;
        }

        public getSpeed(): number {
            return this.speeed;
        }
        
        public getPosMinY():number {
            return this.position_min_y;
        }
        
        public getPosMaxY():number {
            return this.position_max_y;
        }
        
        public getAttackFreq():number {
            return this.attack_freq;
        }
        
        public getTotalBlood():number {
            return this.totalBlood;
        }
        
        public getMoney():number {
            return this.money;
        }
        
        public getResurrectTime():number {
            return this.resurrection_tm;
        }
        
        public getSkillID():string {
            return this.skill_id;
        }
        
        public getSkillMoney():number {
            return this.skill_money;
        }
        
        public createHero(): UY.HeroRole {
            var hero = new UY.HeroRole("");
            return hero;
        }
        
        public createEnemyHero(): UY.HeroRole {
            var hero = new UY.HeroRole("");
            return hero;
        }
        
        public createTower(): UY.TowerRole {
            var tower = new UY.TowerRole("");
            return tower;
        }
        
        public setType(hero: UY.HeroRole,type: UY.ROLE_TYPE) {
            hero.setType(type);
        }
        
        // Event
        public died(hero: any) {

        }
        
	}
}
