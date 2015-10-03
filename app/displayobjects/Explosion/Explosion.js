/**
 * A explosion fx
 *
 * @exports PIXI.Explosion
 * @extends Container
 */

import {Texture, Sprite, Container} from 'pixi.js';
import Particle from '../Particle/Particle.js';
import STREAK from './streak.png';
import WAVE from './wave.png';
import RedSparkle from '../RedSparkle/RedSparkle.js';
import AnimationStore from '../../stores/AnimationStore.js';


export default class Explosion extends Container {

  constructor(...args) {
    super(...args);

    let wave = new Sprite(new Texture.fromImage(WAVE));
    wave.anchor.x = .5;
    wave.anchor.y = .5;
    wave.scale.x = 0;
    wave.scale.y = 0;
    wave.alpha = .5;

    this.wave = wave;

    this.addChild(wave);
    this.addCircle(0,0);

    AnimationStore.addChangeListener(this.update.bind(this));
  }

  addCircle(x,y) {
    let t = [];
    let c = 50;
    let offset = Math.random() * 50;
    let size = 5;
    let centerX = x;
    let centerY = y;

    for(let i = 0; i < c; i++){
      let p = new Particle(new Texture.fromImage(STREAK));
      let angle = 2 * Math.PI / c * (i + offset);
      p.position.x = centerX + size  * Math.cos(angle);
      p.position.y = centerY + size  * Math.sin(angle);
      p.velocity.x = Math.cos(angle) * 4;
      p.velocity.y = Math.sin(angle) * 4;
      p.lifeSpan = 2000;
      p.rotation = angle;
      p.scale.x = .3;
      p.scale.y = .3;
      t.push(p);
      this.addChild(p);
    }

    this.t = t;

  }

  update(e) {
    this.wave.scale.x += 0.031;
    this.wave.scale.y += 0.031;
    this.wave.alpha -= 0.012;

    for(var x of this.t) {
      x.scale.x -= 0.001;
      x.scale.y -= 0.001;
      x.alpha -= 0.012;
      if(x.scale.y < 0) {
        x.kill();
      }
    }


  }

}
