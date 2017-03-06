var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjectPool = (function () {
    function ObjectPool() {
        this._objs = new Array;
    }
    ObjectPool.prototype.pushObj = function (obj) {
        this._objs.push(obj);
    };
    ObjectPool.prototype.popObj = function () {
        if (this._objs.length > 0) {
            return this._objs.pop();
        }
        return null;
    };
    ObjectPool.prototype.clear = function () {
        while (this._objs.length > 0) {
            this._objs.pop();
        }
    };
    // 静态
    ObjectPool.pop = function (className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var args = [], i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
        }
        if (!ObjectPool._content[className]) {
            ObjectPool._content[className] = [];
        }
        var ret = ObjectPool._content[className];
        if (ret.length) {
            return ret.pop;
        }
        var clsName = egret.getDefinitionByName(className);
        var total = args.length;
        var new_obj;
        if (total == 0) {
            new_obj = new clsName;
        }
        else if (total == 1) {
            new_obj = new clsName(args[0]);
        }
        else if (total == 2) {
            new_obj = new clsName(args[0], args[1]);
        }
        else if (total == 3) {
            new_obj = new clsName(args[0], args[1], args[2]);
        }
        else if (total == 4) {
            new_obj = new clsName(args[0], args[1], args[2], args[3]);
        }
        else if (total == 5) {
            new_obj = new clsName(args[0], args[1], args[2], args[3], args[4]);
        }
        new_obj.ObjectPoolKey = className;
    };
    ObjectPool.popWithExtraKey = function (className, extraKey) {
        if (!ObjectPool._content[className]) {
            ObjectPool._content[className] = [];
        }
        var curr_classObject = ObjectPool._content[className];
        var ret = null;
        if (curr_classObject.length) {
            for (var i = 0; i < curr_classObject.length; i++) {
                if (curr_classObject[i].extraKey == extraKey) {
                    ret = curr_classObject[i];
                    curr_classObject.splice(i, 1);
                    break;
                }
            }
        }
        if (ret == null) {
            // 不存在
            var clsName = egret.getDefinitionByName(className);
            ret = new clsName(extraKey);
            ret.extraKey = extraKey;
            ret.ObjectPoolKey = className;
        }
    };
    ObjectPool.push = function (obj) {
        if (obj == null)
            return false;
        var className = obj.ObjectPoolKey;
        if (ObjectPool._content[className]) {
            ObjectPool._content[className].push(obj);
            return true;
        }
        else {
            return false;
        }
    };
    ObjectPool.clear = function () {
        ObjectPool._content = {};
    };
    ObjectPool.clearClass = function (className, func_name) {
        if (func_name == 0) {
            func_name = null;
        }
        var classObjects = ObjectPool._content[className];
        if (classObjects && classObjects.length > 0) {
            while (classObjects.length > 0) {
                var o = classObjects.pop();
                if (func_name) {
                    o[func_name]();
                    o = null;
                }
            }
        }
        ObjectPool._content[className] = null;
        delete ObjectPool._content[className];
    };
    ObjectPool.dealFunc = function (className, func_name) {
        var o = ObjectPool._content[className];
        if (o) {
            for (var i = 0; i < o.length; i++) {
                o[i][func_name]();
            }
        }
    };
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map