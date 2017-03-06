class LayerManager {

	// Layer
	public static GameBg: BaseSpriteLayer;
	public static GameMain: BaseSpriteLayer;

	// UI
	public static UIMain: BaseGuiLayer;
	public static UIGuide: BaseGuiLayer;
	public static UIPopup: BaseGuiLayer;
	public static UIMessage: BaseGuiLayer;
	public static UITips: BaseGuiLayer;
	public static UIBulletscreen: BaseGuiLayer;
	public static UIKing: BaseGuiLayer;

	public constructor() {
		LayerManager.GameBg = new BaseSpriteLayer;
		LayerManager.GameMain = new BaseSpriteLayer;
		LayerManager.UIMain = new BaseGuiLayer;
		LayerManager.UIGuide = new BaseGuiLayer;
		LayerManager.UIPopup = new BaseGuiLayer;
		LayerManager.UIMessage = new BaseGuiLayer;
		LayerManager.UITips = new BaseGuiLayer;
		LayerManager.UIBulletscreen = new BaseGuiLayer;
		LayerManager.UIKing = new BaseGuiLayer;
	}
}