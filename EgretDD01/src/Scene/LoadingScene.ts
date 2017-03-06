class LoadingScene extends BaseScene {
	public constructor() {
		super();
	}

	public onEnter() {
		super.onEnter();
		console.log("----------LoadingScene onEnter-----------------");
		this.addLayer(LayerManager.UIMain);
		// App.ViewManager.o
	}

	
}