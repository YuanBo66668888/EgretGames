class GameConfig extends BaseClass{

	public data;
	// 配置变量
	public arch;
	public achieve;
	public exp;
	public miracle;
	public science;
	public prop;
	public shop;
	public soldierSrc;
	public unionScien;

	public constructor() {
		Log.trace("GameConfig Constructor");
		super();
		this.data = {}
		// 初始 建筑
		var dat = RES.getRes("arch_json");
		this.arch = {};
		this.initTable(this.arch, dat);
		// 初始 成就
		dat = RES.getRes("achieve_json");
		this.achieve = {};
		this.initTable(this.achieve, dat);
		// 初始 经验表
		dat = RES.getRes("exp_json");
		this.exp = {};
		this.initTable(this.exp, dat);
		// 初始 神迹
		dat = RES.getRes("miracle_json");
		this.miracle = {};
		this.initTable(this.miracle, dat);
		// 初始 科技
		dat = RES.getRes("science_json");
		this.science = {};
		this.initTable(this.science, dat);
		
		dat = RES.getRes("prop_json");
		this.prop = {};
		this.initTable(this.prop, dat);

		dat = RES.getRes("shop_json");
		this.shop = {};
        this.initTable(this.shop, dat);

		this.soldierSrc = RES.getRes("soldier_json");

		dat = RES.getRes("unionScien_json");
        this.unionScien = {},
        this.initTable(this.unionScien, dat);

		// TODO

	}

	public initTable(arr, value) {
		Log.trace("init--------------------------- Table", value);
		for (var i = 0; i < value.length; i++) {
			arr[value[i].id] = value[i];
		}
		Log.trace("initTableEnd", arr);
	}

	public getConfigById(key, value) {
		return value[key];
	}

	public getConfigDataById(key1, key2) {
		return this.data[key1][key2];
	}

	// TODO

}