var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NumberStringConst = (function () {
    function NumberStringConst() {
    }
    return NumberStringConst;
}());
NumberStringConst.K_MIN = 1e3;
NumberStringConst.M_MIN = 1e6;
NumberStringConst.G_MIN = 1e9;
NumberStringConst.T_MIN = 1e12;
NumberStringConst.P_MIN = 1e15;
__reflect(NumberStringConst.prototype, "NumberStringConst");
//# sourceMappingURL=NumberStringConst.js.map