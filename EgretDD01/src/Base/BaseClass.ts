class BaseClass {

	public static _instance;
	public constructor(...args) {
	}

	public static getInstance(...params) {

		if (!this._instance) {
			var n = params.length;
			this._instance = new BaseClass(params);
		}
		return this._instance;
	}
}