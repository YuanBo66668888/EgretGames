/**
 *
 * @author Tom
 *
 */
module UY {
    export class BaseObject extends egret.DisplayObject {

        private update_timer: egret.Timer;
        private life_tm: number;
        private unique_id: string;
        static dt: number;

        public constructor() {
            
            BaseObject.dt = 0.02
            super();
        }

        public update(): void {
            this.life_tm = this.life_tm + BaseObject.dt;
            // console.log(this.life_tm);
        }

        public next_updated(): void {
            this.update_timer.start();
        }

        public start_update() {
            if(!this.update_timer) {
                this.update_timer = new egret.Timer(20,1);
                this.update_timer.addEventListener(egret.TimerEvent.TIMER,this.update,this);
                this.update_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.next_updated,this);
                this.update_timer.start();
            }
        }

        public stop_update() {
            if(this.update_timer) {
                this.update_timer.removeEventListener(egret.TimerEvent.TIMER,this.update,this);
            }
        }
    }
}

