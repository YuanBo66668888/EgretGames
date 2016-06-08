module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	
	export class TierManager {
		
        private static tierManager: TierManager;
        public all_objects: Array<any>;
    	public constructor() {
		}
		
        public static getInstance(): TierManager {
            if(!TierManager.tierManager) {
                TierManager.tierManager = new TierManager();
                TierManager.tierManager.all_objects = new Array<any>();
            }
            return TierManager.tierManager;
        }

        public dealWithPosition() {
            var num: Array<number> = new Array<number>();
            var i = 0;
            var begin_order:number;
            begin_order = 1000;
            for(var v in this.all_objects) {
                // this.all_objects[v]
                if(this.all_objects[v]) {
                    num[i] = this.all_objects[v].hashCode;
                    if(this.all_objects[v].parent) {
                        var current = this.all_objects[v].parent.getChildIndex(this.all_objects[v]);
                        if(begin_order > current) {
                            begin_order = current;
                        }
                    }
                    i++;
                }
            }
            // 判断当前Y
            for(var k = 0;k < num.length; k++) {
                for(var j = 0;j < num.length; j++) {
                    if(this.all_objects[num[k]] && this.all_objects[num[j]]) {
                        if(this.all_objects[num[k]].y < this.all_objects[num[j]].y) {
                            var temp = this.all_objects[num[k]];
                            this.all_objects[num[k]] = this.all_objects[num[j]];
                            this.all_objects[num[j]] = temp;
                        }
                    }
                }
            }
            
            for(var k = 0;k < num.length;k++) {
                var unit = this.all_objects[num[k]];
                if(unit && unit.parent) {
                    unit.parent.setChildIndex(unit,begin_order + k);
                }
            }
        }
        
        public removeObject(hash) {
            for(var v in this.all_objects) {
                if(this.all_objects[v]) {
                    if (this.all_objects[v].hashCode == hash) {
                        this.all_objects[v] = null;
                    }
                }
            }
        }
        
        public removeObjectByIndex(index) {
            var i = 1;
            for(var v in this.all_objects) {
                if(this.all_objects[v]) {
                    if(i == index) {
                        this.all_objects[v] = null;
                    }
                }
                i++;
            }
        }
	}
}
