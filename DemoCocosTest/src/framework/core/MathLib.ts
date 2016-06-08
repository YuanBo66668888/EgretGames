module UY {
	/**
	 *
	 * @author 
	 *
	 */
	export class MathLib {
		public constructor() {
		    
		}
		
		// 求两点距离
		static getDistance(x1, y1, x2, y2):number {
            return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
		}
		
	}
}
