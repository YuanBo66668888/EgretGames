/**
 * @author TomYuan
 * @desc EgretCocos V1.0
 * @date 2016-06-12 Sunday
 */

module EgretCocos {
	export class ResManager {
        static resManager: ResManager;
    	public constructor() {
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
            
            var scene = EgretCocos.SceneManager.getInstance().getScene();
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, complete_func, scene);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, progress_func, scene);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, error_func, scene);
            RES.loadGroup(group);
            return ResManager.resManager;
    	}
	}
}
