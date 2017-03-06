class LanManager extends BaseClass {

	private _data;
	public constructor() {
		super();
	}

	public initLanguageData(dat) {
		this._data = dat;
	}

	public trans(key) {
		return this._data[key] ? this._data[key] : this._data.invalid;
	}
}