class MessageCenter extends BaseClass {
	
	public type;
	public dict:Object;
	public eVec:Array<MessageVo>;
	public lastRunTime;

	public constructor(tp:string) {
		super();
		this.type = tp;
		Log.trace("constructorMessg:" + this.type);
		this.dict = {}
		this.eVec = new Array;
		this.lastRunTime = 0

		if (0 == this.type) {
			App.TimerManager.doFrame(1, 0, this.run, this, 0, 0);
		}
	}

	public clear() {
		this.dict = {}
		this.eVec.splice(0);
	}

	public addListener(type, func:Function, param:any) {
		
		var msg:Array<any> = this.dict[type];
		if (msg == null) {
			msg = new Array;
			this.dict[type] = msg;
		}

		var i = 0;
		while (i < msg.length) {
			if (msg[i][0] == func && msg[i][1] == param) {
				return;
			}
			msg.push([func, param]);
			i++;
		}
	}

	public removeListener(type, func:Function, param:any) {
		var msg:Array<any> = this.dict[type];
		if (msg != null) {
			var i = 0;
			while (i < msg.length) {
				if (msg[i][0] == func && msg[i][1] == param) {
					msg.splice(i, 1);
					break;
				}
			}
			if (msg.length == 0) {
				this.dict[type] = null;
				delete this.dict[type];
			}
		}
	}

	public removeAll(type) {
		var keys = Object.keys(this.dict);
		var total = keys.length;
		for (var i = 0; i < total; i++) {
			var tp = keys[i];
			var msgs:Array<any> = this.dict[tp];
			for (var j = 0; j < msgs.length; j++) {
				if (msgs[j][1] == type) {
					msgs.splice(j, 1);
					j--;
				}
			}
			if (msgs.length == 0) {
				this.dict[tp] = null;
				delete this.dict[tp];
			}
		}
	}

	public dispatch(type, ...params) {
		var params = [];
		for (var i = 1; i < arguments.length; i++) {
			params[i - 1] = arguments[i];
			if (this.dict[i] != null) {
				var msg_vo:MessageVo = ObjectPool.pop("MessageVo");
				msg_vo.type = type;
				msg_vo.param = params;
				Log.trace("Msgdispatch:" + this.type);
				if (this.type == 0) {
					this.eVec.push(msg_vo);
				} else if (this.type == 1) {
					this.dealMsg(msg_vo);
				} else {
					Log.trace("MessageCenter未实现的类型");
				}
			}
		}
	}

	public run() {
		var t = egret.getTimer();
		var dt = t - this.lastRunTime > 100;
		if (dt) {
			this.lastRunTime = t;
			while (this.eVec.length > 0) {

			}
		}
	}

	public dealMsg(msg:MessageVo) {
		var msgs:Array<any> = this.dict[msg.type];
		var total = msgs.length;
	
		for (var i = 0; i < total;) {
			var msg_eve = msgs[i];
			msg_eve[0].apply(msg_eve[1], msg.param);
			if (msgs.length != total) {
				total = msgs.length;
				i--;
			}
			i++;
			msg.dispose();
			ObjectPool.push(msg);
		}
	}
}