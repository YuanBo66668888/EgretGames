module EgretCocos {
	export class DBManager {
        static dbManager: DBManager;
        private factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
    	
        public constructor() {
		}
		
		static getInstance():DBManager {
		    if (!DBManager.dbManager) {
                DBManager.dbManager = new DBManager();
                egret.Ticker.getInstance().register(function(advancedTime) {
                    dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
                }, this);
		    }
            return DBManager.dbManager;
		}
		
		public loadData(name:string) {
            this.factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(RES.getRes(name + "_json")));
            this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(
                RES.getRes(name + "_texture_png"),
                RES.getRes(name + "_texture_json"))
            );
		}
		
		public loadDataArray(name:Array<string>) {
		    
            for(var i = 0;i < name.length; i++)  {
                this.loadData(name[i]);
            }
		}
		
        public createDBArmature(name: string): dragonBones.Armature {
            var armature = this.factory.buildArmature(name);
            var armatureDisplay = armature.getDisplay();
            this.addInWorld(armature);
            return armature;
        }
	    
        public addInWorld(arm: dragonBones.Armature) {
            dragonBones.WorldClock.clock.add(arm);
        }
        
        public removeFromWorld(arm: dragonBones.Armature) {
            dragonBones.WorldClock.clock.remove(arm);
        }
	}
}
