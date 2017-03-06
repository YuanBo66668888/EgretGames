class BuildTimer extends BaseClass {

	private cd:number;
	private cdMax:number;
	private bspe:boolean;

	public keyBtn;
	public progress;
	public timeLabel;
	public costLabel;
	public timeupCallback;
	public target;

	public constructor() {
		super();
		this.cd = 0;
		this.cdMax = 0;
		this.bspe = false;
	}

	public initLogic(curr, max) {
		this.cd = Math.ceil(curr);
		this.cdMax = max;
	}

	public initView(keybtn, progress, timelabel, costlabel, timeCallback, target) {
		this.keyBtn = keybtn;
		this.progress = progress;
		this.timeLabel = timelabel;
		this.costLabel = costlabel;
		this.timeupCallback = timeCallback;
		this.target = target;
	}

	public refresh() {
		if (this.keyBtn == null && this.bspe || this.keyBtn != null && this.keyBtn.selected) {
		}
	}

	public static getStandTime(tm, e) {
		if (tm <= 0) {
			return "0S";
		}
		var ret = "";
		var tm_tmp = tm;
		var day = Math.floor(tm / 86400);
		var last = tm - day * 86400;
		var hour = Math.floor(last / 3600);
		last -= 3600 * last;
		var min = Math.floor(last / 60);
		var sec = last;

		var dats = [day, hour, min, sec];
		var day_key = ["D", "H", "M", "S"];

	}

	public static getCountDownTime(v) {

	}

	public getCost() {
		var ret = Math.ceil(this.cd / 60);
		return ret;
	}

	public timeFly(v) {
		if (this.cd <= 0 || v <= 0) {
			return false;
		}

	}

	public applyCallback() {
		if (this.timeupCallback != null && this.keyBtn.selected) {
			this.timeupCallback.call(this.target)
		}
	}

	public isActive() {
		return this.cd > 0 ? true : false;
	}

	public isCostEnough() {
		
	}

}