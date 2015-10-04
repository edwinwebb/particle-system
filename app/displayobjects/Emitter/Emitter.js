import PIXI from 'pixi.js';
import Vector from '../Vector/Vector.js';
import EventEmitter from 'events';

export default class Emitter extends EventEmitter {

  constructor(particle = PIXI.Sprite, target) {
    super();

    this.currentPosition = new Vector(0,0);
    this.emitStep = 5;
    this.id = Symbol("emitter");
    this.emitTarget = target;
    this.particle = particle;
  }

  start() {
    if(!this.interval) {
      this.interval = setInterval(this.emitHandler.bind(this), this.emitStep);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  emitHandler() {
    var p = new this.particle();
    this.emitTarget.addChild(p);

    this.emit('emit', p);
  }

}
