module EgretCocos {
	export class Button extends egret.Bitmap {
		
    	public constructor() {
            super();
		}
		
        private click_func: Function;
        private on_name: string;
        private off_name: string;
		
		public touch_begin(e:egret.TouchEvent) {
            this.texture = RES.getRes(this.on_name);
		}
		
        public touch_moved(e: egret.TouchEvent) {
		    
		}
		
        public touch_ended(e: egret.TouchEvent) {
            this.texture = RES.getRes(this.off_name);
            this.click_func();
		}
		
        public touch_out(e: egret.TouchEvent) {
            this.texture = RES.getRes(this.off_name);
		}
		
		public static create(on:string, off:string, click_func:Function):Button {
            var button = new Button();
            button.click_func = click_func;
            button.on_name = on;
            button.off_name = off;
            button.texture = RES.getRes(button.off_name);
            button.touchEnabled = true;
            button.addEventListener(egret.TouchEvent.TOUCH_BEGIN,button.touch_begin,button);
            button.addEventListener(egret.TouchEvent.TOUCH_MOVE,button.touch_moved,button);
            button.addEventListener(egret.TouchEvent.TOUCH_END,button.touch_ended,button);
            button.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,button.touch_out,button);
            return button
        }
		
	}
}
