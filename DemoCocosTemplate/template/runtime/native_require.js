
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/dragonBones/dragonBones.js",
	"bin-debug/framework/core/BaseObject.js",
	"bin-debug/framework/core/BaseScene.js",
	"bin-debug/Main.js",
	"bin-debug/framework/component/ui/Bar.js",
	"bin-debug/framework/component/ui/Button.js",
	"bin-debug/framework/component/ui/Font.js",
	"bin-debug/framework/config/Const.js",
	"bin-debug/framework/core/Adapter.js",
	"bin-debug/framework/core/AssetAdapter.js",
	"bin-debug/framework/core/BaseRole.js",
	"bin-debug/framework/core/MathLib.js",
	"bin-debug/framework/core/Tool.js",
	"bin-debug/framework/data/ArrayController.js",
	"bin-debug/framework/manager/DBManager.js",
	"bin-debug/framework/manager/DataManager.js",
	"bin-debug/framework/manager/ImageManager.js",
	"bin-debug/framework/manager/ResManager.js",
	"bin-debug/framework/manager/SceneManager.js",
	"bin-debug/framework/manager/StageManager.js",
	"bin-debug/framework/manager/TierManager.js",
	"bin-debug/framework/module/Animate.js",
	"bin-debug/framework/module/Particle.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};