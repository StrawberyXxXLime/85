canvas = document.getElementById("myCanvas")

ctx = canvas.getContext('2d')

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencarWidth = 75
greencarHeight = 100
greencarX = 5
greencarY= 225

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image
	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, greencarX, greencarY, greencarWidth, greencarHeight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencarY>0){
        greencarY = greencarY-10;
       uploadBackground();
	   uploadgreencar();
    }
}

function down()
{
	if(greencarY<=350){
        greencarY = greencarY+10;
       uploadBackground();
	   uploadgreencar();
    }
}

function left()
{
	if(greencarX>0){
        greencarX = greencarX-10;
       uploadBackground();
	   uploadgreencar();
    }

}

function right()
{
	if(greencarX<=750){
        greencarX = greencarX+10;
       uploadBackground();
	   uploadgreencar();
    }
}
