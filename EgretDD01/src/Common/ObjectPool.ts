class ObjectPool {
    // 对象池技术
	private _objs:Array<any>;
    private static _content:Object;

    public constructor() {
        this._objs = new Array;
    }

    public pushObj(obj) {
        this._objs.push(obj);
    }

    public popObj() {
        if (this._objs.length > 0) {
            return this._objs.pop();
        }
        return null;
    }

    public clear() {
        while (this._objs.length > 0) {
            this._objs.pop();
        }
    }

    // 静态
    public static pop(className, ...args:any[]) {

        if (!ObjectPool._content[className]) {
            ObjectPool._content[className] = [];
        }
        var ret = ObjectPool._content[className];
        if (ret.length) {
            return ret.pop;
        }
        var clsName = egret.getDefinitionByName(className);
        var new_obj = new clsName(args);
        new_obj.ObjectPoolKey = className;
    }

    public static popWithExtraKey(className, extraKey) {
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
    }

    public static push(obj) {
        if (obj == null) return false;
        var className = obj.ObjectPoolKey;
        if (ObjectPool._content[className]) {
            ObjectPool._content[className].push(obj);
            return true;
        } else {
            return false;
        }
    }

    public static clear() {
        ObjectPool._content = {};
    }

    public static clearClass(className, func_name) {
        if (func_name == 0) {
            func_name = null;
        }
        var classObjects = ObjectPool._content[className];
        if (classObjects && classObjects.length > 0) {
            while (classObjects.length > 0) {
                var o = classObjects.pop();
                if (func_name) {
                    o[func_name]()
                    o = null;
                }
            }
        }
        ObjectPool._content[className] = null;
        delete ObjectPool._content[className];
     }

     public static dealFunc(className, func_name) {
         var o = ObjectPool._content[className];
         if (o) {
             for (var i = 0; i < o.length; i++) {
                 o[i][func_name]();
             }
         }
     }
}