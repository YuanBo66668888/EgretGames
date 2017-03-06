class DisplayUtils extends BaseClass {
	public constructor() {
		super();
	}

	public createBitmap(name) {
		var bitmap = new egret.Bitmap;
		var texture = RES.getRes(name);
		if (texture) {
			bitmap.texture = texture;
		}
		return bitmap;
	}

	public removeFromParent(bitmap:egret.Bitmap) {
		if (bitmap.parent) {
			bitmap.parent.removeChild(bitmap);
		}
	}
}