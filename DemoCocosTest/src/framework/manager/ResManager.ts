module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	export class ResManager {
		
        static resManager: ResManager;
    	public constructor() {
		    // TODO
    	}
    	
    	static getInstance():ResManager {
    	    
        	if (!ResManager.resManager) {
                ResManager.resManager = new ResManager();
        	}
            return ResManager.resManager;
    	}

        public loadConfig(file:string) {
            RES.loadConfig("resource/" + file,"resource/");
        }
        
    	public loadFile(group:string, 
                complete_func: (event: RES.ResourceEvent) => void,
                progress_func: (event: RES.ResourceEvent) => void,
                error_func: (event: RES.ResourceEvent) => void
            ): ResManager {
            
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,complete_func,UY.SceneManager.getInstance().getScene());
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,progress_func,UY.SceneManager.getInstance().getScene());
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,error_func,UY.SceneManager.getInstance().getScene());
            RES.loadGroup(group);
            return ResManager.resManager;
    	}
    	
        public testSingleton():void {
            
            egret.log("singleton");
        }
		
	}
}
