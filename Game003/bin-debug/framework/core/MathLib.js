var EgretCocos;
(function (EgretCocos) {
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
    EgretCocos.MathLib = MathLib;
    egret.registerClass(MathLib,'EgretCocos.MathLib');
})(EgretCocos || (EgretCocos = {}));
//# sourceMappingURL=MathLib.js.map