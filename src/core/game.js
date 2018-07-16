import * as PIXI from 'pixi.js'

class Game {
  constructor({width, height}) {
    this.game = new PIXI.Application({
      width, height
    })

    document.body.appendChild(this.game.view)

    this.queue = []

    this.game.ticker.add(deltaTime => this.update(deltaTime))
  }

  add(entity) {
    this.game.stage.addChild(entity)
  }

  addToQueue(operation) {
    this.queue.push(operation)
  }

  update(deltaTime) {
    this.queue.reduce((acc, operation) => operation(deltaTime), 0)
  }
}

export default Game