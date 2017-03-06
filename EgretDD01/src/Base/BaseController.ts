class BaseController {

	private _messages:Object;
	public constructor() {
		this._messages = {};
	}

	public registerFunc(type, func:Function, param) {
		this._messages[type] = [func, param];
	}

	public applyFunc(type, ...param) {
		var message = this._messages[type];
		if (message) {
			var fc:Function = message[0];
			fc.apply(message[1], param);
			return message;
		} else {
			Log.trace("消息" + type + "不存在监听");
			return null;
		}
	}

	public applyControllerFunc(type, controller, ...param) {
		return App.ControllerManager.applyFunc(type, controller, param);
	}
}