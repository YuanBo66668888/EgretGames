class MatManager extends BaseClass {

	private id;
	private _type;
	private _num;
	private _armyNum;
	private numDirty;
	private equipDirty;
	private fightNum;
	private _perAdd;
	private addDirty;
	private transArr: Array<any>;
	private rateDirty;
	private cdRate;
	private costRate;
	private level;
	private levelPerAdd;
	private addRate;
	private unionAddRate;
	private miraAddRate;
	private kingAddRate;
	private vipAddRate;
	private _max;
	private storeLevel;
	private storePerAdd;
	private storeRate;
	private limitRate;
	private cardStoreRate;
	private vipStoreRate;
	private grade;
	private attTable;

	public constructor(id) {
		super();

		this.id = id;
		this._type = MatConst.getMatType(id);
	}

	public resetMat() {
		this.addRate = 0;
		this.transArr = new Array;
	}

	public getFightNum(v) {

	}

	public static calEquipNum(t, e, i, n) {

	}

	public isMax() {

	}

	public canGot(t) {

	}

	public register(t, e, i) {

	}

	public calPerAdd() {

	}

	public calStore() {

	}

	public calStoreRate(v) {

	}

	public setVipStoreRate(v) {

	}

	public getPerAdd() {

	}

	public setNum() {

	}

	public setLevel(v) {

	}

	public setStoreLevel() {

	}

	public refresh() {

	}

	public getArmyNum() {

	}
	
	public getSpeed() {

	}

	public getSpeedStr() {

	}

	public getTransStr() {

	}

	public getLevel() {

	}

	public getStoreLevel() {

	}

	public getGrade() {

	}

	public getMax() {

	}

	public setArmyNum(v) {

	}

	public numChange(v) {

	}

	public numPerChange(v) {

	}

	public levelChange(v) {

	}

	public storeLevelChange(v) {

	}

	public rateChange(v) {

	}

	public setUnionRate(v) {

	}

	public setVipRate(v) {
		
	}

	public setMiracleRate(v) {

	}

	public setKingRate(v) {

	}

	public gradeChange(v) {

	}

	public nationChange() {

	}

	public Step() {

	}

	public getConfig() {

	}

	public setTrans(t, e, i) {

	}

	public calTotleAddRate() {

	}

	public getTotalAdd() {

	}

	public trans(v) {

	}

	public testTrans() {

	}

	public setCdRate() {

	}

	public addCdRate() {

	}

	public getCdRate() {

	}

	public setCostRate(v) {

	}

	public getCostRate() {

	}

	public changeAtt(k, v) {

	}

	public setlimitRate() {

	}

	public getlimitRate() {
		
	}
}