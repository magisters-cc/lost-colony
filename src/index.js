import * as PIXI from 'pixi.js'

import { Game, World, Viewport, Input } from './core'

const width = window.innerWidth;
const height = window.innerHeight;

// create viewport
const viewport = Viewport.initViewport(width, height);
const game = new Game({
  width,
  height
})
// add the viewport to the stage

game.add(viewport);

const operation = (deltaTime) => {
  // console.log(deltaTime)
}

game.addToQueue(operation)


console.log(game)
// activate plugins
viewport
  .drag()
  .pinch()
  .decelerate();

const world = new World()