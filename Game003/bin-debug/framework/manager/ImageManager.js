var EgretCocos;
(function (EgretCocos) {
    var ImageManager = (function () {
        function ImageManager() {
        }
        var d = __define,c=ImageManager,p=c.prototype;
        ImageManager.getInstance = function () {
            if (!ImageManager.imageManager) {
                ImageManager.imageManager = new ImageManager();
            }
            return ImageManager.imageManager;
        };
        p.addImageCallBack = function (event) {
            var imageLoader = event.currentTarget;
            var imageManager = this[0];
            var stage = this[1];
            var name = this[2];
            var x = this[3];
            var y = this[4];
            var order = this[5];
            var image = new egret.Bitmap(imageLoader.data);
            stage.addChildAt(image, order);
            image.x = x;
            image.y = y;
            image.name = name;
            imageLoader.removeEventListener(egret.Event.COMPLETE, this.addImageCallBack, this);
        };
        p.addSprite = function (url, parent, name, x, y, ZOrder, func) {
            var data = [this, parent, name, x, y, ZOrder];
            var imageLoader = new egret.ImageLoader();
            if (!func) {
                imageLoader.addEventListener(egret.Event.COMPLETE, this.addImageCallBack, data);
            }
            else {
                imageLoader.addEventListener(egret.Event.COMPLETE, func, data);
            }
            imageLoader.load("resource/assets/" + url);
            return ImageManager.imageManager;
        };
        p.createWithSpriteFrameName = function (url) {
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(url);
            return bitmap;
        };
        return ImageManager;
    }());
    EgretCocos.ImageManager = ImageManager;
    egret.registerClass(ImageManager,'EgretCocos.ImageManager');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=ImageManager.js.map