class Http extends BaseClass {
	
	private _data;
	private _cache:Array<any>;
	private _request:egret.URLRequest;
	private _urlLoader:egret.URLLoader;
	public get_cache:Array<any>;
	private _urlResLoader:egret.URLLoader;
	private _isRequesting:boolean;
	private _type;
	private _serverUrl;
	private _restype;
	private _isResRequesting:boolean;
	
	public constructor() {
		super();
		this._cache = [];
		this._data = new DynamicChange();
		//
		this._request = new egret.URLRequest;
		this._request.method = egret.URLRequestMethod.POST;
		
		// 
		this._urlLoader = new egret.URLLoader;
		this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);

		//
		this.get_cache = [];
		this._urlResLoader = new egret.URLLoader;
		this._urlResLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
		this._urlResLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
	}

	public onLoadError() {
		console.log("onLoadError");
	}

	public initServer(url) {
		this._serverUrl = url;
		this._request.url = this._serverUrl;
	}

	public get Data() {
		return this._data;
	}

	public onError() {
		this.nextPost();
	}

	public send(k, v) {
		this._cache.push([k, v]);
		this.post();
	}

	public HttpGetRes(k, v) {
		this.get_cache.push([k, v]);
		this.onGet();
	}

	public onGet() {
		if (!this._isResRequesting && this.get_cache.length != 0) {
			var get_param:Array<any> = this.get_cache.shift();
			var key = get_param[0];
			var value = get_param[1];
			this._isResRequesting = true;
			//
			var url_req = new egret.URLRequest(value);
			this._urlResLoader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
			this._urlResLoader.load(url_req),
            this._restype = key;
		}
	}
	
	public nextOnGet() {
		this._isRequesting = false;
		this.onGet();
	}

	public get(url, type) {
		this._isRequesting = true;
		this._request.method = egret.URLRequestMethod.GET;
		this._request.url = url;
		this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
		this._urlLoader.load(this._request);
		this._type = type;
	}

	public onHttpGetComplete() {
		this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
		App.MessageCenter.dispatch(this._type, this._urlLoader.data);
		this._isRequesting = false;
	}

	public onGetComplete() {
		this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
		App.MessageCenter.dispatch(this._type, this._urlLoader.data);
		this._isRequesting = false;
	}

	public onLoadComplete(e:egret.Event) {
		this._urlResLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
		var obj = e.target;
		var dat = obj.data;
		var bitmap = new egret.Bitmap;
		bitmap.texture = dat;
		App.MessageCenter.dispatch(this._restype, bitmap);
		this.nextOnGet();
	}

	public post() {
		if (!this._isRequesting && 0 != this._cache.length) {
			var dat_arr = this._cache.shift();
			var type = dat_arr[0];
			var data = dat_arr[1];

			this._type = type;
			this._request.data = data;
			this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
			this._urlLoader.load(this._request),
            this._isRequesting = true;
		}
	}

	public onLoaderComplete() {
		this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
		var json_dat = JSON.parse(this._urlLoader.data);
		json_dat.hasOwnProperty("s");
		this.nextPost()
	}

	public nextPost() {
		this._isRequesting = false;
		this.post();
	}
}