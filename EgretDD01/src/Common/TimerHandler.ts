class TimerHandler {
	public delay:number;
	public repeatCount:number;
	public exeTime:number;
	public dealTime:number;
	public method:Function;
	public methodObj:any;
	public complateMethod:Function;
	public complateMethodObj:any;
	public userFrame:boolean;
	public repeat:boolean;

	public constructor() {
		this.delay = 0;
		this.repeatCount = 0;
		this.exeTime = 0;
		this.dealTime = 0;
	}

	public clear() {
		this.method = null;
        this.methodObj = null;
        this.complateMethod = null;
        this.complateMethodObj = null;
	}
}