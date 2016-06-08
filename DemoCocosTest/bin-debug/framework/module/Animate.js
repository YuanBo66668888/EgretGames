var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var Animate = (function () {
        // TODO
        function Animate() {
        }
        var d = __define,c=Animate,p=c.prototype;
        // Create
        Animate.createAnimate = function (data_name, texture_name, ani_name) {
            var data = RES.getRes(data_name);
            var texture = RES.getRes(texture_name);
            var mcFactory = new egret.MovieClipDataFactory(data, texture);
            var ret = new egret.MovieClip(mcFactory.generateMovieClipData(ani_name));
            return ret;
        };
        return Animate;
    }());
    UY.Animate = Animate;
    egret.registerClass(Animate,'UY.Animate');
})(UY || (UY = {}));
//# sourceMappingURL=Animate.js.map