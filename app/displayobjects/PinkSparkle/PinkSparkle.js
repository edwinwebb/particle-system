/**
 * A pink sparkle
 *
 * @exports PIXI.PinkSparkle
 * @extends Sparkle
 */

import {Texture} from 'pixi.js';
import Sparkle from '../Sparkle/Sparkle.js';
import PINK from './sparkle_pink.png';

export default class PinkSparkle extends Sparkle {

  constructor() {
    const texture = Texture.fromImage(PINK);
    super(texture);
  }

}
