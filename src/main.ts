import Phaser from "phaser";
import { Test } from "./scenes/test-level";
import { gridConfig } from "./grid-config";
import { Title } from "./scenes/Title";

export const gameConfig : {english: boolean, chinese: boolean, hebrew: boolean} = {
  english: false,
  chinese: false,
  hebrew: false,
};
//random change
const game = new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: gridConfig.width,
      height: gridConfig.height
  },
  physics: {
    default: "arcade",
    arcade: {
        gravity: { y: 0 },
        debug: false,
    },
},
  pixelArt: true,
  backgroundColor: 0x0000ff,
  scene: [Title, Test, ],
  title: "121 Final"
});

console.log(game);