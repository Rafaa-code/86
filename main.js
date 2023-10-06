var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	function.Image.fromURL('BirthdayImage.jpg', function(Img)){
blockImageObject = Img;
blockImageObject.scaleTowith(700);  
blockImageObject.scaleToheight(510); 
blockImageObject.set;({top:0,
    left:0});
    canvas.add(blockImageObject);       

    }
	
}

function playSound(){
	x.play();
}
