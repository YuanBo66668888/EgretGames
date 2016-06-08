module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	export class Bar extends egret.Sprite {
        private bar: egret.Bitmap;
        private bottom: egret.Bitmap;
        private flip: number;
        private reflush: boolean;
		public constructor() {
            super();
		}
		
        public static create(on: string,off: string, off_x?:number, off_y?:number): Bar {
            
            var ret = new Bar();
            ret.flip = 1;
            ret.reflush = false;
            if (off) {
                ret.bottom = new egret.Bitmap();
                ret.bottom.texture = RES.getRes(off);
                ret.addChildAt(ret.bottom, 1);
            }
            if(on) {
                ret.bar = new egret.Bitmap();
                ret.bar.texture = RES.getRes(on);
                ret.addChildAt(ret.bar,2);
                if(off_y) {
                    ret.bar.x = off_x;
                    ret.bar.y = off_y;
                } else {
                    ret.bar.x = 0;
                    ret.bar.y = 1;
                }
                
            }
            return ret;
        }
        
        // 共有方法
        public setPercent(num) {
            this.bar.scaleX = this.flip * num;
        }
        
        public setFlipX(v) {
            if (v) {
                this.flip = -1;   
            } else {
                this.flip = 1;
            }
            this.bar.scaleX = this.flip;
            this.bottom.scaleX = this.flip;
        }
        
        public setPosition(p1_x?: number,p2_x?: number, p1_y?: number, p2_y?:number) {
            if(p1_x) {
                this.bar.x = this.bar.x + p1_x;
            }
            if (p1_y) {
                this.bar.y = this.bar.y + p1_y;
            }
            if (p2_x) {
                this.bottom.x = this.bottom.x + p2_x;
            }
            if (p2_y) {
                this.bottom.y = this.bottom.y + p2_y;
            }
        }
	}
}
