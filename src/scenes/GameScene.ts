import Phaser from 'phaser';
import { SCENE_GAME } from '../constants/Constants';
import { gameConfig } from '../constants/GameConfig';

export default class GameScene extends Phaser.Scene {
  private mushroom: Phaser.GameObjects.Sprite;

  constructor() {
    super(SCENE_GAME);
  }

  public create(): void {
    this.mushroom = this.add.sprite(
      gameConfig.width * 0.5,
      gameConfig.height * 0.5,
      'mushroom',
    );
  }

  public update(): void {
    this.mushroom.angle++;
  }
}
