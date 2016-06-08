var UY;
(function (UY) {
    /**
     *
     * @author
     *
     */
    var MathLib = (function () {
        function MathLib() {
        }
        var d = __define,c=MathLib,p=c.prototype;
        // 求两点距离
        MathLib.getDistance = function (x1, y1, x2, y2) {
            return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        };
        return MathLib;
    }());
    UY.MathLib = MathLib;
    egret.registerClass(MathLib,'UY.MathLib');
})(UY || (UY = {}));
//# sourceMappingURL=MathLib.js.map