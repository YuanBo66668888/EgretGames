/**
 * @author TomYuan
 * @desc EgretCocos V1.0
 * @date 2016-06-12 Sunday
 */
module EgretCocos {
    
    export class Scene extends Base {
        public constructor() {
            super();
        }
	
        protected init(): boolean {
            var ret: boolean = false;
            if(this.onEnter()) {
                ret = true;
            }
            return ret;
        }

        public onEnter(): boolean {
            return true;
        }

        static create(): Scene {
            var ret: Scene = new Scene();
            return ret;
        }

        public change_scene(): boolean {
            return true;
        }

    }
}
