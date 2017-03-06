var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserInfo = (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        var _this = _super.call(this) || this;
        _this._consttime = 0;
        _this.bNeedNotice = true;
        GameNote.init();
        _this.init();
        return _this;
    }
    UserInfo.prototype.init = function () {
        this._mat = {};
        this.bInit = false;
        this.clickLevel = 0;
    };
    UserInfo.prototype.getUserData = function () {
        return this._userdata;
    };
    return UserInfo;
}(BaseClass));
__reflect(UserInfo.prototype, "UserInfo");
//# sourceMappingURL=UserInfo.js.map