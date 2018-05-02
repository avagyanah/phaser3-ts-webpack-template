import BootScene from '../scenes/BootScene';
import GameScene from '../scenes/GameScene';

export const gameConfig: IConfig = {
  type: Phaser.AUTO,
  width: 540,
  height: 960,
  backgroundColor: '#626262',
  parent: 'gameContainer',
  scene: [BootScene, GameScene],
};

export interface IConfig {
  type: number;
  width: number;
  height: number;
  backgroundColor: string;
  parent: string;
  scene: any[];
}
