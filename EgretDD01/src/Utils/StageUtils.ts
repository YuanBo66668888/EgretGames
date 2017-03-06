class StageUtils extends BaseClass {
	// GUI  => EUI
	// http://edn.egret.com/cn/index.php/article/index/id/669
	public constructor() {
		super();

	}

	public getHeight() {
		return this.getStage().stageHeight;
	}

	public getWidth() {
		return this.getStage().stageWidth;
	}

	public setTouchChildren(is_touched:boolean) {
		this.getStage().touchEnabled = is_touched;
	}

	public setMaxTouches(max_touch:number) {
		this.getStage().maxTouches = max_touch;
	}

	public setFrameRate(rate:number) {
		this.getStage().frameRate = rate;
	}

	public setScaleMode(mode:string) {
		this.getStage().scaleMode = mode;
	}

	public getStage() : egret.Stage {
		return egret.MainContext.instance.stage;
	}
}