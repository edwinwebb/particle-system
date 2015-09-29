/**
 * A particle for a system
 *
 * @exports PIXI.Particle
 * @extends Sprite
 */

import {Sprite, Graphics} from 'pixi.js';
import AnimationStore from '../../stores/AnimationStore.js';
import Vector from '../Vector/Vector.js';

export default class Particle extends Sprite {

  constructor(...args) {
    super(...args);

    this.startTime = window.performance.now();
    this.acceleration = new Vector(0,0);
    this.velocity = new Vector(0,0);
    this.position = new Vector(0,0);
    this.anchor = new PIXI.Point(.5,.5);
    this.lifeSpan = 1000;

    this.draw();

    AnimationStore.addChangeListener(this.update.bind(this));
  }

  draw() {
    var g = new Graphics();
    g.beginFill(0xFF0000, 1);
    g.drawRect(-1,-1,2,2);
    g.endFill();

    this.addChild(g);
  }

  update(e) {
    if(e.currentTime > this.startTime + this.lifeSpan) {
      this.kill();
      return false;
    }

    this.velocity = this.velocity.add(this.acceleration);
    this.position = this.position.add(this.velocity);
  }

  kill() {
    if(this.parent) {
      this.parent.removeChild(this);
    }
  }

}
