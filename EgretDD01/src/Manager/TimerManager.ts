class TimerManager extends BaseClass {

	private _handlers:Array<TimerHandler>;
	private _delHandlers:Array<TimerHandler>;
	private _currTime:number;
	private _currFrame:number;
	private _count:number;
	private _timeScale:number;

	public constructor() {
		super();
		// Init
		this._handlers = new Array;
		this._delHandlers = new Array;
		this._currTime = egret.getTimer();
		this._currFrame = 0;
		this._count = 0;
		this._timeScale = 1;
		egret.Ticker.getInstance().register(this.onEnterFrame, this);
	}

	public onEnterFrame() {
		this._currFrame++;
		this._currTime = egret.getTimer();
		App.DebugUtils.start("TimerManager:");

		//
		for (var i = 0; i < this._count; i++) {
			var handle = this._handlers[i];
			var used_tm = handle.userFrame ? this._currFrame: this._currTime;
			if (used_tm >= handle.exeTime) {
				App.DebugUtils.start(handle.method.toString());
				handle.method.call(handle.methodObj, (this._currTime - handle.dealTime) * this._timeScale);
				App.DebugUtils.stop(handle.method.toString());
				handle.dealTime = this._currTime;
				handle.exeTime += handle.delay;
				if (!handle.repeat) {
					if (handle.repeatCount > 1) {
						handle.repeatCount--;
					} else {
						if (handle.complateMethod) {
							handle.complateMethod.apply(handle.complateMethodObj);
							this._delHandlers.push(handle);
						}
					}
				}
			}
		}

		//
		while (this._delHandlers.length > 0) {
			var del_handle = this._delHandlers.pop();
			this.remove(del_handle.method, del_handle.methodObj);
		}

		//
		App.DebugUtils.stop("TimerManager:");
	}

	public create(userFrame, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
		if (!(delay < 0 || repeatCount < 0 || method == null)) {
			this.remove(method, methodObj);
			var handler:TimerHandler = ObjectPool.pop("TimerHandler");
			handler.userFrame = userFrame;
			handler.repeat = (0 == repeatCount);
			handler.repeatCount = repeatCount;
			handler.delay = delay;
			handler.method = method;
			handler.methodObj = methodObj;
			handler.complateMethod = complateMethod;
			handler.complateMethodObj = complateMethodObj;
			handler.exeTime = delay + (userFrame ? this._currFrame: this._currTime);
			handler.dealTime = this._currTime;
			this._handlers.push(handler);
			this._count++;
		}
	}

	public doTimer(delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
		if (complateMethod == 0) {
			complateMethod = null;
		}
		if (complateMethodObj == 0) {
			complateMethodObj = null;
		}

		this.create(false, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
	}

	public doFrame(delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
		if (complateMethod == 0) {
			complateMethod = null;
		}
		if (complateMethodObj == 0) {
			complateMethodObj = null;
		}
		this.create(true, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
	}

	public get count() {
		return this._count;
	}

	public remove(method, methodObj) {
		for (var i = 0; i < this._count; i++) {
			var handle = this._handlers[i];
			if (handle.method == method && handle.methodObj == methodObj) {
				this._handlers.splice(i, 1);
				ObjectPool.push(handle);
				this._count--;
				break;
			}
		}
	}

	public removeAll(method) {
		for (var i = 0; i < this._count; i++) {
			var handle = this._handlers[i];
			if (handle.method == method) {
				this._handlers.splice(i, 1);
				ObjectPool.push(handle);
				this._count--;
				i--;
			}
		}
	}

	public isExist(method, methodObj) {
		for (var i = 0; i < this._count; i++) {
			var handle = this._handlers[i];
			if (handle.method == method && handle.methodObj == methodObj) {
				return true;
			}
		}
		return false;
	}
}