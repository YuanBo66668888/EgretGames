module UY {
    
    export const enum ROLE_TYPE {
        MINE = 0,       // 己方
        EMENY = 1       // 敌方
    };
    
    export const enum ROLE_STATUS {
        IDLE = 0,       // 呼吸状态
        MOVE = 1,       // 移动状态
        ATTACK = 2,     // 攻击状态
        HURT = 3,       // 受伤状态
        ULT = 4,        // 大招状态
        DEAD = 5,       // 死亡状态
        CELE = 6        // 庆祝状态
    };
    
    // 角色类别
    export const enum ROLE_ATTACK_TYPE {
        SOLDIER = 0,    // 战士
        MAGA = 1        // 法师
    };
    
    
    
	/**
	 *
	 * @Tom
	 *
	 */
	export class HeroRole extends UY.BaseRole {
		
        private object: dragonBones.Armature;
        public static units: Array<string>;

        // UI
        public blood_bar: UY.Bar;
        
        // Units
        public unit_controller: Unit;
        
        // 特殊属性
        public curr_atk_object: BaseRole;
        
        // 基本属性
        private curr_blood: number;
        private speed: number;
        private type: ROLE_TYPE;
        public status: ROLE_STATUS;
        
        public curr_id: string;
    	public constructor(id) {
            super();
            if (!HeroRole.units) {
                HeroRole.units = new Array<string>();
                HeroRole.units["role_3001"] = "Garen";
                HeroRole.units["role_3002"] = "Aich";
                HeroRole.units["role_3003"] = "Miss";
                HeroRole.units["role_3004"] = "Soraka";
                HeroRole.units["role_3005"] = "Karthus";
            }
            this.init(id);
		}
		
		// create
        static create(id): HeroRole {
            return new HeroRole(id);
        }
		
        // 
        private event_start(e:dragonBones.ArmatureEvent) {
            
        }
        
        // 
        private event_ended(e:dragonBones.ArmatureEvent) {
            var hero: HeroRole = <HeroRole>this;
            var name = hero.object.animation.lastAnimationName;
            switch(name) {
                case "atk": {
                    this.unit_controller.common_atk_next(hero);
                    break;
                }
                case "death": {
                    this.object.removeEventListener(dragonBones.AnimationEvent.START,this.event_start,this);
                    this.object.removeEventListener(dragonBones.AnimationEvent.COMPLETE,this.event_ended,this);
                    this.object.removeEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT,this.frame_event,this);
                    this.unit_controller.died(hero);
                    // 处理队列
                    var main = <Main>UY.SceneManager.getInstance().getScene();
                    UY.ArrayController.deleteFromArray(main.get_team(),hero);
                }
            }
        }
        
        //
        private frame_event(e: dragonBones.FrameEvent) {
            
            var event_name = e.frameLabel;
            var hero: HeroRole = <HeroRole>this;
            switch(event_name) {
                // 攻击
                case "atk_event": {
                    if(hero.status != ROLE_STATUS.DEAD) { 
                        this.unit_controller.common_atk(hero);
                    }
                    break;
                }
                
            }
            
        }
        
		// 初始化
        private init(id) {
            this.unit_controller = Unit.getInstance().getType(HeroRole.units[id]);
            this.object = UY.DBManager.getInstance().createDBArmature(id);
            
            // 设置血条
            this.blood_bar = UY.Bar.create("texture01.enemy_blood","texture01.enemy_blood_bg");
            this.blood_bar.x = -50;
            this.blood_bar.y = -150;
            this.object.getDisplay().addChild(this.blood_bar);
            this.object.addEventListener(dragonBones.AnimationEvent.START,this.event_start,this);
            this.object.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.event_ended,this);
            this.object.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT,this.frame_event,this);
            this.start_update();
        
            // 设置血量
            this.curr_blood = this.unit_controller.getTotalBlood();
            this.curr_id = id;
        }
		
        // 
        public getArm(): dragonBones.Armature {
            return this.object;
        }
        
        // 
        public getNode(): any {
            return this.object.getDisplay();
        }
	    
        public play(name:string, n:number): void {
            this.object.animation.gotoAndPlay(name,0,n,0);
        }
        
        // 移动
        public move() : void {
            if(this.status != ROLE_STATUS.DEAD) {
                this.status = ROLE_STATUS.MOVE;
                this.object.animation.gotoAndPlay("move",0,-1,0);
            }
        }
        
        // 呼吸
        public idle(): void  {
            if(this.status != ROLE_STATUS.DEAD) {
                this.status = ROLE_STATUS.IDLE;
                this.object.animation.gotoAndPlay("idle",0,-1,0);
            }
        }
        
        // 攻击
        public attack(enemy:HeroRole): void {
            
            if(this.status != ROLE_STATUS.DEAD) {
                this.status = ROLE_STATUS.ATTACK;
                this.object.animation.gotoAndPlay("atk");
                this.curr_atk_object = enemy;
            }
        }
        
        // 死亡
        public died():void {
            if(this.status != ROLE_STATUS.DEAD) {
                this.status = ROLE_STATUS.DEAD;
                this.object.animation.gotoAndPlay("death");
                var t = egret.Tween.get(this);
                t.pause();
                console.log("Died");
            }
        }
        
        // 大招技能
        public ult():void {
            if(this.status != ROLE_STATUS.DEAD) {
                this.status = ROLE_STATUS.ULT;
                this.object.animation.gotoAndPlay("death");
            }
        }
        
        // 动作集
        private act_idle() {
            this.move();
        }
        
        private act_move() {
            if(this.type == ROLE_TYPE.MINE) {
                this.object.getDisplay().x = this.object.getDisplay().x + this.unit_controller.getSpeed();
            } else {
                this.object.getDisplay().x = this.object.getDisplay().x - this.unit_controller.getSpeed();
            }
            
            var main = <Main>UY.SceneManager.getInstance().getScene();
            var teams = main.get_team();
            for(var i = 0;i < teams.length; i++) {
                var e: HeroRole = <HeroRole>teams[i];
                if(UY.MathLib.getDistance(this.object.getDisplay().x,this.object.getDisplay().y,
                    e.object.getDisplay().x,e.object.getDisplay().y) < this.unit_controller.getAttackDistance()) {
                    if(e.getType() != this.getType() && e.status != ROLE_STATUS.DEAD) {
                        this.attack(e);
                    }
                }
            }
        }
        
        public reduceBlood(num:number) :boolean {
            
            var ret = false;
            if(this.status != ROLE_STATUS.DEAD) {
                
                this.curr_blood = this.curr_blood - num;
                if(this.curr_blood > 0) {
                    this.blood_bar.setPercent(this.curr_blood / this.unit_controller.getTotalBlood());
                } else {
                    this.curr_blood = 0;
                    this.blood_bar.setPercent(0.0);
                    // DIED
                    this.died();
                    ret = true;
                }
            }
            return ret;
        }
        
        public setType(type:number) {
            this.type = type;
        }
        
        public getType():number {
            return this.type;
        }
        
        public updated(): void {
            switch(this.status) {
                case ROLE_STATUS.IDLE: {
                    // 呼吸
                    this.act_idle();
                    break;
                }
                case ROLE_STATUS.MOVE: {
                    // 移动
                    this.act_move();
                    break;
                }
                case ROLE_STATUS.ATTACK: {
                    // 攻击
                    break;
                }
                case ROLE_STATUS.HURT: {
                    // 受伤
                    break;
                }
                case ROLE_STATUS.ULT: {
                    // 大招
                    break;
                }
                case ROLE_STATUS.DEAD: {
                    // 死亡
                    
                    break;
                }
                case ROLE_STATUS.CELE: {
                    // 庆祝
                    break;
                }
            }
        }
        
        public update(): void {
            
            // 步骤1
            this.updated();
        }
    }
}
