/**
 * A particle for a system
 *
 * @exports PIXI.Particle
 * @extends Sprite
 */

import {Sprite} from 'pixi.js';
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

    AnimationStore.addChangeListener(this.update.bind(this));
  }

  update(e) {
    if(e.currentTime > this.startTime + this.lifeSpan) {
      this.kill();
      return false;
    }

    this.velocity = this.velocity.add(this.acceleration);
    this.position = this.position.add(this.velocity);

    this.postUpdate(e);
  }

  postUpdate() {

  }

  kill() {
    if(this.parent) {
      this.parent.removeChild(this);
    }
  }

}
