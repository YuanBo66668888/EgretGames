module EgretCocos {
	export class ArrayController {
		public constructor() {
		}
		
		public static deleteFromArray(arr:Array<any>, obj:any) {
            
            var new_arr: Array<any> = new Array<any>();
            var length = arr.length;
            
            for(var i = 0;i < length; i++) {
                var c_obj = arr.pop();
                if(c_obj.hashCode == obj.hashCode) {
                    // 清楚层级处理
                    /*var all_objects = UY.TierManager.getInstance().all_objects;
                    var ret_arr: Array<any> = new Array<any>();
                    var objs_length = ArrayController.getLength(all_objects);
                    // 删除
                    for(var j = 0;j < objs_length; j++) {
                        var code = all_objects.pop();
                        if(!code || c_obj.getNode().hashCode == code.hashCode) {
                            // 删除
                            console.log("DELETE: ...");
                        } else {
                            ret_arr[code.hashCode] = code;
                        }
                    }*/
                    // UY.TierManager.getInstance().all_objects = ret_arr;
                } else {
                    arr.unshift(c_obj);
                }
            }
		}
		
		public static getLength(arr:Array<any>):number {
            var ret = 0;
            for(var key in arr) {
                ret++;
            }
            return ret;
		}
	}
}
