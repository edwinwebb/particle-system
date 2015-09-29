'use strict';

import PIXI from 'pixi.js';

export default class Vector extends PIXI.Point {

  constructor(...args) {
    super(...args);
  }

  add(p) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }

  subtract(p) {
    return new PIXI.Point(this.x + p.x, this.y + p.y);
  }

  negative() {
    return new PIXI.Point(-this.x, -this.y);
  }

}
