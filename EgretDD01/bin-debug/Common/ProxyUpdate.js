var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ProxyUpdate = (function () {
    function ProxyUpdate(data) {
        this._cache = data;
        this._proxys = [];
    }
    ProxyUpdate.prototype.isArray = function (arr) {
        return arr instanceof Array;
    };
    ProxyUpdate.prototype.isObject = function (object) {
        return object.indexOf("object") > -1;
    };
    ProxyUpdate.prototype.isNormal = function (o) {
        var e = o.indexOf("@") > -1, i = o.indexOf(".") > -1, n = o.indexOf("_") > -1;
        return !e && !i && !n;
    };
    ProxyUpdate.prototype.isAddToArray = function (o) {
        return "@a" == o;
    };
    ProxyUpdate.prototype.isRemoveToArray = function (str) {
        var ret = false;
        var str_arr = str.split("_");
        if (str_arr.length <= 3) {
            if (str_arr[0] == "@d") {
                ret = true;
            }
        }
        return ret;
    };
    ProxyUpdate.prototype.isFilter = function (str) {
        var ret = false;
        var str_arr = str.split("_");
        if (str_arr[0] == "@f") {
            ret = true;
        }
        return ret;
    };
    ProxyUpdate.prototype.isNumeric = function (o) {
        return parseFloat(o).toString() == o.toString();
    };
    ProxyUpdate.prototype._updateObject = function (str, obj, arr) {
        var str_arr = str.split(".");
        if (str_arr[0] == "@a" || str_arr[0] == "@s") {
            arr[str_arr[1]] = obj;
        }
        else {
            if (str_arr[0] == "@d") {
                delete arr[str_arr[1]];
            }
        }
    };
    ProxyUpdate.prototype._getFilterObject = function (str, arr) {
        if (arr) {
            var str_arr = str.split("_");
            if (str_arr.length == 3 && str_arr[0] == "@f" && this.isArray(arr)) {
                var k1 = str_arr[1];
                var k2 = str_arr[2];
                for (var i = 0; i < arr.length; i++) {
                    var o = arr[i];
                    if (this.isObject(o.toString())) {
                        var r = o[k1];
                        if (r) {
                            if ("@" == k2[0]) {
                                k2 = k2.replace("@", "");
                                k2 == r;
                            }
                        }
                        return o;
                    }
                }
            }
        }
        return null;
    };
    ProxyUpdate.prototype._addObjectToArray = function (arr, obj) {
        if (this.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                arr.push(obj[i]);
            }
        }
        else {
            arr.push(obj);
        }
    };
    // TODO
    ProxyUpdate.prototype._removeObjectFromArray = function (arr, str, o) {
        var str_arr = str.split("_");
        if (str_arr.length <= 3 && "@d" == str_arr[0] && this.isArray(arr)) {
            var total = arr.length;
            for (var i = total - 1; i >= 0; i--) {
                var t = arr[i];
                if (str_arr.length == 3 && t.hasOwnProperty(str_arr[1])) {
                    var s = str_arr[2];
                    if (s[0] == "@") {
                        s = s.replace("@", "");
                        if (s == arr[str_arr[1]]) {
                            arr.splice(i, 1);
                        }
                    }
                }
                else if (str_arr.length == 2 && t.hasOwnProperty(str_arr[1])) {
                    if (o == arr[str_arr[1]]) {
                        arr.splice(i, 1);
                    }
                }
                else if (str_arr.length == 1 && o == t) {
                    arr.splice(i, 1);
                }
            }
        }
    };
    ProxyUpdate.prototype.addProxys = function (key, value) {
        if (!this._proxys[key]) {
            this._proxys[key] = [];
        }
        if (-1 == this._proxys[key].indexOf(value)) {
            this._proxys[key].push(value);
        }
    };
    ProxyUpdate.prototype._dealProxys = function (key) {
        var proxy = this._proxys[key];
        if (proxy != null) {
            for (var i = 0; i < proxy.length; i++) {
                proxy[i]();
            }
        }
    };
    ProxyUpdate.prototype.update = function (tp, value) {
        // TODO
        this._cache[tp] = value;
        if (value && value.hasOwnProperty("c")) {
            var arr = value.c;
            for (var o in arr) {
                if (this._cache[o]) {
                    this._update(this._cache[o], arr[o]);
                }
                this._dealProxys(o);
            }
        }
    };
    ProxyUpdate.prototype._update = function (t, e) {
        // TODO
        if (t && e && this.isObject(e.toString())) {
            for (var o in e) {
                var n = e[o];
                if (this.isNormal(o) && this.isObject(n.toString())) {
                    if (t.hasOwnProperty(o)) {
                        this._update(t[o], n);
                    }
                }
                else if (this.isNormal(o) && this.isNumeric(n)) {
                    t[o] = t[o] + n;
                }
                else if (this.isAddToArray(o)) {
                    this._addObjectToArray(t, n);
                }
                else if (this.isRemoveToArray(o)) {
                    this._removeObjectFromArray(t, o, n);
                }
                else if (this.isFilter(o)) {
                    var filter = this._getFilterObject(o, t);
                    if (filter) {
                        this._update(filter, n);
                    }
                }
                else {
                    this._updateObject(o, n, t);
                }
            }
        }
    };
    return ProxyUpdate;
}());
__reflect(ProxyUpdate.prototype, "ProxyUpdate");
//# sourceMappingURL=ProxyUpdate.js.map