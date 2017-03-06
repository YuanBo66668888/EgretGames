module EgretCocos {
    export class Font extends egret.Sprite {
        private current_font:string;
        private current_jianju: number;
		public constructor() {
            super();
		}
		
		// 普通文本
        public static createText(content: string,color: number, font:string) {
            var ret: egret.TextField = new egret.TextField();
            ret.text = content;
            ret.textColor = color;
            ret.fontFamily = font;
            return ret;
		}
		
		// 输入文本
		public static createInputText() {
            var ret: egret.TextField = new egret.TextField();
            ret.type = egret.TextFieldType.INPUT;
            ret.textColor = 0x000000;
            return ret;
		}
		
		// BitMap字体
        public static createNumber(n: number,pre_name: string,jianju?: number): Font {
            var ret: Font = new Font();
            ret.current_font = pre_name;
            var k = 0;
            if(n != 0) {
                while(n != 0) {
                    var bit = n % 10;
                    n = Math.floor(n / 10);
                    var BP: egret.Bitmap = ImageManager.getInstance().createWithSpriteFrameName(pre_name + bit);
                    if(jianju) {
                        ret.current_jianju = jianju;
                        BP.x = -k * jianju;
                    } else {
                        ret.current_jianju = 20;
                        BP.x = -k * 20;
                    }

                    BP.y = 5;
                    ret.addChild(BP);
                    k++;
                }
            } else {
                if(jianju) {
                    ret.current_jianju = jianju;
                } else {
                    ret.current_jianju = 20;
                }
                var BP: egret.Bitmap = ImageManager.getInstance().createWithSpriteFrameName(pre_name + "0");
                BP.y = 5;
                ret.addChild(BP);
            }
            return ret;
		}
		
		// 变更
		public changeFont(n:number) {
            this.removeChildren();
            var k = 0;
            if(n != 0) {
                while(n != 0) {
                    var bit = n % 10;
                    n = Math.floor(n / 10);
                    var BP: egret.Bitmap = ImageManager.getInstance().createWithSpriteFrameName(this.current_font + bit);
                    if(this.current_jianju) {
                        BP.x = -k * this.current_jianju;
                    } else {
                        BP.x = -k * 20;
                    }
                    BP.y = 5;
                    this.addChild(BP);
                    k++;
                }
            } else {
                var BP: egret.Bitmap = ImageManager.getInstance().createWithSpriteFrameName(this.current_font + "0");
                BP.y = 5;
                this.addChild(BP);
            }
		}
		
	}
}
