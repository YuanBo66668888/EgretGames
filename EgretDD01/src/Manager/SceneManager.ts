// 场景管理器
class SceneManager extends BaseClass {
	
	private _scenes:Object;
	private _scenesStack:Array<string>;

	private _currScene:string;

	public constructor() {
		super();
	}

	//
	public register(name, scene:BaseScene) {
		this._scenes[name] = scene;
	}

	//
	public runScene(name) {
		var scene:BaseScene = this._scenes[name];
		if (scene == null) {
			Log.trace("场景 " + name + " 不存在");
		}

		while (this._scenesStack.length > 0) {
			var popScene:BaseScene = this._scenes[this._scenesStack.pop()];
			popScene.onExit();
		}

		var curr_scene:BaseScene = this._scenes[this._currScene];
		if (curr_scene) {
			curr_scene.onExit();
		}
		scene.onEnter();
		this._currScene = name;
	}

	//
	public pushScene(name) {
		var scene:BaseScene = this._scenes[name];
		if (scene == null) {
			Log.trace("场景" + name + "不存在!!");
		} else {
			scene.onEnter();
			this._scenesStack.push(name);
		}
	}

	//
	public popScene() {
		if (this._scenesStack.length != 0) {
			var scene_name = this._scenesStack.pop();
			var scene:BaseScene = this._scenes[scene_name];
			scene.onExit();
		}
	}
}