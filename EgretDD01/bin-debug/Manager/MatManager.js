var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MatManager = (function (_super) {
    __extends(MatManager, _super);
    function MatManager(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this._type = MatConst.getMatType(id);
        return _this;
    }
    MatManager.prototype.resetMat = function () {
        this.addRate = 0;
        this.transArr = new Array;
    };
    MatManager.prototype.getFightNum = function (v) {
    };
    MatManager.calEquipNum = function (t, e, i, n) {
    };
    MatManager.prototype.isMax = function () {
    };
    MatManager.prototype.canGot = function (t) {
    };
    MatManager.prototype.register = function (t, e, i) {
    };
    MatManager.prototype.calPerAdd = function () {
    };
    MatManager.prototype.calStore = function () {
    };
    MatManager.prototype.calStoreRate = function (v) {
    };
    MatManager.prototype.setVipStoreRate = function (v) {
    };
    MatManager.prototype.getPerAdd = function () {
    };
    MatManager.prototype.setNum = function () {
    };
    MatManager.prototype.setLevel = function (v) {
    };
    MatManager.prototype.setStoreLevel = function () {
    };
    MatManager.prototype.refresh = function () {
    };
    MatManager.prototype.getArmyNum = function () {
    };
    MatManager.prototype.getSpeed = function () {
    };
    MatManager.prototype.getSpeedStr = function () {
    };
    MatManager.prototype.getTransStr = function () {
    };
    MatManager.prototype.getLevel = function () {
    };
    MatManager.prototype.getStoreLevel = function () {
    };
    MatManager.prototype.getGrade = function () {
    };
    MatManager.prototype.getMax = function () {
    };
    MatManager.prototype.setArmyNum = function (v) {
    };
    MatManager.prototype.numChange = function (v) {
    };
    MatManager.prototype.numPerChange = function (v) {
    };
    MatManager.prototype.levelChange = function (v) {
    };
    MatManager.prototype.storeLevelChange = function (v) {
    };
    MatManager.prototype.rateChange = function (v) {
    };
    MatManager.prototype.setUnionRate = function (v) {
    };
    MatManager.prototype.setVipRate = function (v) {
    };
    MatManager.prototype.setMiracleRate = function (v) {
    };
    MatManager.prototype.setKingRate = function (v) {
    };
    MatManager.prototype.gradeChange = function (v) {
    };
    MatManager.prototype.nationChange = function () {
    };
    MatManager.prototype.Step = function () {
    };
    MatManager.prototype.getConfig = function () {
    };
    MatManager.prototype.setTrans = function (t, e, i) {
    };
    MatManager.prototype.calTotleAddRate = function () {
    };
    MatManager.prototype.getTotalAdd = function () {
    };
    MatManager.prototype.trans = function (v) {
    };
    MatManager.prototype.testTrans = function () {
    };
    MatManager.prototype.setCdRate = function () {
    };
    MatManager.prototype.addCdRate = function () {
    };
    MatManager.prototype.getCdRate = function () {
    };
    MatManager.prototype.setCostRate = function (v) {
    };
    MatManager.prototype.getCostRate = function () {
    };
    MatManager.prototype.changeAtt = function (k, v) {
    };
    MatManager.prototype.setlimitRate = function () {
    };
    MatManager.prototype.getlimitRate = function () {
    };
    return MatManager;
}(BaseClass));
__reflect(MatManager.prototype, "MatManager");
//# sourceMappingURL=MatManager.js.map