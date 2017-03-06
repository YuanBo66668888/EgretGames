class DynamicChange  {
	private _dataCache;
	private _pUpdate;
	public constructor() {
		this._dataCache = [],
		this._pUpdate = new ProxyUpdate(this._dataCache);
	}

	get pUpdate() {
		return this._pUpdate;
	}

	public getCacheData(key) {
		if (this._dataCache[key]) {
			return this._dataCache[key];
		} else {
			return null;
		}
	}

	public clearCache() {
		for (var t in this._dataCache) {
			this._dataCache[t] = null;
			delete this._dataCache[t];
		}
	}

	public getCacheKeyInfos() {
		var ret = [];
        for (var key in this._dataCache) {
            var i = this._dataCache[key];
            ret.push(i)
        }
        return ret
	}

	public isCache(key) {
		return this._dataCache[key];
	}
}