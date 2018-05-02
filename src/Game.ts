import { gameConfig } from './constants/GameConfig';

class Game extends Phaser.Game {
  constructor(config: any) {
    super(config);
    window.onresize = this.resize.bind(this);
    this.resize();
  }

  public resize(): void {
    const { width, height } = this.config as any;
    const scale: number = Math.min(
      window.innerHeight / height,
      window.innerWidth / width,
    );
    this.canvas.style.position = 'absolute';
    this.canvas.style.width = width * scale + 'px';
    this.canvas.style.height = height * scale + 'px';
    this.canvas.style.left = (window.innerWidth - width * scale) * 0.5 + 'px';
    this.canvas.style.top = (window.innerHeight - height * scale) * 0.5 + 'px';
    if (this.context) {
      this.context.rect(0, 0, width, height);
      this.context.fillStyle = 'red';
      this.context.fill();
    }
    super.resize(gameConfig.width, gameConfig.height);
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    (window as IWindow).game = new Game(gameConfig);
  }
};

interface IWindow extends Window {
  game: Game;
}
