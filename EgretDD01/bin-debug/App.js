var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
        this._notice = null;
        this._notice_title = null;
    }
    App.prototype.Init = function () {
        var default_config = null;
        if (default_config == null) {
            App.GlobalData = RES.getRes("global_json");
            App.language = App.GlobalData.language;
        }
        else {
            App.GlobalData = default_config;
            if (default_config != null && typeof default_config != "undefined") {
                App.language = App.GlobalData.language;
            }
        }
        App.DebugUtils.isOpen(App.GlobalData.IsDebug);
        App.EgretExpandUtils.init();
        App.Http.initServer(App.GlobalData.HttpSerever);
        App.ProtoFile = dcodeIO.ProtoBuf.loadProto(RES.getRes(App.GlobalData.ProtoFile));
        App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
        MailManager.getInstance();
    };
    return App;
}());
App.isApp = false;
App.isLogOpen = true;
App.pfuid = "";
App.ProxyUserFlag = "";
App.soundopen = true;
App.GlobalData = null;
App.ProtoFile = null;
App.ProtoConfig = null;
App.language = "chinese";
// 组件
App.Http = Http.getInstance();
App.Socket = Socket.getInstance();
App.ControllerManager = ControllerManager.getInstance();
App.ViewManager = ViewManager.getInstance();
App.SceneManager = SceneManager.getInstance();
App.UserInfo = UserInfo.getInstance();
App.GameConfig = GameConfig.getInstance();
App.Lan = Lan.getInstance();
App.DebugUtils = DebugUtils.getInstance();
App.TimerManager = TimerManager.getInstance();
App.DateUtils = DateUtils.getInstance();
App.MessageCenter = MessageCenter.getInstance();
App.MathUtils = MathUtils.getInstance();
App.RandomUtils = RandomUtils.getInstance();
App.DisplayUtils = DisplayUtils.getInstance();
App.BitmapNumber = BitmapNumber.getInstance();
App.GuideManager = GuideManager.getInstance();
App.StageUtils = StageUtils.getInstance();
App.EffectUtils = EffectUtils.getInstance();
App.StringUtils = StringUtils.getInstance();
App.CommonUtils = CommonUtils.getInstance();
App.SoundManager = SoundManager.getInstance();
App.DeviceUtils = DeviceUtils.getInstance();
App.EgretExpandUtils = EgretExpandUtils.getInstance();
App.KeyboardUtils = KeyboardUtils.getInstance();
App.RockerUtils = RockerUtils.getInstance();
App.ShockUtils = ShockUtils.getInstance();
App.ResourceUtils = ResourceUtils.getInstance();
App.RenderTextureManager = RenderTextureManager.getInstance();
App.ResVersionManager = ResVersionManager.getInstance();
App.UnionDataManager = UnionDataManager.getInstance();
App.Ws = Ws.getInstance();
App.ChatManager = ChatManager.getInstance();
App.RandomEventManager = RandomEventManager.getInstance();
App.TaskManager = TaskManager.getInstance();
App.ActManager = ActManager.getInstance();
App.ActivityManager = ActivityManager.getInstance();
App.NetMsgManager = NetMsgManager.getInstance();
App.BagManager = BagManager.getInstance();
App.SDKSetAGameManager = SDKSetAGameManager.getInstance();
App.ArrayUtils = ArrayUtils.getInstance();
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map