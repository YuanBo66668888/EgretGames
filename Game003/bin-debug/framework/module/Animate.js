var UEgretCocosY;
(function (UEgretCocosY) {
    var Animate = (function () {
        function Animate() {
        }
        var d = __define,c=Animate,p=c.prototype;
        Animate.createAnimate = function (data_name, texture_name, ani_name) {
            var data = RES.getRes(data_name);
            var texture = RES.getRes(texture_name);
            var mcFactory = new egret.MovieClipDataFactory(data, texture);
            var ret = new egret.MovieClip(mcFactory.generateMovieClipData(ani_name));
            return ret;
        };
        return Animate;
    }());
    UEgretCocosY.Animate = Animate;
    egret.registerClass(Animate,'UEgretCocosY.Animate');
})(UEgretCocosY || (UEgretCocosY = {}));
//# sourceMappingURL=Animate.js.map