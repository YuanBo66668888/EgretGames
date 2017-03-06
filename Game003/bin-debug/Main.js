/**
 * @author TomYuan
 */
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.config_file = "default.res.json";
        this.preload_file = "preload";
        this.container = null;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.mainLogic = function () {
        // 主逻辑
        console.log("StartGame");
        var img = EgretCocos.ImageManager.getInstance().createWithSpriteFrameName("exit_btn_on");
        this.stage.addChild(img);
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawRect(0, 0, 100, 200);
        shp.graphics.endFill();
        this.stage.addChild(shp);
    };
    p.load_finish = function (e) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.load_finish, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.load_process, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.load_error, this);
        this.mainLogic();
    };
    p.load_process = function (e) {
        console.log("Loaded Item...");
    };
    p.load_error = function (e) {
    };
    p.init = function () {
        var ret = false;
        this.container = new egret.DisplayObjectContainer();
        this.stage.addChild(this.container);
        EgretCocos.SceneManager.getInstance().setScene(this);
        EgretCocos.StageManager.getInstance().setStage(this.stage);
        // 加载资源
        var resManager = EgretCocos.ResManager.getInstance();
        resManager.loadConfig(this.config_file);
        resManager.loadFile(this.preload_file, this.load_finish, this.load_process, this.load_error);
        return ret;
    };
    p.onEnter = function () {
        var ret = false;
        if (this.init()) {
            ret = true;
        }
        return ret;
    };
    return Main;
}(EgretCocos.Scene));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map