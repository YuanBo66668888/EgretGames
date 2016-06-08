module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	export class SceneManager {
        static sceneManager: SceneManager;
        private currentScene: BaseScene;
		public constructor() {
		    // TODO
		}
		static getInstance():SceneManager {
            if(!SceneManager.sceneManager) {
                SceneManager.sceneManager = new SceneManager();
		    }
            return SceneManager.sceneManager;
		}
		
		public setScene(scene:BaseScene) {
            this.currentScene = scene;
		}
		
		public getScene():BaseScene {
            return this.currentScene;
		}
	}
}
