module UY {
	/**
	 *
	 * @Tom
	 *
	 */
    export class RedTower extends Unit {
        
        private static role: RedTower;
		public constructor() {
            super();
		}
		
        public static getInstance(): RedTower {
            if(!RedTower.role) {
                RedTower.role = new RedTower();
                RedTower.role.totalBlood = 3000;
            }
            return RedTower.role;
        }

        public createTower(): UY.TowerRole {
            var tower: UY.TowerRole = UY.TowerRole.create("role_2002");
            var armatureDisplay = tower.getNode();
            UY.TierManager.getInstance().all_objects[armatureDisplay.hashCode] = armatureDisplay;
            armatureDisplay.x = 2600;
            armatureDisplay.y = 260;

            UY.TierManager.getInstance().dealWithPosition();
            tower.setType(UY.ROLE_TYPE.EMENY);
            armatureDisplay.scaleX = 1;

            tower.blood_bar.setFlipX(false);
            tower.blood_bar.setPosition(-37,-37, -18, -18);
            return tower;
        }
        
        public died(tower: any) {
            
            // 游戏胜利
            var main = <Main>UY.SceneManager.getInstance().getScene();
            var teams = main.get_team();
            for(var i = 0;i < teams.length;i++) {
                var role = teams[i];
                if (role.getType() == UY.ROLE_TYPE.MINE) {
                    main.game_over = true;
                    role.play("cheer",-1);
                    role.status = UY.ROLE_STATUS.CELE;
                }
            }
            var ani = egret.Tween.get(tower.getArm().getDisplay());
            ani.to({ alpha: 0 },150).call(() => {
                (<egret.DisplayObjectContainer>tower.getArm().getDisplay().parent).removeChild(tower.getArm().getDisplay());
                tower.stop_update();
                tower = null;
            });
        }
	}
}
