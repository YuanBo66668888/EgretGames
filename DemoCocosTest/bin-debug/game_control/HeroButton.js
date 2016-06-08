var UY;
(function (UY) {
    ;
    var HeroButton = (function (_super) {
        __extends(HeroButton, _super);
        function HeroButton() {
            _super.call(this);
        }
        var d = __define,c=HeroButton,p=c.prototype;
        p.setMoney = function (num) {
            this.hero_money = UY.Font.createNumber(num, "NumberTexture.sp_", 10.5);
            this.hero_money.x = 65;
            this.hero_money.y = 91;
            this.hero_money.name = "Money";
            var child = this.getChildByName("Money");
            if (child) {
                this.removeChildAt(7);
            }
            this.addChildAt(this.hero_money, 7);
        };
        p.setSkillIcon = function (icon) {
            this.skill = UY.ImageManager.getInstance().createWithSpriteFrameName("common." + icon);
            this.skill.x = 7;
            this.skill.scaleX = 1.2;
            this.skill.scaleY = 1.2;
            this.skill.y = 7;
            this.addChildAt(this.skill, 3);
        };
        p.setSkillMoney = function (money) {
            this.skill_money = UY.Font.createNumber(money, "NumberTexture.sp_", 10.5);
            this.skill_money.x = 70;
            this.skill_money.y = 3;
            this.addChildAt(this.skill_money, 4);
        };
        HeroButton.create = function (bg_name, icon_name, bg_conver, i, func, obj) {
            var ret = new HeroButton();
            ret.icon_bottom = UY.ImageManager.getInstance().createWithSpriteFrameName(bg_name);
            ret.addChild(ret.icon_bottom);
            ret.icon = UY.ImageManager.getInstance().createWithSpriteFrameName(icon_name);
            ret.addChild(ret.icon);
            ret.icon.touchEnabled = true;
            ret.icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, func, obj);
            ret.icon.name = String(i);
            ret.bg_icon = UY.ImageManager.getInstance().createWithSpriteFrameName(bg_conver);
            ret.addChild(ret.bg_icon);
            ret.mc = UY.ImageManager.getInstance().createWithSpriteFrameName("texture01.hero_icon_mc_main");
            ret.addChild(ret.mc);
            ret.mc.x = 3;
            ret.mc.y = 3;
            // ret.mc.visible = false;
            ret.skill_bg = UY.ImageManager.getInstance().createWithSpriteFrameName("common.skill_bg");
            ret.addChildAt(ret.skill_bg, 3);
            ret.skill_bg.x = 3;
            ret.skill_bg.y = 3;
            ret.sp_content = UY.ImageManager.getInstance().createWithSpriteFrameName("common.hero_sp");
            ret.sp_content.x = 30;
            ret.sp_content.y = 93;
            ret.addChildAt(ret.sp_content, 5);
            ret.sp_bg = UY.ImageManager.getInstance().createWithSpriteFrameName("common.hero_sp_border");
            ret.sp_bg.x = 27;
            ret.sp_bg.y = 91;
            ret.addChildAt(ret.sp_bg, 6);
            ret.show_icon = UY.ImageManager.getInstance().createWithSpriteFrameName("common.zhaohuan_icon");
            ret.addChildAt(ret.show_icon, 7);
            ret.show_icon.x = 15;
            ret.show_icon.y = 45;
            ret.show_icon.visible = false;
            ret.skill_mc = UY.ImageManager.getInstance().createWithSpriteFrameName("common.skill_icon_bg");
            ret.addChildAt(ret.skill_mc, 6);
            ret.skill_mc.x = 8;
            ret.skill_mc.y = 7.2;
            ret.skill_arm = UY.DBManager.getInstance().createDBArmature("ui_skill");
            var display = ret.skill_arm.getDisplay();
            display.x = 60;
            display.y = 60;
            ret.addChildAt(display, 8);
            ret.skill_arm.animation.gotoAndPlay("play", 0, -1, 0);
            // ret.show_icon.texture = RES.getRes("texture01.fuhuo_icon");
            return ret;
        };
        p.IconShow = function () {
            this.show_icon.visible = true;
        };
        p.IconHide = function () {
            this.show_icon.visible = false;
        };
        // 状态机
        p.changeDisabled = function () {
            this.current_status = 0 /* DISABLE */;
            this.mc.visible = true;
            this.show_icon.visible = false;
            this.sp_bg.visible = true;
            this.skill_bg.visible = false;
            this.skill_money.visible = false;
            this.skill.visible = false;
            this.skill_mc.visible = false;
            this.skill_arm.getDisplay().visible = false;
        };
        p.changeUncall = function () {
            this.current_status = 1 /* UNCALL */;
            this.mc.visible = false;
            this.show_icon.visible = true;
        };
        p.changeCalled = function () {
            this.current_status = 2 /* CALLED */;
            this.show_icon.visible = false;
            this.skill_bg.visible = true;
            this.skill.visible = true;
            this.skill_money.visible = true;
            this.sp_bg.visible = false;
            this.sp_content.visible = false;
            this.hero_money.visible = false;
            this.skill_mc.visible = true;
        };
        p.changeSkilling = function () {
            this.current_status = 3 /* SKILLING */;
            this.skill_mc.visible = true;
            this.skill_arm.getDisplay().visible = false;
        };
        p.changeSkilled = function () {
            var _this = this;
            this.current_status = 4 /* SKILLED */;
            this.skill_mc.visible = false;
            this.skill_arm.getDisplay().visible = true;
            this.skill_arm.animation.gotoAndPlay("ready");
            var tw = egret.Tween.get(this.skill_arm);
            tw.wait(700).call(function () {
                _this.skill_arm.animation.gotoAndPlay("play");
            });
        };
        return HeroButton;
    }(egret.Sprite));
    UY.HeroButton = HeroButton;
    egret.registerClass(HeroButton,'UY.HeroButton');
})(UY || (UY = {}));
//# sourceMappingURL=HeroButton.js.map