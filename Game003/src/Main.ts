
/**
 * @author TomYuan
 */

class Main extends EgretCocos.Scene {
    
    private container: egret.DisplayObjectContainer;
    private preload_file: string;
    private config_file: string;
    public constructor() {
        super();
        this.config_file = "default.res.json";
        this.preload_file = "preload";
        this.container = null;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onEnter,this);
    }
    
    private mainLogic() {
        // 主逻辑
        console.log("StartGame");
        var img = EgretCocos.ImageManager.getInstance().createWithSpriteFrameName("exit_btn_on");
        this.stage.addChild(img); 
        
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawRect(0, 0, 100, 200);
        shp.graphics.endFill();
        
        this.stage.addChild(shp);
    }
    
    private load_finish(e: RES.ResourceEvent) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.load_finish,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.load_process,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.load_error,this);
        this.mainLogic();
    }
    
    private load_process(e: RES.ResourceEvent) {
        console.log("Loaded Item...");
    }
    
    private load_error(e: RES.ResourceEvent) {
           
    }
    
    protected init(): boolean {
        var ret: boolean = false;
        this.container = new egret.DisplayObjectContainer();
        this.stage.addChild(this.container);
        
        EgretCocos.SceneManager.getInstance().setScene(this);
        EgretCocos.StageManager.getInstance().setStage(this.stage);
        
        // 加载资源
        var resManager: EgretCocos.ResManager = EgretCocos.ResManager.getInstance();
        resManager.loadConfig(this.config_file);
        resManager.loadFile(
            this.preload_file,
            this.load_finish,
            this.load_process,
            this.load_error
        )
        return ret;
    }
    
    public onEnter() : boolean {
        var ret: boolean = false;
        if (this.init()) {
            ret = true;
        }
        return ret;
    }
}




