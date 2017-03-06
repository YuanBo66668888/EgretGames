class BaseGuiView extends eui.Component {

	private _controller:BaseController;
	private _myParent:BaseGuiLayer;
	private _isInit:boolean;
	
	//
	public percentHeight:number;
	public percentWidth:number;

	public constructor(controller, parent) {
		super();
		this._controller = controller;
		this._myParent = parent;
		this._isInit = false;
		this.percentHeight = 100;
		this.percentWidth = 100;
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
		if (this._myParent.getChildIndex(this) >= 0) {
			this._myParent.removeChild(this);
		}
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