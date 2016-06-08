module UY {
	/**
	 *
	 * @Tom
	 *
	 */
	export class Animate {
    	
    	// TODO
		public constructor() {
		}
		
		// Create
		public static createAnimate(data_name:string, texture_name:string, ani_name:string): egret.MovieClip {
            var data = RES.getRes(data_name);
            var texture = RES.getRes(texture_name);
            var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
            var ret: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(ani_name));
            return ret;
		}
	}
}
