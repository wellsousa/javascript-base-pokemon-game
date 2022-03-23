

const canvas = document.querySelector("canvas")
canvas.width = 1024
canvas.height = 576

const Screen = canvas.getContext("2d")

const image = new Image()
image.src = './Tiled/tileset.png'

image.onload= () => {
    Screen.fillStyle = "green"
    Screen.fillRect(10, 10, image.width, image.height)
}