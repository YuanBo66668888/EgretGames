/**
 *
 * @author Tom
 *
 */
module UY {
    const enum CHANGE_TYPE {
        DETAIL
    }
    
    export class BaseScene extends UY.BaseObject {
    
        public container: egret.DisplayObjectContainer;
        // 构造函数
        public constructor() {
            super();
            //
            this.container = new egret.DisplayObjectContainer();
        }
	
        // Init
        public init(): boolean {
        
            // 组件Init
            var ret: boolean = false;
            if(this.onEnter()) {
                ret = true;
            }
            return ret;
        }

        public onEnter(): boolean {
        
            // TODO
            return true;
        }

        static create(): BaseScene {
            var ret: BaseScene = new BaseScene();
            return ret;
        }

        public change_scene(): boolean {

            return true;
        }

    }
}
