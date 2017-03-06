class ControllerManager extends BaseClass {

	private _modules:Object;

	public constructor() {
		super();
		this._modules = {}
	}

	public register(module_name, module) {
		if (!this.isExists(module_name)) {
			this._modules[module_name] = module;
		}
	}

	public isExists(module_name) {
		return (this._modules[module_name] != null);
	}

	public unregister(module_name) {
		if (this.isExists(module_name)) {
			this._modules[module_name] = null;
			delete this._modules[module_name];
		}
	}

	public applyFunc(module_name, ...param) {
		var module = this._modules[module_name];
		if (module) {
			return module.applyFunc.apply(module, param);
		}
	}
}