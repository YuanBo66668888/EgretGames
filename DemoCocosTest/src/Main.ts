//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends UY.BaseScene {
    
    private main_objects: Array<any>;
    private main_flags: Array<any>;
    
    private mine_money: number;
    private emeny_money: number;
    
    public game_over: boolean;
    
    
    // private webSocket: egret.WebSocket;
    // 队伍数组
    private teams: Array<any>;
    //
    public get_team():Array<any> {
        return this.teams;
    }
    
    //
    public set_team(arr_new:Array<any>) {
        var n = this.teams.length;
        for(var i = 0; i < n; i++) {
            this.teams.pop();
        }
        for(var i = 0;i < arr_new.length; i++) {
            this.teams.push(arr_new.pop());
        }
    }
    
    public constructor() {
        super();
        UY.SceneManager.getInstance().setScene(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onEnter,this);
    }

    // 初始化
    public init(): boolean {
        UY.StageManager.getInstance().setStage(this.stage);
        this.stage.addChild(this.container);
        this.main_flags = new Array<any>();
        this.teams = new Array<any>();
        this.main_flags["Updated"] = false;
        this.game_over = false;
        return true;
    }
    
    private createEnemy(name:string) {
        
        var hero: UY.HeroRole = UY.HeroRole.create(name);
        var armatureDisplay = hero.getNode();
        UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
        
        armatureDisplay.x = Math.random() * 100 + 2340;
        armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
        (<egret.ScrollView>this.main_objects["content"]).addChild(armatureDisplay);
        UY.TierManager.getInstance().dealWithPosition();
        hero.setType(UY.ROLE_TYPE.EMENY);
        hero.move();
        armatureDisplay.scaleX = 1;
        this.teams.push(hero);
        hero.blood_bar.setFlipX(false);
    }
    
    private menu_click() {
        var main = <Main>(UY.SceneManager.getInstance().getScene());
    }
    
    private getMineHero(id):any {
        console.log(id);
        var ret: any;
        ret = false;
        for(var i = 0;i < this.teams.length; i++) {
            var h = this.teams[i];
            if (h.getType() == UY.ROLE_TYPE.MINE) {
                console.log(h.curr_id)
                if (h.curr_id == "role_300" + id) {
                    ret = h;
                }
            }
        }
        return ret;
    }
    
    // 
    private clickButton(e:egret.TouchEvent) {
        
        var curr_hero: egret.Bitmap = <egret.Bitmap>e.currentTarget;
        var hero_button: UY.HeroButton = this.main_objects["hero" + curr_hero.name];
        var unit_controller: UY.Unit = UY.Unit.getInstance().getType(UY.HeroRole.units["role_300" + curr_hero.name]);
        
        switch(hero_button.current_status) {
            case UY.HButtonStatus.DISABLE: {
                // TODO
                console.log("DISABLED");
                break;
            }
            case UY.HButtonStatus.UNCALL: {
                // TODO
                var hero:UY.HeroRole = unit_controller.createHero();
                
                if (unit_controller.createEnemyHero) {
                    var e_hero: UY.HeroRole = unit_controller.createEnemyHero();
                    (<egret.ScrollView>this.main_objects["content"]).addChild(e_hero.getNode());
                    this.teams.push(e_hero);
                    this.emeny_money = this.emeny_money - unit_controller.getMoney();
                }
                
                (<egret.ScrollView>this.main_objects["content"]).addChild(hero.getNode());
                this.teams.push(hero);
                this.mine_money = this.mine_money - unit_controller.getMoney();
                hero_button.changeCalled();
                
                break;
            }
            case UY.HButtonStatus.CALLED: {
                // 已召唤
                
                break;
            }
            case UY.HButtonStatus.SKILLING: {
                break;
            }
            case UY.HButtonStatus.SKILLED: {
                // TODO
                this.mine_money = this.mine_money - unit_controller.getSkillMoney();
                // 释放
                var h = this.getMineHero(curr_hero.name);
                if (h) {
                    h = <UY.HeroRole>h;
                    
                }
                break;
            }
            case UY.HButtonStatus.DEAD: {
                break;
            }
            case UY.HButtonStatus.RESURRECT: {
                break;
            }
        }
    }
    
    // 
    private finished(e:egret.MovieClipEvent) {
        var mc = <egret.MovieClip>e.currentTarget;
        mc.removeEventListener(egret.MovieClipEvent.COMPLETE,this.finished,this);
        mc.parent.removeChild(mc);
    }
    
    private click_test(e:egret.TouchEvent) {
        
        var o:eui.CheckBox = <eui.CheckBox>e.currentTarget;
        console.log(o.selected);
        
    }
    
    private onComplete(e:egret.Event) {
        console.log((<egret.URLLoader><any>this).data);
    }
    
    private onSocketOpen(): void {
        var cmd = "Hello Egret WebSocket";
        console.log("连接成功，发送数据：" + cmd);
        // this.webSocket.writeUTF("+++");
    }
    
    private onReceiveMessage(e: egret.Event): void {
        // var msg = this.webSocket.readUTF();
        // console.log("收到数据：" + msg);
    }
    
    // 主界面
    private create_main_scene() {
        
        this.stage.registerImplementation("eui.IAssetAdapter", new UY.AssetAdapter());
        var button = new eui.Button();
        button.skinName = "resource/assets/eui_skins/ButtonSkin.exml"
        this.container.addChild(button)
        button.visible = false
        button.enabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_test,this);
        
        var check = new eui.CheckBox();
        check.skinName = "resource/assets/eui_skins/CheckBoxSkin.exml";
        this.container.addChild(check);
        check.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_test,this);
        check.visible = false;
        
        /*var list = new eui.List();
        var exml = `
        <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="50"> <e:Image height="20" width="20" x="21" y="17" source="{data}"></e:Image> </e:Skin>`;
        list.dataProvider = new eui.ArrayCollection(["button_off_png","button_off_png","button_off_png"]);
        list.itemRendererSkinName = exml;
        this.container.addChild(list);*/
        
        // var urlloader: egret.URLLoader = new egret.URLLoader();
        // var urlreq: egret.URLRequest = new egret.URLRequest();
        // urlreq.url = 'http://ebooks.ukids.cn/Tom/';
        // urlloader.load(urlreq);
        // urlloader.addEventListener(egret.Event.COMPLETE,this.onComplete,urlloader);
        
        // this.webSocket = new egret.WebSocket();
        // this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage,this);
        // this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen,this);
        // this.webSocket.connect("echo.websocket.org",80);
    } 
    
    // 进入主页面
    private mainScene() {
       
        egret.Tween.get(this.container).wait(250).to({ alpha: 0 },150).call(() => {
            this.container.removeChildren();
            this.create_main_scene();
        }).wait(10).to({ alpha: 1 },150);
    }
    
    /**
     * 主加载
     */ 
    private finish_main(e: RES.ResourceEvent) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.finish_main,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.process_main,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.error_main,this);
        
        this.mainScene();
    }
     
    private process_main(e: RES.ResourceEvent) {
        console.log(e.itemsTotal + "  / " + e.itemsLoaded);
        var mask: egret.Bitmap = <egret.Bitmap>this.container.getChildByName("mask");
        mask.x = -466 + (e.itemsLoaded / e.itemsTotal) * 640;
        
        
    }
    
    private error_main(e: RES.ResourceEvent) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.finish_main,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.process_main,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.error_main,this);
    }
    
    /**
     * 初始加载
     */ 
    private finish_start() {
        
        var imageManager: UY.ImageManager = <UY.ImageManager>UY.ImageManager.getInstance();
        var load_bar: egret.Bitmap = imageManager.createWithSpriteFrameName("load_bar")
        this.container.addChildAt(load_bar,3);
        load_bar.x = 175;
        load_bar.y = 290;

        var loading_mc: egret.Bitmap = imageManager.createWithSpriteFrameName("loading_mc")
        loading_mc.name = "mask";
        this.container.addChildAt(loading_mc,2);
        loading_mc.x = -465;    // 175 
        loading_mc.y = 220;
        load_bar.mask = loading_mc;
        
        var resManager: UY.ResManager = <UY.ResManager>UY.ResManager.getInstance();
        resManager.loadFile("main_load", this.finish_main, this.process_main, this.error_main);
        
        
    }
    
    private process_start(e: RES.ResourceEvent) {
        console.log(e.itemsTotal + "  / " + e.itemsLoaded);
    }
    
    private error_start(e: RES.ResourceEvent) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.finish_start,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.process_start,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.error_start,this);
    }
    
    // 加载Loading
    private LoadingStart(e: RES.ResourceEvent): void {
        
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.LoadingStart,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.process_start,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.error_start,this);
        
        // 添加背景
        var imageManager: UY.ImageManager = <UY.ImageManager>UY.ImageManager.getInstance();
        var loading_bg: egret.Bitmap = imageManager.createWithSpriteFrameName("loading_bg");
        loading_bg.x = 0;
        loading_bg.y = 0;
        this.container.addChildAt(loading_bg, 1);
        
        var load_bar_bg: egret.Bitmap = imageManager.createWithSpriteFrameName("load_bar_bg");
        load_bar_bg.x = 175;
        load_bar_bg.y = 290;
        this.container.addChildAt(load_bar_bg, 2);
        
        var loading_fnt1: egret.Bitmap = imageManager.createWithSpriteFrameName("loading_fnt1");
        loading_fnt1.x = 440;
        loading_fnt1.y = 340;
        this.container.addChildAt(loading_fnt1,3);
        
        this.finish_start();
    }
    
    // 资源管理
    private res(): void {
        var resManager: UY.ResManager = <UY.ResManager>UY.ResManager.getInstance();
        resManager.loadConfig("default.res.json");
        resManager.loadFile("preload",this.LoadingStart,this.process_start,this.error_start);
    }
    
    public onEnter(): boolean {
        
        // 初始化
        this.init();
        // 资源管理
        this.res(); 
        
        /*var data: Array<number> = new Array<number>();
        data.push(100);
        data.push(200);
        data.push(300);
        data = null;*/
        // console.log(data);
        
        return true;
    }
    
    public update(): void {
        
        // UY.BaseObject.dt
        if(this.main_flags["Updated"]) {
            if (this.mine_money < 1000) {
                this.mine_money = this.mine_money + 1;
                
            }
            if(this.mine_money <= 1000) {
                var opt:UY.Font = <UY.Font>this.main_objects["curr_number"];
                opt.changeFont(this.mine_money);
            }
            if (this.emeny_money < 1000) {
                this.emeny_money = this.emeny_money + 1;
            }
            
            
            this.main_objects["timer_bar_mask"].x = -531 + 685 * this.mine_money / 1000;   // 154
            
            // 检查
            for(var i = 1;i <= 5; i++) {
                var icon = <UY.HeroButton>this.main_objects["hero" + i];
                var unit_controller: UY.Unit = UY.Unit.getInstance().getType(UY.HeroRole.units["role_300" + i]);
                switch(icon.current_status) {
                    case UY.HButtonStatus.DISABLE: {
                        if(unit_controller.getMoney() <= this.mine_money) {
                            icon.changeUncall();
                        }
                        break;
                    }
                    case UY.HButtonStatus.UNCALL: {
                        if(unit_controller.getMoney() > this.mine_money) {
                            icon.changeDisabled();
                        }
                        break;
                    }
                    case UY.HButtonStatus.CALLED: {
                        icon.changeSkilling();
                        break;
                    }
                    case UY.HButtonStatus.SKILLING: {
                        if(unit_controller.getSkillMoney() <= this.mine_money) {
                            icon.changeSkilled();
                        }
                        break;
                    }
                    case UY.HButtonStatus.SKILLED: {
                        if(unit_controller.getSkillMoney() > this.mine_money) {
                            icon.changeSkilling();
                        }
                        break;
                    }
                    case UY.HButtonStatus.DEAD: {
                        
                        break;
                    }
                    case UY.HButtonStatus.RESURRECT: {
                        break;
                    }
                }
            }
        }
    }
    
}


