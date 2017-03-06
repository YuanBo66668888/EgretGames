class DeviceUtils extends BaseClass {
	public constructor() {
		super();
	}

	public IsHtml5() {
		return egret.Capabilities.runtimeType == egret.RuntimeType.WEB;
	}

	public IsNative() {
		return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
	}

	public IsMobile() {
		return egret.Capabilities.isMobile;
	}

	public IsPC() {
		return !egret.Capabilities.isMobile;
	}

	public IsQQBrowser() {
		return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MQQBrowser");
	}

	public IsIEBrowser() {
		return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MSIE");
	}

	public IsFirefoxBrowser() {
		return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Firefox");
	}

	public IsChromeBrowser() {
		return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Chrome");
	}

	public IsSafariBrowser() {
		return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Safari"); 	
	}

	public IsOperaBrowser() {
		return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Opera");
	}
}