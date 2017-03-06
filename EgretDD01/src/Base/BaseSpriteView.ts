class BaseSpriteView extends egret.Sprite {

	private _controller:BaseController;
	private _myParent:BaseSpriteLayer;
	private _isInit:boolean;
	
	public constructor(controller, parent) {
		super();
		this._controller = controller;
        this._myParent = parent;
        this._isInit = false;
		egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
	}

	public onResize() {

	}

	public isInit() {
		return this._isInit;
	}

	public applyFunc(type, ...param) {
		return this._controller.applyFunc(type, param);
	}

	public applyControllerFunc(type, controller, ...param) {
		return this._controller.applyControllerFunc(type, controller, param);
	}

	public isShow() {
		return this.stage && this.visible;
	}

	public addToParent() {
		this._myParent.addChild(this);
	}

	public removeFromParent() {
		this._myParent.removeChild(this);
	}

	public initUI() {
		this._isInit = true;
	}

	public initData() {

	}

	public open(...param) {
		
	}

	public close(...param) {
		
	}
}