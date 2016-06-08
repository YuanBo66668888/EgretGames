var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var ArrayController = (function () {
        function ArrayController() {
        }
        var d = __define,c=ArrayController,p=c.prototype;
        ArrayController.deleteFromArray = function (arr, obj) {
            var new_arr = new Array();
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                var c_obj = arr.pop();
                if (c_obj.hashCode == obj.hashCode) {
                }
                else {
                    arr.unshift(c_obj);
                }
            }
        };
        ArrayController.getLength = function (arr) {
            var ret = 0;
            for (var key in arr) {
                ret++;
            }
            return ret;
        };
        return ArrayController;
    }());
    UY.ArrayController = ArrayController;
    egret.registerClass(ArrayController,'UY.ArrayController');
})(UY || (UY = {}));
//# sourceMappingURL=ArrayController.js.map