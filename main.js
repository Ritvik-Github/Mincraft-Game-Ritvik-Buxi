var canvas = new fabric.Canvas("myCanvas");
var ctx = document.getElementById("myCanvas").getContext("2d");

var grass_sound = document.getElementById("grass_aud");

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 10;

var player_object = "";
var block_image_object = "";

function player_update() {
  fabric.Image.fromURL("player.png", function (Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: player_y,
      left: player_x,
    });

    canvas.add(player_object);
  });
  document.getElementById("current_width").innerHTML = block_image_width;
  document.getElementById("current_height").innerHTML = block_image_height;
}

function new_image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
      top: player_y,
      left: player_x,
    });

    canvas.add(block_image_object);
  });
}

window.addEventListener("keydown", key_down);

function key_down(e) {
  KeyPress = e.keyCode;
  console.log(KeyPress);
  if (e.shiftKey == true && KeyPress == "80") {
    console.log("Shift Key and P Key Is Pressed");
    block_image_width += 10;
    block_image_height += 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  KeyPress = e.keyCode;
  console.log(KeyPress);
  if (e.shiftKey == true && KeyPress == "77") {
    console.log("Shift Key and M Key Is Pressed");
    block_image_width -= 10;
    block_image_height -= 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  if (KeyPress == "38") {
    up();
    console.log("up is pressed");
  }
  if (KeyPress == "40") {
    down();
    console.log("down is pressed");
  }
  if (KeyPress == "37") {
    left();
    console.log("left is pressed");
  }
  if (KeyPress == "39") {
    right();
    console.log("right is pressed");
  }
  if (KeyPress == "87") {
    get_image = "brick_block.jpg";
    new_image("brick_block.jpg");
    grass_sound.play();
    console.log("added block");
  }
  if (KeyPress == "71") {
    get_image = "grass_block.png";
    new_image("grass_block.png");
    grass_sound.play();
    console.log("added block");
  }
  if (KeyPress == "76") {
    get_image = "light_green.png";
    new_image("light_green.png");
    grass_sound.play();
    console.log("added block");
  }
  if (KeyPress == "84") {
    get_image = "oak log.jpg";
    new_image("oak log.jpg");
    grass_sound.play();
    console.log("added block");
  }
  if (KeyPress == "82") {
    get_image = "netherack.jpg";
    new_image("netherack.jpg");
    grass_sound.play();
    console.log("added block");
  }
  if (KeyPress == "89") {
    get_image = "yellow_brick_block.png";
    new_image("yellow_brick_block.png");
    grass_sound.play();
    console.log("added block");
  }
  if (KeyPress == "85") {
    get_image = "glowstone.png";
    new_image("glowstone.png");
    grass_sound.play();
    console.log("added block");
  }
}
function up() {
  player_y -= 10;
  canvas.remove(player_object);
  player_update();
}
function down() {
  player_y += 10;
  canvas.remove(player_object);
  player_update();
}
function right() {
  player_x += 10;
  canvas.remove(player_object);
  player_update();
}
function left() {
  player_x -= 10;
  canvas.remove(player_object);
  player_update();
}
