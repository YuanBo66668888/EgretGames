class App {

	public static isApp = false;
	public static isLogOpen = true;
	public static pfuid = "";
	public static ProxyUserFlag = "";
	public static soundopen = true;
	public static GlobalData = null;
	public static ProtoFile = null;
	public static ProtoConfig = null;
	public static language = "chinese";

	private _notice = null;
	private _notice_title = null;


	public constructor() {
	}

	// 组件
	public static Http:Http = Http.getInstance();	
	public static Socket:Socket = Socket.getInstance();
	public static ControllerManager:ControllerManager = ControllerManager.getInstance();
	public static ViewManager:ViewManager = ViewManager.getInstance();
	public static SceneManager:SceneManager = SceneManager.getInstance();
	public static UserInfo:UserInfo = UserInfo.getInstance();
	public static GameConfig:GameConfig = GameConfig.getInstance();
	public static Lan:Lan = Lan.getInstance();
	public static DebugUtils:DebugUtils = DebugUtils.getInstance();
	public static TimerManager:TimerManager = TimerManager.getInstance();
	public static DateUtils:DateUtils = DateUtils.getInstance();
	public static MessageCenter:MessageCenter = MessageCenter.getInstance();
	public static MathUtils:MathUtils = MathUtils.getInstance();
	public static RandomUtils:RandomUtils = RandomUtils.getInstance();
	public static DisplayUtils:DisplayUtils = DisplayUtils.getInstance();
	public static BitmapNumber:BitmapNumber = BitmapNumber.getInstance();
	public static GuideManager:GuideManager = GuideManager.getInstance();
	public static StageUtils:StageUtils = StageUtils.getInstance();
	public static EffectUtils:EffectUtils = EffectUtils.getInstance();
	public static StringUtils:StringUtils = StringUtils.getInstance();
	public static CommonUtils:CommonUtils = CommonUtils.getInstance();
	public static SoundManager:SoundManager = SoundManager.getInstance();
	public static DeviceUtils:DeviceUtils = DeviceUtils.getInstance();
	public static EgretExpandUtils:EgretExpandUtils = EgretExpandUtils.getInstance();
	public static KeyboardUtils:KeyboardUtils = KeyboardUtils.getInstance();
	public static RockerUtils:RockerUtils = RockerUtils.getInstance();
	public static ShockUtils:ShockUtils = ShockUtils.getInstance();
	public static ResourceUtils:ResourceUtils = ResourceUtils.getInstance();
	public static RenderTextureManager:RenderTextureManager = RenderTextureManager.getInstance();
	public static ResVersionManager:ResVersionManager = ResVersionManager.getInstance();
	public static UnionDataManager:UnionDataManager = UnionDataManager.getInstance();
	public static Ws:Ws = Ws.getInstance();
	public static ChatManager:ChatManager = ChatManager.getInstance();
	public static RandomEventManager:RandomEventManager = RandomEventManager.getInstance();
	public static TaskManager:TaskManager = TaskManager.getInstance();
	public static ActManager:ActManager = ActManager.getInstance();
	public static ActivityManager:ActivityManager = ActivityManager.getInstance();
	public static NetMsgManager:NetMsgManager = NetMsgManager.getInstance();
	public static BagManager:BagManager = BagManager.getInstance();
	public static SDKSetAGameManager:SDKSetAGameManager = SDKSetAGameManager.getInstance();
	public static ArrayUtils:ArrayUtils = ArrayUtils.getInstance();

	public Init() {
		var default_config = null;
		if (default_config == null) {
			App.GlobalData = RES.getRes("global_json");
			App.language = App.GlobalData.language;
		} else {
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
	}
}