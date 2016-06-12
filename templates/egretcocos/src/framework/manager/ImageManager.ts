module EgretCocos {
	export class ImageManager {
		
        static imageManager: ImageManager;
        private content: egret.DisplayObjectContainer;
    	public constructor() {
		}
		
		static getInstance(): ImageManager {
		    
            if(!ImageManager.imageManager) {
                ImageManager.imageManager = new ImageManager();
    		}
            return ImageManager.imageManager;
		}
		
        private addImageCallBack(event: egret.Event) {
            var imageLoader: egret.ImageLoader = <egret.ImageLoader>event.currentTarget;
            var imageManager:ImageManager = this[0];
            var stage:egret.DisplayObjectContainer = this[1];
            var name: string = this[2];
            var x: number = this[3];
            var y: number = this[4];
            var order: number = this[5];
            var image: egret.Bitmap = new egret.Bitmap(imageLoader.data);
            stage.addChildAt(image,order);
            image.x = x;
            image.y = y;
            image.name = name;
            imageLoader.removeEventListener(egret.Event.COMPLETE,this.addImageCallBack,this);
        }
		
        public addSprite(url: string,parent: any,name: string,x: number,y: number,ZOrder: number, func?:Function): ImageManager {
		    
            var data: Array<any> = [this,parent,name,x,y,ZOrder];
            var imageLoader: egret.ImageLoader = new egret.ImageLoader();
            if(!func) {
                imageLoader.addEventListener(egret.Event.COMPLETE,this.addImageCallBack,data);
            } else {
                imageLoader.addEventListener(egret.Event.COMPLETE,func,data);
            }
            imageLoader.load("resource/assets/" + url);
            return ImageManager.imageManager;
		}
		
        public createWithSpriteFrameName(url: string): egret.Bitmap {
            
            var bitmap: egret.Bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(url);
            return bitmap;
        }
	}
}
