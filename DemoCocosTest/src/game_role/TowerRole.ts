module UY {
	/**
	 *
	 * @Tom
	 *
	 */
    export class TowerRole extends UY.BaseRole{
        
        private object: dragonBones.Armature;
        public static units: Array<string>;
        
        // UI
        public blood_bar: UY.Bar;
        
        // Units
        public unit_controller: Unit;
        
        // 基本属性
        private curr_blood: number;
        private speed: number;
        private type: ROLE_TYPE;
        public status: ROLE_STATUS;
        
        public constructor(id) {
            super();
            if(!TowerRole.units) {
                TowerRole.units = new Array<string>();
                TowerRole.units["role_2001"] = "BlueTower";
                TowerRole.units["role_2002"] = "RedTower";
            }
            this.init(id);
		}
		
        // create
        static create(id): TowerRole {
            return new TowerRole(id);
        }
        
        //
        private event_start(e: dragonBones.ArmatureEvent) {

        }
        
        // 
        private event_ended(e: dragonBones.ArmatureEvent) {
            var tower: TowerRole = <TowerRole>this;
            var name = tower.object.animation.lastAnimationName;
            switch(name) {
                case "death": {
                    this.object.removeEventListener(dragonBones.AnimationEvent.START,this.event_start,this);
                    this.object.removeEventListener(dragonBones.AnimationEvent.COMPLETE,this.event_ended,this);
                    this.object.removeEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT,this.frame_event,this);
                    this.unit_controller.died(tower);
                    // 处理队列
                    var main = <Main>UY.SceneManager.getInstance().getScene();
                    UY.ArrayController.deleteFromArray(main.get_team(),tower);
                }
            }
        }
        
        //
        private frame_event(e: dragonBones.FrameEvent) {

            var event_name = e.frameLabel;
            var tower: TowerRole = <TowerRole>this;
            switch(event_name) {
            }

        } 
        
        //
        // 初始化
        private init(id) {
            this.unit_controller = Unit.getInstance().getType(TowerRole.units[id]);
            this.object = UY.DBManager.getInstance().createDBArmature(id);
            
            // 设置血条
            this.blood_bar = UY.Bar.create("texture01.enemy_base_blood","texture01.enemy_base_blood_bg", 0, 2);
            this.blood_bar.x = -50;
            this.blood_bar.y = -150;
            this.object.getDisplay().addChild(this.blood_bar);
            this.object.addEventListener(dragonBones.AnimationEvent.START,this.event_start,this);
            this.object.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.event_ended,this);
            this.object.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT,this.frame_event,this);
            this.start_update();
        
            // 设置血量
            this.curr_blood = this.unit_controller.getTotalBlood();
        }
        
        // 
        public getArm(): dragonBones.Armature {
            return this.object;
        }
        
        // 
        public getNode(): any {
            return this.object.getDisplay();
        }

        public play(name: string,n: number): void {
            this.object.animation.gotoAndPlay(name,0,n,0);
        }
        
        // 死亡
        public died(): void {
            if(this.status != ROLE_STATUS.DEAD) {
                this.status = ROLE_STATUS.DEAD;
                this.object.animation.gotoAndPlay("death");
                var t = egret.Tween.get(this);
                t.pause();
                console.log("Died");
            }
        }
        
        public reduceBlood(num: number): boolean {

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
        
        public setType(type: number) {
            this.type = type;
        }

        public getType(): number {
            return this.type;
        }
        
        public update(): void {
            
        }
	}
}
