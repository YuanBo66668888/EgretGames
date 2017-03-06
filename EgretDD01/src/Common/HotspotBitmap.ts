class HotspotBitmap extends egret.Bitmap {

	private _hotspot:Array<any>;

	public constructor() {
		super();
		this._hotspot = [];
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
	}

	public addHotspotArea(rt, cb, obj, param) {
		this._hotspot.push({
			rect: rt,
			callBack: cb,
			thisObj: obj,
			para: param
		});
	}

	public onTouch(evt:egret.TouchEvent) {
		for (var obj, x = evt.localX, y = evt.localY, i = 0; i < this._hotspot.length; i++) {
			obj = this._hotspot[i];
			if (obj.rect.contains(x, y)) {
				if (obj.para) {
					obj.callBack.call(obj.thisObj, obj.para);
				} else {
					obj.callBack.call(obj.thisObj);
				}
			}
		}
	}
}