import PIXI from 'pixi.js';
import RendererStore from '../../stores/RendererStore.js';
import Emitter from '../Emitter/Emitter.js';

/**
 * Main App Display Object
 *
 * Adds a background and some bunnies to it's self
 *
 * @exports App
 * @extends ScaledContainer
 */

export default class App extends PIXI.Container {

  constructor(...args) {
    super(...args);
    this.interactive = true;
    var e = new Emitter();
    e.start();

    this.addChild(e);
  }

  mousedown(e) {

  }

  touchstart() {

  }

  touchmove(e) {

  }

  touchend(e) {

  }

}
