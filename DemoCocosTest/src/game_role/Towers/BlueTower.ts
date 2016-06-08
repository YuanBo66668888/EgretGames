module UY {
	/**
	 *
	 * @Tom
	 *
	 */
    export class BlueTower extends Unit {
        private static role: BlueTower;
		public constructor() {
            super();
		}
		
        public static getInstance(): BlueTower {
            if(!BlueTower.role) {
                BlueTower.role = new BlueTower();
                BlueTower.role.totalBlood = 3000;
            }
            return BlueTower.role;
        }
		
        public createTower(): UY.TowerRole {
            var tower: UY.TowerRole = UY.TowerRole.create("role_2001");
            var armatureDisplay = tower.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = 300;
            armatureDisplay.y = 260;

            UY.TierManager.getInstance().dealWithPosition();
            tower.setType(UY.ROLE_TYPE.MINE);
            armatureDisplay.scaleX = -1;

            tower.blood_bar.setFlipX(true);
            tower.blood_bar.setPosition(125,125,-18,-18);
            return tower;
        }
        
        public died(tower: any) {

            var ani = egret.Tween.get(tower.getArm().getDisplay());
            ani.to({ alpha: 0 },150).call(() => {
                (<egret.DisplayObjectContainer>tower.getArm().getDisplay().parent).removeChild(tower.getArm().getDisplay());
                tower.stop_update();
                tower = null;
            });
        }
        
	}
}
