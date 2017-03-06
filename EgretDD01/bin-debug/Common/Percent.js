var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Percent = (function () {
    function Percent(curr, total) {
        this.currentValue = curr;
        this.totalValue = total;
    }
    Percent.prototype.computePercent = function () {
        return this.currentValue / this.totalValue * 100;
    };
    Percent.prototype.computeRate = function () {
        return this.currentValue / this.totalValue;
    };
    Percent.prototype.reverse = function () {
        return this.currentValue = this.totalValue - this.currentValue;
    };
    Percent.prototype.copy = function () {
        return new Percent(this.currentValue, this.totalValue);
    };
    Percent.prototype.computePercentReverse = function () {
        return (this.totalValue - this.currentValue) / this.totalValue * 100;
    };
    Percent.prototype.computeRateReverse = function () {
        return (this.totalValue - this.currentValue) / this.totalValue;
    };
    return Percent;
}());
__reflect(Percent.prototype, "Percent");
//# sourceMappingURL=Percent.js.map