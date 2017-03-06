class ViewManager extends BaseClass {
	
	private _views:Object;
	private _opens:Array<any>;
	private _viewids:Array<any>;
	private _viewKey;

	public constructor() {
		super();
		this._views = {};
		this._opens = new Array;
		this._viewids = new Array;
	}

	public register(view_name, view) {
		this._views[view_name] = view;
		if (this._viewids.indexOf(view_name) < 0) {
			this._viewids.push(view_name);
		}
	}

	public open(view_name, ...param) {
		var view = this._views[view_name];
		if (view != null) {
			if (this.isOpen(view_name)) {
				view.open.apply(view, param);
			} else {
				this._viewKey = view_name;
				view.addToParent();
				if (!view.isInit()) {
					view.initUI();
					view.initData();
				}
				view.open.apply(view, param);
				this._opens.push(view_name);
			}
		} else {
			Log.trace("UI_" + view_name + "不存在");
		}
	}

	public close(view_name, ...param) {
		var view = this._views[view_name];
		Log.trace("close" + view_name + "---------1");
		if (view == null) {
			Log.trace("UI_" + view_name + "不存在");
		} else {
			Log.trace("close" + view_name + "---------2");
			if (this.isOpen(view_name)) {
				Log.trace("close" + view_name + "---------3");
				view.removeFromParent()
				view.close.apply(view, param);
				this._opens.splice(this._opens.indexOf(view_name), 1)
			}
		}
	}

	public closeView(view, ...param) {
		var view_name = this.getViewKey(view);
		this.close.apply(this, param);
	}

	public openOrClose(view_name, ...param) {
	}
	
	public isOpen(view_name) {
		return this._opens.indexOf(view_name) >= 0;
	}

	public getView(view_name) {
		return this._views[view_name];
	}

	public getViewKey(view) {
		for (var view_name in this._views) {
			if (this._views[view_name] == view) {
				return parseInt(view_name);
			}
		}
		return 0;
	}

	public getCurrentViewKey() {
		return this._viewKey;
	}

	public setCurrentViewKey(view_name) {
		this._viewKey = view_name;
	}

	public getViewByKey(view_name) {
		return this._views[view_name];
	}

	public changeView(view_name) {

	}

	public closeAll() {

	}
}