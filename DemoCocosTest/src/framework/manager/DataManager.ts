module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	export class DataManager {
    	
        private static dataManager: DataManager;
		public constructor() {
    		// TODO
		}
		
		public static getInstance():DataManager {
		    if (!DataManager.dataManager) {
                DataManager.dataManager = new DataManager();
		    }
            return DataManager.dataManager;
		}
		
		public getJson(name:string):any {
            return RES.getRes(name);
		}
	}
}
