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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        UY.SceneManager.getInstance().setScene(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
    }
    var d = __define,c=Main,p=c.prototype;
    //
    p.get_team = function () {
        return this.teams;
    };
    //
    p.set_team = function (arr_new) {
        var n = this.teams.length;
        for (var i = 0; i < n; i++) {
            this.teams.pop();
        }
        for (var i = 0; i < arr_new.length; i++) {
            this.teams.push(arr_new.pop());
        }
    };
    // 初始化
    p.init = function () {
        UY.StageManager.getInstance().setStage(this.stage);
        this.stage.addChild(this.container);
        this.main_flags = new Array();
        this.teams = new Array();
        this.main_flags["Updated"] = false;
        this.game_over = false;
        return true;
    };
    p.createEnemy = function (name) {
        var hero = UY.HeroRole.create(name);
        var armatureDisplay = hero.getNode();
        UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
        armatureDisplay.x = Math.random() * 100 + 2340;
        armatureDisplay.y = hero.unit_controller.getPosMinY() + Math.random() * (hero.unit_controller.getPosMaxY() - hero.unit_controller.getPosMinY());
        this.main_objects["content"].addChild(armatureDisplay);
        UY.TierManager.getInstance().dealWithPosition();
        hero.setType(1 /* EMENY */);
        hero.move();
        armatureDisplay.scaleX = 1;
        this.teams.push(hero);
        hero.blood_bar.setFlipX(false);
    };
    p.menu_click = function () {
        var main = (UY.SceneManager.getInstance().getScene());
    };
    p.getMineHero = function (id) {
        console.log(id);
        var ret;
        ret = false;
        for (var i = 0; i < this.teams.length; i++) {
            var h = this.teams[i];
            if (h.getType() == 0 /* MINE */) {
                console.log(h.curr_id);
                if (h.curr_id == "role_300" + id) {
                    ret = h;
                }
            }
        }
        return ret;
    };
    // 
    p.clickButton = function (e) {
        var curr_hero = e.currentTarget;
        var hero_button = this.main_objects["hero" + curr_hero.name];
        var unit_controller = UY.Unit.getInstance().getType(UY.HeroRole.units["role_300" + curr_hero.name]);
        switch (hero_button.current_status) {
            case 0 /* DISABLE */: {
                // TODO
                console.log("DISABLED");
                break;
            }
            case 1 /* UNCALL */: {
                // TODO
                var hero = unit_controller.createHero();
                if (unit_controller.createEnemyHero) {
                    var e_hero = unit_controller.createEnemyHero();
                    this.main_objects["content"].addChild(e_hero.getNode());
                    this.teams.push(e_hero);
                    this.emeny_money = this.emeny_money - unit_controller.getMoney();
                }
                this.main_objects["content"].addChild(hero.getNode());
                this.teams.push(hero);
                this.mine_money = this.mine_money - unit_controller.getMoney();
                hero_button.changeCalled();
                break;
            }
            case 2 /* CALLED */: {
                // 已召唤
                break;
            }
            case 3 /* SKILLING */: {
                break;
            }
            case 4 /* SKILLED */: {
                // TODO
                this.mine_money = this.mine_money - unit_controller.getSkillMoney();
                // 释放
                var h = this.getMineHero(curr_hero.name);
                if (h) {
                    h = h;
                }
                break;
            }
            case 5 /* DEAD */: {
                break;
            }
            case 6 /* RESURRECT */: {
                break;
            }
        }
    };
    // 
    p.finished = function (e) {
        var mc = e.currentTarget;
        mc.removeEventListener(egret.MovieClipEvent.COMPLETE, this.finished, this);
        mc.parent.removeChild(mc);
    };
    p.click_test = function (e) {
        var o = e.currentTarget;
        console.log(o.selected);
    };
    p.onComplete = function (e) {
        console.log(this.data);
    };
    p.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("连接成功，发送数据：" + cmd);
        // this.webSocket.writeUTF("+++");
    };
    p.onReceiveMessage = function (e) {
        // var msg = this.webSocket.readUTF();
        // console.log("收到数据：" + msg);
    };
    // 主界面
    p.create_main_scene = function () {
        this.stage.registerImplementation("eui.IAssetAdapter", new UY.AssetAdapter());
        var button = new eui.Button();
        button.skinName = "resource/assets/eui_skins/ButtonSkin.exml";
        this.container.addChild(button);
        button.visible = false;
        button.enabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_test, this);
        var check = new eui.CheckBox();
        check.skinName = "resource/assets/eui_skins/CheckBoxSkin.exml";
        this.container.addChild(check);
        check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_test, this);
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
    };
    // 进入主页面
    p.mainScene = function () {
        var _this = this;
        egret.Tween.get(this.container).wait(250).to({ alpha: 0 }, 150).call(function () {
            _this.container.removeChildren();
            _this.create_main_scene();
        }).wait(10).to({ alpha: 1 }, 150);
    };
    /**
     * 主加载
     */
    p.finish_main = function (e) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.finish_main, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.process_main, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error_main, this);
        this.mainScene();
    };
    p.process_main = function (e) {
        console.log(e.itemsTotal + "  / " + e.itemsLoaded);
        var mask = this.container.getChildByName("mask");
        mask.x = -466 + (e.itemsLoaded / e.itemsTotal) * 640;
    };
    p.error_main = function (e) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.finish_main, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.process_main, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error_main, this);
    };
    /**
     * 初始加载
     */
    p.finish_start = function () {
        var imageManager = UY.ImageManager.getInstance();
        var load_bar = imageManager.createWithSpriteFrameName("load_bar");
        this.container.addChildAt(load_bar, 3);
        load_bar.x = 175;
        load_bar.y = 290;
        var loading_mc = imageManager.createWithSpriteFrameName("loading_mc");
        loading_mc.name = "mask";
        this.container.addChildAt(loading_mc, 2);
        loading_mc.x = -465; // 175 
        loading_mc.y = 220;
        load_bar.mask = loading_mc;
        var resManager = UY.ResManager.getInstance();
        resManager.loadFile("main_load", this.finish_main, this.process_main, this.error_main);
    };
    p.process_start = function (e) {
        console.log(e.itemsTotal + "  / " + e.itemsLoaded);
    };
    p.error_start = function (e) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.finish_start, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.process_start, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error_start, this);
    };
    // 加载Loading
    p.LoadingStart = function (e) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.LoadingStart, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.process_start, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error_start, this);
        // 添加背景
        var imageManager = UY.ImageManager.getInstance();
        var loading_bg = imageManager.createWithSpriteFrameName("loading_bg");
        loading_bg.x = 0;
        loading_bg.y = 0;
        this.container.addChildAt(loading_bg, 1);
        var load_bar_bg = imageManager.createWithSpriteFrameName("load_bar_bg");
        load_bar_bg.x = 175;
        load_bar_bg.y = 290;
        this.container.addChildAt(load_bar_bg, 2);
        var loading_fnt1 = imageManager.createWithSpriteFrameName("loading_fnt1");
        loading_fnt1.x = 440;
        loading_fnt1.y = 340;
        this.container.addChildAt(loading_fnt1, 3);
        this.finish_start();
    };
    // 资源管理
    p.res = function () {
        var resManager = UY.ResManager.getInstance();
        resManager.loadConfig("default.res.json");
        resManager.loadFile("preload", this.LoadingStart, this.process_start, this.error_start);
    };
    p.onEnter = function () {
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
    };
    p.update = function () {
        // UY.BaseObject.dt
        if (this.main_flags["Updated"]) {
            if (this.mine_money < 1000) {
                this.mine_money = this.mine_money + 1;
            }
            if (this.mine_money <= 1000) {
                var opt = this.main_objects["curr_number"];
                opt.changeFont(this.mine_money);
            }
            if (this.emeny_money < 1000) {
                this.emeny_money = this.emeny_money + 1;
            }
            this.main_objects["timer_bar_mask"].x = -531 + 685 * this.mine_money / 1000; // 154
            // 检查
            for (var i = 1; i <= 5; i++) {
                var icon = this.main_objects["hero" + i];
                var unit_controller = UY.Unit.getInstance().getType(UY.HeroRole.units["role_300" + i]);
                switch (icon.current_status) {
                    case 0 /* DISABLE */: {
                        if (unit_controller.getMoney() <= this.mine_money) {
                            icon.changeUncall();
                        }
                        break;
                    }
                    case 1 /* UNCALL */: {
                        if (unit_controller.getMoney() > this.mine_money) {
                            icon.changeDisabled();
                        }
                        break;
                    }
                    case 2 /* CALLED */: {
                        icon.changeSkilling();
                        break;
                    }
                    case 3 /* SKILLING */: {
                        if (unit_controller.getSkillMoney() <= this.mine_money) {
                            icon.changeSkilled();
                        }
                        break;
                    }
                    case 4 /* SKILLED */: {
                        if (unit_controller.getSkillMoney() > this.mine_money) {
                            icon.changeSkilling();
                        }
                        break;
                    }
                    case 5 /* DEAD */: {
                        break;
                    }
                    case 6 /* RESURRECT */: {
                        break;
                    }
                }
            }
        }
    };
    return Main;
}(UY.BaseScene));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map