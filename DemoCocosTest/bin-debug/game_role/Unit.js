var UY;
(function (UY) {
    /**
     *
     * @tom
     *
     */
    var Unit = (function () {
        //
        function Unit() {
        }
        var d = __define,c=Unit,p=c.prototype;
        Unit.getInstance = function () {
            if (!Unit.unit) {
                Unit.unit = new Unit();
                Unit.unit.create();
            }
            return Unit.unit;
        };
        p.create = function () {
            this.types = new Array();
            this.types["Aich"] = UY.Aich.getInstance();
            this.types["Garen"] = UY.Garen.getInstance();
            this.types["Karthus"] = UY.Karthus.getInstance();
            this.types["Miss"] = UY.Miss.getInstance();
            this.types["Soraka"] = UY.Soraka.getInstance();
            this.types["BlueTower"] = UY.BlueTower.getInstance();
            this.types["RedTower"] = UY.RedTower.getInstance();
        };
        p.getType = function (n) {
            return this.types[n];
        };
        // 继承函数
        p.common_atk = function (hero) {
        };
        p.common_atk_next = function (hero) {
        };
        // 获取属性
        p.getUnitType = function () {
            return this.unit_type;
        };
        p.getAttackDistance = function () {
            return this.attack_distance;
        };
        p.getAttackDamage = function () {
            return this.attack_damage;
        };
        p.getSpeed = function () {
            return this.speeed;
        };
        p.getPosMinY = function () {
            return this.position_min_y;
        };
        p.getPosMaxY = function () {
            return this.position_max_y;
        };
        p.getAttackFreq = function () {
            return this.attack_freq;
        };
        p.getTotalBlood = function () {
            return this.totalBlood;
        };
        p.getMoney = function () {
            return this.money;
        };
        p.getResurrectTime = function () {
            return this.resurrection_tm;
        };
        p.getSkillID = function () {
            return this.skill_id;
        };
        p.getSkillMoney = function () {
            return this.skill_money;
        };
        p.createHero = function () {
            var hero = new UY.HeroRole("");
            return hero;
        };
        p.createEnemyHero = function () {
            var hero = new UY.HeroRole("");
            return hero;
        };
        p.createTower = function () {
            var tower = new UY.TowerRole("");
            return tower;
        };
        p.setType = function (hero, type) {
            hero.setType(type);
        };
        // Event
        p.died = function (hero) {
        };
        return Unit;
    }());
    UY.Unit = Unit;
    egret.registerClass(Unit,'UY.Unit');
})(UY || (UY = {}));
//# sourceMappingURL=Unit.js.map