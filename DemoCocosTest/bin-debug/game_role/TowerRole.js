var UY;
(function (UY) {
    /**
     *
     * @Tom
     *
     */
    var TowerRole = (function (_super) {
        __extends(TowerRole, _super);
        function TowerRole(id) {
            _super.call(this);
            if (!TowerRole.units) {
                TowerRole.units = new Array();
                TowerRole.units["role_2001"] = "BlueTower";
                TowerRole.units["role_2002"] = "RedTower";
            }
            this.init(id);
        }
        var d = __define,c=TowerRole,p=c.prototype;
        // create
        TowerRole.create = function (id) {
            return new TowerRole(id);
        };
        //
        p.event_start = function (e) {
        };
        // 
        p.event_ended = function (e) {
            var tower = this;
            var name = tower.object.animation.lastAnimationName;
            switch (name) {
                case "death": {
                    this.object.removeEventListener(dragonBones.AnimationEvent.START, this.event_start, this);
                    this.object.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.event_ended, this);
                    this.object.removeEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frame_event, this);
                    this.unit_controller.died(tower);
                    // 处理队列
                    var main = UY.SceneManager.getInstance().getScene();
                    UY.ArrayController.deleteFromArray(main.get_team(), tower);
                }
            }
        };
        //
        p.frame_event = function (e) {
            var event_name = e.frameLabel;
            var tower = this;
            switch (event_name) {
            }
        };
        //
        // 初始化
        p.init = function (id) {
            this.unit_controller = UY.Unit.getInstance().getType(TowerRole.units[id]);
            this.object = UY.DBManager.getInstance().createDBArmature(id);
            // 设置血条
            this.blood_bar = UY.Bar.create("texture01.enemy_base_blood", "texture01.enemy_base_blood_bg", 0, 2);
            this.blood_bar.x = -50;
            this.blood_bar.y = -150;
            this.object.getDisplay().addChild(this.blood_bar);
            this.object.addEventListener(dragonBones.AnimationEvent.START, this.event_start, this);
            this.object.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.event_ended, this);
            this.object.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frame_event, this);
            this.start_update();
            // 设置血量
            this.curr_blood = this.unit_controller.getTotalBlood();
        };
        // 
        p.getArm = function () {
            return this.object;
        };
        // 
        p.getNode = function () {
            return this.object.getDisplay();
        };
        p.play = function (name, n) {
            this.object.animation.gotoAndPlay(name, 0, n, 0);
        };
        // 死亡
        p.died = function () {
            if (this.status != 5 /* DEAD */) {
                this.status = 5 /* DEAD */;
                this.object.animation.gotoAndPlay("death");
                var t = egret.Tween.get(this);
                t.pause();
                console.log("Died");
            }
        };
        p.reduceBlood = function (num) {
            var ret = false;
            if (this.status != 5 /* DEAD */) {
                this.curr_blood = this.curr_blood - num;
                if (this.curr_blood > 0) {
                    this.blood_bar.setPercent(this.curr_blood / this.unit_controller.getTotalBlood());
                }
                else {
                    this.curr_blood = 0;
                    this.blood_bar.setPercent(0.0);
                    // DIED
                    this.died();
                    ret = true;
                }
            }
            return ret;
        };
        p.setType = function (type) {
            this.type = type;
        };
        p.getType = function () {
            return this.type;
        };
        p.update = function () {
        };
        return TowerRole;
    }(UY.BaseRole));
    UY.TowerRole = TowerRole;
    egret.registerClass(TowerRole,'UY.TowerRole');
})(UY || (UY = {}));
//# sourceMappingURL=TowerRole.js.map