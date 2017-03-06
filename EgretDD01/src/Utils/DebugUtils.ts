class DebugUtils extends BaseClass {
	private _threshold: number;
	private _startTimes;
	private _isOpen:boolean;

	public constructor() {
		super();
		this._threshold = 3;
		this._startTimes = {};
	}

	public isOpen(open:boolean) {
		this._isOpen = open;
	}

	get isDebug():boolean {
		return this._isOpen;
	}

	public start(msg:string) {
		if (this._isOpen) {
			this._startTimes[msg] = egret.getTimer;
		}
	}

	public stop(id:string) {
		if (!this._isOpen) {
			return 0;
		} else if (!this._startTimes[id]) {
			return 0;
		}
		var between = egret.getTimer() - this._startTimes[id];
		if (between > this._threshold) {
			Log.trace(id + ":" + between);
		}
	}
}