'use strict';

import PIXI from 'pixi.js';
import Particle from '../Particle/Particle.js';

export default class Emitter extends PIXI.Container {

  constructor() {
    super();
  }

  start() {
    this.interval = setInterval(this.emit.bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  emit() {
    var p = new Particle();
    p.position.x = Math.random() * 500;
    p.position.y = 500;
    p.velocity.y = 1;
    p.acceleration.y = .1;
    p.lifeSpan = 1000;

    this.addChild(p);

    if(this.children.length > 15) {
      this.stop();
    }
  }

}
