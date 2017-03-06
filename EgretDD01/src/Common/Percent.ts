class Percent {
	public currentValue;
	public totalValue;
	public constructor(curr, total) {
		this.currentValue = curr;
		this.totalValue = total;
	}

	public computePercent() {
		return this.currentValue / this.totalValue * 100;
	}

	public computeRate() {
		return this.currentValue / this.totalValue;
	}

	public reverse() {
		return this.currentValue = this.totalValue - this.currentValue;
	}

	public copy() {
		return new Percent(this.currentValue, this.totalValue);
	}

	public computePercentReverse() {
		return (this.totalValue - this.currentValue) / this.totalValue * 100
	}

	public computeRateReverse() {
		return (this.totalValue - this.currentValue) / this.totalValue
	}
}