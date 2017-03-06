var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DynamicChange = (function () {
    function DynamicChange() {
        this._dataCache = [],
            this._pUpdate = new ProxyUpdate(this._dataCache);
    }
    Object.defineProperty(DynamicChange.prototype, "pUpdate", {
        get: function () {
            return this._pUpdate;
        },
        enumerable: true,
        configurable: true
    });
    DynamicChange.prototype.getCacheData = function (key) {
        if (this._dataCache[key]) {
            return this._dataCache[key];
        }
        else {
            return null;
        }
    };
    DynamicChange.prototype.clearCache = function () {
        for (var t in this._dataCache) {
            this._dataCache[t] = null;
            delete this._dataCache[t];
        }
    };
    DynamicChange.prototype.getCacheKeyInfos = function () {
        var ret = [];
        for (var key in this._dataCache) {
            var i = this._dataCache[key];
            ret.push(i);
        }
        return ret;
    };
    DynamicChange.prototype.isCache = function (key) {
        return this._dataCache[key];
    };
    return DynamicChange;
}());
__reflect(DynamicChange.prototype, "DynamicChange");
//# sourceMappingURL=DynamicChange.js.map