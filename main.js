var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 0;
player_y = 0;

var player_object= "";

function player_update(){
fabric.Image.fromURL("player.png", function(Img) 
{
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});

}

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top: player_y,
left:player_x
});
canvas.add(block_image_object);
});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
my_keypressed = e.keyCode;
console.log(my_keypressed);

if(e.shiftKey == true && my_keypressed == '80') 
{
console.log("p and shift key are pressed together");
block_image_height = block_image_height + 10;
block_image_width = block_image_width + 10;
document.getElementById("current_height").innerHTML = block_image_height;
document.getElementById("current_width").innerHTML = block_image_width;
}

if(e.shiftKey == true && my_keypressed == '77')
{
console.log("m and shift key are pressed together")
block_image_height = block_image_height - 10;
block_image_width = block_image_width - 10;
document.getElementById("current_height").innerHTML = block_image_height;
document.getElementById("current_width").innerHTML = block_image_width;
}

if(my_keypressed == '38')
{
    console.log("up");
}
if(my_keypressed == '40')
{
    console.log("down");
}
if(my_keypressed == '37')
{
    console.log("left");
}
if(my_keypressed == '39')
{
    console.log("39");
}

if(my_keypressed == '87')
{
new_image('wall.jpg');
console.log("w");
}

if(my_keypressed == '71')
{
    new_image('ground.png');
    console.log("g")
}

if(my_keypressed == '76')
{
    new_image('light_green.png');
    console.log("l");
}

if(my_keypressed == '84')
{
    new_image('trunk.jpg');
    console.log("t")
}

if(my_keypressed == '82')
{
    new_image('roof.jpg');
    console.log("r")
}

if(my_keypressed == '89')
{
    new_image('yellow_wall.png');
    console.log("y");
}

if(my_keypressed == '68')
{
    new_image('dark_green.png');
    console.log("d")
}

if(my_keypressed == '85')
{
    new_image('unique.png');
    console.log("u");
}

if(my_keypressed == '67')
{
    new_image('cloud.jpg');
    console.log("c");
}

}

function up(){

    if(player_y >= 0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height );
        console.log("When up arrow is pressed key, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
  
}

function down(){

    if(player_y <= 500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height );
        console.log("When down arrow key is pressed, X =  " + player_x +  " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
  
}

function left(){

    if(player_x > 0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width );
        console.log("When left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
  
}

function right(){

    if(player_x <= 850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width );
        console.log("When right arrow key is pressed, X = " + player_x +  " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
  
}
