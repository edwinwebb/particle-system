import PIXI from 'pixi.js';
import RendererStore from '../../stores/RendererStore.js';
import Emitter from '../Emitter/Emitter.js';
import Vector from '../Vector/Vector.js';
import Sparkle from '../Sparkle/Sparkle.js';

let emtters = new Set();

/**
 * Main App Display Object
 */

export default class App extends PIXI.Container {

  constructor(...args) {
    super(...args);

    this.interactive = true;
    this.tracking = false;
    this.graphics = new PIXI.Graphics();

    this.emitter = new Emitter(Sparkle);
    this.emitter.emitStep = 10;
    this.addChild(this.emitter);
    this.addChild(this.graphics);

    this.emitter.currentPosition = new Vector(RendererStore.get('width') / 2,RendererStore.get('height') / 2);

    this.drawBg();

    this.emitter.start();
  }

  addEmitter() {
    var emitter = new Emiiter();
    this.addChild(emitter);
    emitters.add(emitter.id);
    emitter.start();
  }

  removeEmitter(emitter) {
    emitter.stop();
    emitters.remove(emitter);
    this.removeChild(emitter);
  }

  drawBg() {
    var g = this.graphics;
    g.clear();
    g.beginFill(0x444444,1);
    g.drawRect(0,0,RendererStore.get('width'),RendererStore.get('height'));
    g.endFill();
  }

  mousedown(e) {
    this.emitter.start();
    this.tracking = true;
  }

  mousemove(e) {
    if(this.tracking) {
      let pos = e.data.getLocalPosition(this);
      this.emitter.currentPosition = new Vector(pos.x  / RendererStore.get("resolution"),pos.y / RendererStore.get("resolution"));
    }
  }

  mouseup(e) {
    this.tracking = false;
    this.emitter.stop();
  }

  touchmove(e) {

  }


}
