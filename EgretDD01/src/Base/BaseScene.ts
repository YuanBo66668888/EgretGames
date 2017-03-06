class BaseScene {
	
	private _layers:Array<any>;
	public constructor() {
		this._layers = new Array;
	}

	public onEnter() {

	}

	public onExit() {
		this.removeAllLayer();
	}

	public addLayer(layer) {
		if (layer instanceof BaseSpriteLayer) {
			App.StageUtils.getStage().addChild(layer);
			this._layers.push(layer);
		} else if (layer instanceof BaseGuiLayer) {
			// EUI
			App.StageUtils.getStage().addChild(layer);
			this._layers.push(layer);
		}
	}

	public addLayerAt(layer, number) {
		if (layer instanceof BaseSpriteLayer) {
			App.StageUtils.getStage().addChildAt(layer, number);
			this._layers.push(layer);
		} else if (layer instanceof BaseGuiLayer) {
			// EUI
			App.StageUtils.getStage().addChildAt(layer, number);
			this._layers.push(layer);
		}
	}

	public removeLayer(layer) {
		if (layer instanceof BaseSpriteLayer) {
			App.StageUtils.getStage().removeChild(layer);
			this._layers.splice(this._layers.indexOf(layer), 1);
		} else if (layer instanceof BaseGuiLayer) {
			App.StageUtils.getStage().removeChild(layer);
			this._layers.splice(this._layers.indexOf(layer), 1);
		}
	}

	public layerRemoveAllChild(layer) {
		if (layer instanceof BaseSpriteLayer) {
			layer.removeChildren();
		} else if (layer instanceof BaseGuiLayer) {
			layer.removeChildren();
		}
	}

	public removeAllLayer() {
		while (this._layers.length > 0) {
			var layer = this._layers[0];
		}
	}
}