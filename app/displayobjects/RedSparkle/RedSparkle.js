/**
 * Red Sparkle
 *
 * @exports RedSparkle
 * @extends Sparkle
 */

import {Texture} from 'pixi.js';
import Sparkle from '../Sparkle/Sparkle.js';
import RED from './sparkle_red.png';

export default class BlueSparkle extends Sparkle {

  constructor() {
    const texture = Texture.fromImage(RED);
    super(texture);
  }

}
