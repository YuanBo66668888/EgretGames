var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Http = (function (_super) {
    __extends(Http, _super);
    function Http() {
        var _this = _super.call(this) || this;
        _this._cache = [];
        _this._data = new DynamicChange();
        //
        _this._request = new egret.URLRequest;
        _this._request.method = egret.URLRequestMethod.POST;
        // 
        _this._urlLoader = new egret.URLLoader;
        _this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.onError, _this);
        //
        _this.get_cache = [];
        _this._urlResLoader = new egret.URLLoader;
        _this._urlResLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        _this._urlResLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.onLoadError, _this);
        return _this;
    }
    Http.prototype.onLoadError = function () {
        console.log("onLoadError");
    };
    Http.prototype.initServer = function (url) {
        this._serverUrl = url;
        this._request.url = this._serverUrl;
    };
    Object.defineProperty(Http.prototype, "Data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Http.prototype.onError = function () {
        this.nextPost();
    };
    Http.prototype.send = function (k, v) {
        this._cache.push([k, v]);
        this.post();
    };
    Http.prototype.HttpGetRes = function (k, v) {
        this.get_cache.push([k, v]);
        this.onGet();
    };
    Http.prototype.onGet = function () {
        if (!this._isResRequesting && this.get_cache.length != 0) {
            var get_param = this.get_cache.shift();
            var key = get_param[0];
            var value = get_param[1];
            this._isResRequesting = true;
            //
            var url_req = new egret.URLRequest(value);
            this._urlResLoader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            this._urlResLoader.load(url_req),
                this._restype = key;
        }
    };
    Http.prototype.nextOnGet = function () {
        this._isRequesting = false;
        this.onGet();
    };
    Http.prototype.get = function (url, type) {
        this._isRequesting = true;
        this._request.method = egret.URLRequestMethod.GET;
        this._request.url = url;
        this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        this._urlLoader.load(this._request);
        this._type = type;
    };
    Http.prototype.onHttpGetComplete = function () {
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        App.MessageCenter.dispatch(this._type, this._urlLoader.data);
        this._isRequesting = false;
    };
    Http.prototype.onGetComplete = function () {
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        App.MessageCenter.dispatch(this._type, this._urlLoader.data);
        this._isRequesting = false;
    };
    Http.prototype.onLoadComplete = function (e) {
        this._urlResLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        var obj = e.target;
        var dat = obj.data;
        var bitmap = new egret.Bitmap;
        bitmap.texture = dat;
        App.MessageCenter.dispatch(this._restype, bitmap);
        this.nextOnGet();
    };
    Http.prototype.post = function () {
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
    };
    Http.prototype.onLoaderComplete = function () {
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        var json_dat = JSON.parse(this._urlLoader.data);
        json_dat.hasOwnProperty("s");
        this.nextPost();
    };
    Http.prototype.nextPost = function () {
        this._isRequesting = false;
        this.post();
    };
    return Http;
}(BaseClass));
__reflect(Http.prototype, "Http");
//# sourceMappingURL=Http.js.map