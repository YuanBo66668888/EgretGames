class AnchorUtils extends BaseClass {

	public static _propertyChange;
	public static _anchorChange;

	public constructor() {
		super();
	}

	public static init() {
		AnchorUtils._anchorChange = Object.create(null);
		AnchorUtils._propertyChange = Object.create(null);
	}

	public static injectAnchor() {
		
	}
}