import PIXI from 'pixi.js';
import RendererStore from '../../stores/RendererStore.js';
import Emitter from '../Emitter/Emitter.js';
import Vector from '../Vector/Vector.js';
import Sparkle from '../PinkSparkle/PinkSparkle.js';
import BlueSparkle from '../BlueSparkle/BlueSparkle.js';
import RedSparkle from '../RedSparkle/RedSparkle.js';
import AnimationStore from '../../stores/AnimationStore.js';
import Explosion from '../Explosion/Explosion.js';

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

    this.emitter = new Emitter(RedSparkle);
    this.emitter.emitStep = 10;
    this.addChild(this.emitter);
    this.addChild(this.graphics);

    this.emitter.currentPosition = new Vector(RendererStore.get('width') / 2,RendererStore.get('height') / 2);

    this.drawBg();

    this.emitter.start();

    this.addCircle();

    let x = new Explosion();
    x.position = new Vector(RendererStore.get('width') / 2,RendererStore.get('height') / 2)

    this.addChild(x);

    // AnimationStore.addChangeListener(this.update.bind(this));

  }

  addCircle(x,y) {
    let t = [];
    let c = 50;
    let offset = Math.random() * 50;
    let size = 5;
    let centerX = x;
    let centerY = y;

    for(let i = 0; i < c; i++){
      let p = new BlueSparkle();
      let angle = 2 * Math.PI / c * (i + offset);
      p.position.x = centerX + size  * Math.cos(angle);
      p.position.y = centerY + size  * Math.sin(angle);
      p.velocity.x = Math.cos(angle);
      p.velocity.y = Math.sin(angle);
      p.lifeSpan = 2000;
      p.rotation = Math.PI * Math.random() * 2;
      this.addChild(p);
    }

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
    let pos = e.data.getLocalPosition(this);
    this.emitter.start();
    this.tracking = true;
    this.addCircle(pos.x  / RendererStore.get("resolution"),pos.y / RendererStore.get("resolution"));
  }

  mousemove(e) {
    if(this.tracking) {
      let pos = e.data.getLocalPosition(this);
      this.emitter.currentPosition = new Vector(pos.x  / RendererStore.get("resolution"),pos.y / RendererStore.get("resolution"));
    }
  }

  mouseup(e) {
    this.tracking = false;
    //this.emitter.stop();
  }

  touchmove(e) {

  }


}
