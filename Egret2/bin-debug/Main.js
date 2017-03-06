//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
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
        this.bottom = 416; //对齐线的位置
        this.objs = new Array(); //数组保存障碍物
        this.GameOver = false;
        this.Xsleep = 0;
        this.Ysleep = 0;
        this.Zsleep = 0.98; //下落速度
        this.Tyshu = 0; //跳跃次数
        this.Gstart = false;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.init();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
    * 游戏初始化
    */
    p.init = function () {
        //添加背景
        for (var i = 0; i < 4; i++) {
            this.bg = this.createBitmapByName("tile_bg");
            this.addChild(this.bg);
            this.bg.x = this.bg.width * i;
        }
        //添加终点线
        this.finish = this.createBitmapByName("finish");
        this.addChild(this.finish); //添加对象到舞台；
        this.finish.x = 1000;
        this.finish.y = this.bottom - this.finish.height;
        //添加障碍物
        for (var j = 1; j < 4; j++) {
            var object = this.createBitmapByName("object_0" + j);
            this.addChild(object);
            object.x = 150 + 200 * j;
            object.y = this.bottom - object.height;
            this.objs.push(object);
        }
        //-------------------添加游戏开始指示图
        this.GstatrTip = this.createBitmapByName("tapToStart");
        this.addChild(this.GstatrTip); //添加对象到舞台；
        this.GstatrTip.x = 230;
        this.GstatrTip.y = this.bottom - this.GstatrTip.height - 50;
        //--------------------点击跳动提示
        this.GupTip = this.createBitmapByName("tapToJump");
        this.addChild(this.GupTip); //添加对象到舞台；
        this.GupTip.x = 230;
        this.GupTip.y = this.bottom - this.GupTip.height;
        this.GupTip.visible = false;
        //添加主角
        this.boy = this.createBitmapByName("green_boy");
        this.addChild(this.boy); //添加对象到舞台；
        this.boy.x = 200;
        this.boy.y = this.bottom - this.boy.height;
        //监听事件
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TouchBegin, this);
        this.touchEnabled = true; //启用鼠标或者按键响应
        //-----------------------------加载背景音乐
        this.startLoad();
    };
    p.onEnterFrame = function (Event) {
        if (!this.Gstart || this.GameOver) {
            return;
        }
        this.GupTip.x = this.boy.x + 50;
        this.Ysleep += this.Zsleep;
        this.boy.x += this.Xsleep;
        this.boy.y += this.Ysleep;
        //落地后恢复初始数据
        if (this.boy.y >= this.bottom - this.boy.height) {
            this.boy.y = this.bottom - this.boy.height;
            this.Ysleep = 0;
            this.Tyshu = 0;
        }
        this.testobjecs(); //碰撞检测调用
    };
    //--------------触摸按下事件事件
    p.TouchBegin = function (Event) {
        if (!this.Gstart) {
            this.Gstart = true;
            this.Xsleep = 2;
            this.GstatrTip.visible = false;
            this.GupTip.visible = true;
        }
        else {
            if (this.Tyshu < 2) {
                this.GupTip.visible = false;
                this.Ysleep = -14;
                this.Tyshu++;
            }
        }
        if (this.GameOver) {
            this.GameOver = false;
            this.GstatrTip.visible = true;
            this.GupTip.visible = false;
            this.boy.x = 200;
            this.boy.y = this.bottom - this.boy.height;
            return;
        }
    };
    p.testobjecs = function () {
        for (var i = 0; i < this.objs.length; i++) {
            var objec = this.objs[i];
            if (this.testboy(objec)) {
                alert("你屎了,点击鼠标重新开始");
                this.GameOver = true;
            }
        }
    };
    //检测碰撞
    p.testboy = function (obj) {
        return obj.hitTestPoint(this.boy.x + this.boy.width * 0.5, this.boy.y + this.boy.height * 0.5);
    };
    //添加背景音乐
    p.startLoad = function () {
        //创建 Sound 对象
        var sound = new egret.Sound();
        var url = "resource/assets/bg.mp3";
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    };
    p.onLoadComplete = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        var channel = sound.play(0, 0);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    };
    p.onSoundComplete = function (event) {
        egret.log("onSoundComplete");
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map