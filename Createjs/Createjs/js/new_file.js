var img=new Image();
var sprite;
window.onload=function (){
	canvas=document.getElementById("canvas");
	stage=new createjs.Stage(canvas);
	
	var data={
		images:["2.png"],
		frames:{width:20,height:20,regX:10,regY:10}
	}

	stage.addEventListener("stagemousedown",clickCanvas);
	stage.addEventListener("stagemousemove",moveCanvas);
	
	createjs.Ticker.setFPS(20);
	createjs.Ticker.addEventListener("tick",tick);
	sprite=new createjs.Sprite(new createjs.SpriteSheet(data));
	
}

function tick(){
	var t=stage.getNumChildren();
	for (var i=t-1;i>0;i--) {
		var s=stage.getChildAt(i);
		s.vX+=1;
		s.vY+=2;
		s.x+=s.vX;
		s.y+=s.vY;
		s.alpha+=s.vA;
		s.scaleX=s.scaleY=s.scaleX+s.vS;
		
		if(s.alpha<=0||s.y>canvas.height||s.x>canvas.width){
			stage.removeChild(i);
		}
	}
	stage.update();
}

function clickCanvas(){
	addS(Math.random()*200+100,stage.mouseX,stage.mouseY,2);
}

function moveCanvas(){
	addS(Math.random()*2+1,stage.mouseX,stage.mouseY,1);
}

function addS(count,x,y,speed){
	var s=sprite.clone();
	for(var i=0;i<count;i++){
		s.alpha=Math.random()*0.5+0.5;
		s.scaleX=s.scaleY=Math.random()+0.3;
		s.x=x;
		s.y=y;
		var a=Math.PI*2*Math.random();
		var v=(Math.random()-0.5)*30*speed;
		s.vX=Math.sin(a)*v;
		s.vY=Math.cos(a)*v;
		s.vA=-Math.random()*0.05-0.01;
		s.vS=(Math.random()-0.5)*0.02;
		stage.addChild(s);
	}
}
