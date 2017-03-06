var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameConfig = (function (_super) {
    __extends(GameConfig, _super);
    function GameConfig() {
        var _this = this;
        Log.trace("GameConfig Constructor");
        _this = _super.call(this) || this;
        _this.data = {};
        // 初始 建筑
        var dat = RES.getRes("arch_json");
        _this.arch = {};
        _this.initTable(_this.arch, dat);
        // 初始 成就
        dat = RES.getRes("achieve_json");
        _this.achieve = {};
        _this.initTable(_this.achieve, dat);
        // 初始 经验表
        dat = RES.getRes("exp_json");
        _this.exp = {};
        _this.initTable(_this.exp, dat);
        // 初始 神迹
        dat = RES.getRes("miracle_json");
        _this.miracle = {};
        _this.initTable(_this.miracle, dat);
        // 初始 科技
        dat = RES.getRes("science_json");
        _this.science = {};
        _this.initTable(_this.science, dat);
        dat = RES.getRes("prop_json");
        _this.prop = {};
        _this.initTable(_this.prop, dat);
        dat = RES.getRes("shop_json");
        _this.shop = {};
        _this.initTable(_this.shop, dat);
        _this.soldierSrc = RES.getRes("soldier_json");
        dat = RES.getRes("unionScien_json");
        _this.unionScien = {},
            _this.initTable(_this.unionScien, dat);
        return _this;
        // TODO
    }
    GameConfig.prototype.initTable = function (arr, value) {
        Log.trace("init--------------------------- Table", value);
        for (var i = 0; i < value.length; i++) {
            arr[value[i].id] = value[i];
        }
        Log.trace("initTableEnd", arr);
    };
    GameConfig.prototype.getConfigById = function (key, value) {
        return value[key];
    };
    GameConfig.prototype.getConfigDataById = function (key1, key2) {
        return this.data[key1][key2];
    };
    return GameConfig;
}(BaseClass));
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map