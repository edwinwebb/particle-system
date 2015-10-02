/**
 * Test particle
 *
 * @exports PIXI.Sparkle
 * @extends Particle
 */

import {Texture, BLEND_MODES} from 'pixi.js';
import Particle from '../Particle/Particle.js';
import PNG from './sparkle_pink.png';


export default class Sparkle extends Particle {

  constructor(...args) {
    const texture = Texture.fromImage(PNG);
    super(texture);
    this.scale.x = .2;
    this.scale.y = .2;
    this.alpha = .8;
    this.rotation = Math.random() * Math.PI;
    this.blendMode = BLEND_MODES.ADD;
  }

  postUpdate(e) {
    this.alpha -= 0.005;
    this.rotation += 0.01;
  }

}
