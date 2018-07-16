import pixiViewport from 'pixi-viewport'

class Viewport {
  static initViewport(width, height) {
    const viewport = new pixiViewport({
        screenWidth: width,
        screenHeight: height,
        worldWidth: 1000,
        worldHeight: 1000
    })

    const sprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
    sprite.tint = 0xff0000;
    sprite.width = sprite.height = 10
    sprite.position.set(100, 100);

    return viewport
  }
}

export default Viewport