var UY;
(function (UY) {
    ;
    ;
    ;
    /**
     *
     * @Tom
     *
     */
    var HeroRole = (function (_super) {
        __extends(HeroRole, _super);
        function HeroRole(id) {
            _super.call(this);
            if (!HeroRole.units) {
                HeroRole.units = new Array();
                HeroRole.units["role_3001"] = "Garen";
                HeroRole.units["role_3002"] = "Aich";
                HeroRole.units["role_3003"] = "Miss";
                HeroRole.units["role_3004"] = "Soraka";
                HeroRole.units["role_3005"] = "Karthus";
            }
            this.init(id);
        }
        var d = __define,c=HeroRole,p=c.prototype;
        // create
        HeroRole.create = function (id) {
            return new HeroRole(id);
        };
        // 
        p.event_start = function (e) {
        };
        // 
        p.event_ended = function (e) {
            var hero = this;
            var name = hero.object.animation.lastAnimationName;
            switch (name) {
                case "atk": {
                    this.unit_controller.common_atk_next(hero);
                    break;
                }
                case "death": {
                    this.object.removeEventListener(dragonBones.AnimationEvent.START, this.event_start, this);
                    this.object.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.event_ended, this);
                    this.object.removeEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frame_event, this);
                    this.unit_controller.died(hero);
                    // 处理队列
                    var main = UY.SceneManager.getInstance().getScene();
                    UY.ArrayController.deleteFromArray(main.get_team(), hero);
                }
            }
        };
        //
        p.frame_event = function (e) {
            var event_name = e.frameLabel;
            var hero = this;
            switch (event_name) {
                // 攻击
                case "atk_event": {
                    if (hero.status != 5 /* DEAD */) {
                        this.unit_controller.common_atk(hero);
                    }
                    break;
                }
            }
        };
        // 初始化
        p.init = function (id) {
            this.unit_controller = UY.Unit.getInstance().getType(HeroRole.units[id]);
            this.object = UY.DBManager.getInstance().createDBArmature(id);
            // 设置血条
            this.blood_bar = UY.Bar.create("texture01.enemy_blood", "texture01.enemy_blood_bg");
            this.blood_bar.x = -50;
            this.blood_bar.y = -150;
            this.object.getDisplay().addChild(this.blood_bar);
            this.object.addEventListener(dragonBones.AnimationEvent.START, this.event_start, this);
            this.object.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.event_ended, this);
            this.object.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frame_event, this);
            this.start_update();
            // 设置血量
            this.curr_blood = this.unit_controller.getTotalBlood();
            this.curr_id = id;
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
        // 移动
        p.move = function () {
            if (this.status != 5 /* DEAD */) {
                this.status = 1 /* MOVE */;
                this.object.animation.gotoAndPlay("move", 0, -1, 0);
            }
        };
        // 呼吸
        p.idle = function () {
            if (this.status != 5 /* DEAD */) {
                this.status = 0 /* IDLE */;
                this.object.animation.gotoAndPlay("idle", 0, -1, 0);
            }
        };
        // 攻击
        p.attack = function (enemy) {
            if (this.status != 5 /* DEAD */) {
                this.status = 2 /* ATTACK */;
                this.object.animation.gotoAndPlay("atk");
                this.curr_atk_object = enemy;
            }
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
        // 大招技能
        p.ult = function () {
            if (this.status != 5 /* DEAD */) {
                this.status = 4 /* ULT */;
                this.object.animation.gotoAndPlay("death");
            }
        };
        // 动作集
        p.act_idle = function () {
            this.move();
        };
        p.act_move = function () {
            if (this.type == 0 /* MINE */) {
                this.object.getDisplay().x = this.object.getDisplay().x + this.unit_controller.getSpeed();
            }
            else {
                this.object.getDisplay().x = this.object.getDisplay().x - this.unit_controller.getSpeed();
            }
            var main = UY.SceneManager.getInstance().getScene();
            var teams = main.get_team();
            for (var i = 0; i < teams.length; i++) {
                var e = teams[i];
                if (UY.MathLib.getDistance(this.object.getDisplay().x, this.object.getDisplay().y, e.object.getDisplay().x, e.object.getDisplay().y) < this.unit_controller.getAttackDistance()) {
                    if (e.getType() != this.getType() && e.status != 5 /* DEAD */) {
                        this.attack(e);
                    }
                }
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
        p.updated = function () {
            switch (this.status) {
                case 0 /* IDLE */: {
                    // 呼吸
                    this.act_idle();
                    break;
                }
                case 1 /* MOVE */: {
                    // 移动
                    this.act_move();
                    break;
                }
                case 2 /* ATTACK */: {
                    // 攻击
                    break;
                }
                case 3 /* HURT */: {
                    // 受伤
                    break;
                }
                case 4 /* ULT */: {
                    // 大招
                    break;
                }
                case 5 /* DEAD */: {
                    // 死亡
                    break;
                }
                case 6 /* CELE */: {
                    // 庆祝
                    break;
                }
            }
        };
        p.update = function () {
            // 步骤1
            this.updated();
        };
        return HeroRole;
    }(UY.BaseRole));
    UY.HeroRole = HeroRole;
    egret.registerClass(HeroRole,'UY.HeroRole');
})(UY || (UY = {}));
//# sourceMappingURL=HeroRole.js.map