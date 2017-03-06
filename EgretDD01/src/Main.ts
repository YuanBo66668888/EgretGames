class Main extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	public onAddToStage(event:egret.Event) {
		this.stage.frameRate = 30;
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.$onAddToStage, this);
		this.initScene();
	}

	public initScene() {
		// App.SceneManager.register(SceneConsts.LOADING, new LoadingScene);
	}

	public initModule() {

	}

	public loadResVersionComplate() {

	}
}