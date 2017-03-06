class QueueExecutor {
	public _functions:Array<any>;
	public _callBack;
	public _callBackTarget;

	public constructor() {
		this._functions = new Array;
	}

	public setCallBack(cb, target) {
		this._callBack = cb;
		this._callBackTarget = target;
	}

	public regist(func, params) {
		this._functions.push([func, params]);
	}

	public start() {
		this.next();
	}

	public next() {
		if (this._functions) {
			if (this._functions.length == 0) {
				if (this._callBack) {
					this._callBack.call(this._callBackTarget);
					this._callBack = null;
					this._callBackTarget = null;
				} else {
					var func_arr = this._functions.shift();
					func_arr[0].call(func_arr[1]);
				}
			}
		}
	}
}