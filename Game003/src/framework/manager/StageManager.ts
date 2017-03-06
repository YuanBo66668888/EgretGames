module EgretCocos {
	export class StageManager {
        static stageManager: StageManager;
        private stage: egret.DisplayObjectContainer;
		public constructor() {
		}
		
		static getInstance():StageManager {
            if(!StageManager.stageManager) {
                StageManager.stageManager = new StageManager();
            }
            return StageManager.stageManager;
		}
		
		public setStage(stage:egret.DisplayObjectContainer) {
            this.stage = stage;
		}
		
		public getStage():egret.DisplayObjectContainer {
            return this.stage;
		}
	}
}
