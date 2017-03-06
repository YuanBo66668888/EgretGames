module EgretCocos {
	export class SceneManager {
        static sceneManager: SceneManager;
        private currentScene: Scene;
		public constructor() {
		    // TODO
		}
		static getInstance(): SceneManager {
            if(!SceneManager.sceneManager) {
                SceneManager.sceneManager = new SceneManager();
		    }
            return SceneManager.sceneManager;
		}
		
		public setScene(scene: Scene) {
            this.currentScene = scene;
		}
		
		public getScene(): Scene {
            return this.currentScene;
		}
	}
}
