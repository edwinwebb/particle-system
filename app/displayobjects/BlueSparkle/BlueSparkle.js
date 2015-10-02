/**
 * Blue Sparkle
 *
 * @exports PIXI.BlueSparkle
 * @extends Sparkle
 */

import {Texture} from 'pixi.js';
import Sparkle from '../Sparkle/Sparkle.js';
import BLUE from './sparkle_blue.png';

export default class BlueSparkle extends Sparkle {

  constructor() {
    const texture = Texture.fromImage(BLUE);
    super(texture);
  }

}
