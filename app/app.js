/**
 * App.js
 *
 * The main entry point, appends PIXI to the DOM
 * and starts a render and animation loop
 *
 */

import './index.html';
import {config} from '../package.json';
import Renderer from './Renderer/Renderer';
import App from './displayobjects/App/App';
import AnimationStore from './stores/AnimationStore';

const renderer = new Renderer(config.stageWidth, config.stageHeight);
const app = new App(config.stageWidth, config.stageHeight);

document.body.appendChild(renderer.view);

renderer.addRenderable(app);
renderer.start();
