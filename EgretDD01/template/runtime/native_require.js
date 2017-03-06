
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/dragonBones/dragonBones.js",
	"libs/modules/eui/eui.js",
	"polyfill/promise.js",
	"bin-debug/Base/BaseClass.js",
	"bin-debug/Manager/SceneManager.js",
	"bin-debug/Common/BitmapNumber.js",
	"bin-debug/Common/GameConfig.js",
	"bin-debug/Common/Http.js",
	"bin-debug/Common/Lan.js",
	"bin-debug/Common/MessageCenter.js",
	"bin-debug/Common/Socket.js",
	"bin-debug/Common/UserInfo.js",
	"bin-debug/Common/UTFMsg.js",
	"bin-debug/Common/Ws.js",
	"bin-debug/Utils/StringUtils.js",
	"bin-debug/Manager/ActivityManager.js",
	"bin-debug/Manager/ActManager.js",
	"bin-debug/Manager/BagManager.js",
	"bin-debug/Manager/ChatManager.js",
	"bin-debug/Manager/ControllerManager.js",
	"bin-debug/Manager/GuideManager.js",
	"bin-debug/Manager/NetMsgManager.js",
	"bin-debug/Manager/RandomEventManager.js",
	"bin-debug/Manager/RenderTextureManager.js",
	"bin-debug/Manager/ResVersionManager.js",
	"bin-debug/Base/BaseController.js",
	"bin-debug/Manager/SDKSetAGameManager.js",
	"bin-debug/Manager/SoundManager.js",
	"bin-debug/Manager/TaskManager.js",
	"bin-debug/Manager/TimerManager.js",
	"bin-debug/Manager/UnionDataManager.js",
	"bin-debug/Manager/ViewManager.js",
	"bin-debug/Utils/ArrayUtils.js",
	"bin-debug/Utils/CommonUtils.js",
	"bin-debug/Utils/DateUtils.js",
	"bin-debug/Utils/DebugUtils.js",
	"bin-debug/Utils/DeviceUtils.js",
	"bin-debug/Utils/DisplayUtils.js",
	"bin-debug/Utils/EffectUtils.js",
	"bin-debug/Utils/EgretExpandUtils.js",
	"bin-debug/Utils/KeyboardUtils.js",
	"bin-debug/Utils/MathUtils.js",
	"bin-debug/Utils/RandomUtils.js",
	"bin-debug/Utils/ResourceUtils.js",
	"bin-debug/Utils/RockerUtils.js",
	"bin-debug/Utils/ShockUtils.js",
	"bin-debug/Utils/StageUtils.js",
	"bin-debug/Const/LoginConst.js",
	"bin-debug/Const/MainConst.js",
	"bin-debug/Const/MatConst.js",
	"bin-debug/Const/NationConsts.js",
	"bin-debug/Const/NumberStringConst.js",
	"bin-debug/Const/PanelConst.js",
	"bin-debug/Const/SceneConsts.js",
	"bin-debug/Const/ViewConst.js",
	"bin-debug/Controller/BuildController.js",
	"bin-debug/Controller/BulletScreenController.js",
	"bin-debug/Controller/FightController.js",
	"bin-debug/Common/DH.js",
	"bin-debug/Controller/GuideController.js",
	"bin-debug/Controller/HomeController.js",
	"bin-debug/Controller/JehadController.js",
	"bin-debug/Controller/LoadingController.js",
	"bin-debug/Controller/LoginController.js",
	"bin-debug/Controller/MainController.js",
	"bin-debug/GameMain.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/Common/DynamicChange.js",
	"bin-debug/Base/BaseGuiLayer.js",
	"bin-debug/Common/GameNote.js",
	"bin-debug/Common/HotspotBitmap.js",
	"bin-debug/Base/BaseProxy.js",
	"bin-debug/Common/Keyboard.js",
	"bin-debug/Manager/LanManager.js",
	"bin-debug/Manager/LayerManager.js",
	"bin-debug/Manager/MailManager.js",
	"bin-debug/Manager/MatManager.js",
	"bin-debug/Base/BaseScene.js",
	"bin-debug/Manager/PanelManager.js",
	"bin-debug/Common/Log.js",
	"bin-debug/Common/Login.js",
	"bin-debug/Manager/ReportManager.js",
	"bin-debug/Common/md5.js",
	"bin-debug/Common/AssetAdapter.js",
	"bin-debug/Common/MessageVo.js",
	"bin-debug/Common/ObjectLabel.js",
	"bin-debug/Common/ObjectPool.js",
	"bin-debug/Common/Percent.js",
	"bin-debug/Common/ProxyUpdate.js",
	"bin-debug/Common/QueueExecutor.js",
	"bin-debug/Manager/WarManager.js",
	"bin-debug/Scene/LoadingScene.js",
	"bin-debug/Scene/UIScene.js",
	"bin-debug/Showcase.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/Utils/AnchorUtils.js",
	"bin-debug/App.js",
	"bin-debug/Utils/AverageUtils.js",
	"bin-debug/Common/TimerHandler.js",
	"bin-debug/Common/BuildTimer.js",
	"bin-debug/Common/ByteArrayMsg.js",
	"bin-debug/Common/UTFMsgByJson.js",
	"bin-debug/Common/CallBackFunctions.js",
	"bin-debug/Const/ArmyConst.js",
	"bin-debug/Const/BulletScreenConst.js",
	"bin-debug/Const/ControllerConst.js",
	"bin-debug/Const/FightConst.js",
	"bin-debug/Const/GuideConst.js",
	"bin-debug/Const/HomeConst.js",
	"bin-debug/Const/HttpConst.js",
	"bin-debug/Const/JehadConst.js",
	"bin-debug/Const/LoadingConst.js",
	"bin-debug/Controller/GiftController.js",
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
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
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
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};