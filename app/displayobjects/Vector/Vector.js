'use strict';

import {Point} from 'pixi.js';
import V from './Vector.js';

export default class Vector extends Point {

  constructor(...args) {
    super(...args);
  }

  add(p) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }

  subtract(p) {
    return new V(this.x + p.x, this.y + p.y);
  }

  negative() {
    return new V(-this.x, -this.y);
  }

}
