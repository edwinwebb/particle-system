import PIXI from 'pixi.js';
import Particle from '../Particle/Particle.js';
import Vector from '../Vector/Vector.js';

export default class Emitter extends PIXI.Container {

  constructor() {
    super();
    this.currentPosition = new Vector(0,0);
    this.emitStep = 5;
  }

  start() {
    if(!this.interval) {
      this.interval = setInterval(this.emit.bind(this), this.emitStep);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = false;
  }

  emit() {
    var p = new Particle();
    p.velocity.y = (-2 * Math.random()) + 1;
    p.velocity.x = (-2 * Math.random()) + 1;
    p.position = new Vector(this.currentPosition.x,this.currentPosition.y);
    p.acceleration.y = .01;
    p.lifeSpan = 3000;

    this.parent.addChild(p);

    if(this.children.length > 15000) {
      this.stop();
    }
  }

}
