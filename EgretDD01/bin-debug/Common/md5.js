var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var md5 = (function () {
    function md5() {
        this.b64pad = "";
        this.hexcase = 0,
            this.b64pad = "";
    }
    md5.prototype.rstr2hex = function (v) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        for (var i, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", r = 0; r < v.length; r++)
            i = v.charCodeAt(r),
                s += n.charAt(i >>> 4 & 15) + n.charAt(15 & i);
    };
    md5.prototype.rstr2b64 = function (v) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = "";
        }
        for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", s = v.length, r = 0; s > r; r += 3)
            for (var a = v.charCodeAt(r) << 16 | (s > r + 1 ? v.charCodeAt(r + 1) << 8 : 0) | (s > r + 2 ? v.charCodeAt(r + 2) : 0), o = 0; 4 > o; o++)
                n += 8 * r + 6 * o > 8 * v.length ? this.b64pad : i.charAt(a >>> 6 * (3 - o) & 63);
        return n;
    };
    return md5;
}());
__reflect(md5.prototype, "md5");
//# sourceMappingURL=md5.js.map