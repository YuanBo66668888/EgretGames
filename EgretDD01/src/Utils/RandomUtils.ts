class RandomUtils extends BaseClass {
	public constructor() {
		super();
	}

	public limit(min, max) {
		min = Math.min(min, max);
		max = Math.max(min, max);
		var off = max - min;
		return min + Math.random() * off;
	}

	public limitInteger(min, max) {
		return Math.round(this.limit(min, max));
	}

	public randomArray(arr:Array<any>) {
		var index = Math.floor(Math.random() * arr.length);
		return arr[index];
	}
}