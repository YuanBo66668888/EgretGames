class UserInfo extends BaseClass {

	private _consttime;
	public bNeedNotice: boolean;
	private _mat:Object;
	private _userdata;

	public clickLevel;
	public bInit;


	public constructor() {
		super();
		this._consttime = 0;
		this.bNeedNotice = true;
		GameNote.init();
		this.init();
	}

	public init() {
		this._mat = {};
		this.bInit = false;
		this.clickLevel = 0;
	}

	public getUserData() {
		return this._userdata;
	}

}