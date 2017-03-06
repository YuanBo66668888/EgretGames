class MathUtils extends BaseClass {
	
	// 获得
	public getAngle(rad) {
		return 180 * rad / Math.PI;
	}

	// 
	public getRadian(angle) {
		return angle / 180 * Math.PI;
	}

	//
	public getRadian2(t, e, i, n) {
		var s = i - t,
        r = n - e;
        return Math.atan2(r, s)
	}

	//
	public getDistance(t, e, i, n) {
		var s = i - t,
        r = n - e,
        a = s * s + r * r;
        return Math.sqrt(a)
	}
}