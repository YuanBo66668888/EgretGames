class BaseClass {
	
	public constructor() {
	}

	public getInstance(): BaseClass {
		var ret:BaseClass = new BaseClass();
		return ret;
	}
}