const ROT = require('rot-js')
const jsdom = require("jsdom")
const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const window = dom.window
const document = dom.window.document

const Game = {
    init() {
        this.display = new ROT.Display({
            width: 50,
            height: 50,
        });
        body.appendChild(this.display.getContainer())
    }
}

window.onload = () => {
    Game.init()
}




module.exports = dom