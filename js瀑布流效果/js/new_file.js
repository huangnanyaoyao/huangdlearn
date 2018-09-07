window.onload=function(){
	imgLocation();
	window.onscroll=function(){
		if(jiazai()==true){
			console.log("这是加图片效果");
			var imgData=['img_1.jpg','img_2.jpg','img_3.jpg','img_4.jpg','img_5.jpg','img_6.jpg','img_7.jpg','img_8.jpg','logo.jpg'];
//			imgData=document.getElementsByTagName("img");
			for(var i=0;i<imgData.length;i++){
				var container=document.getElementById("container");
				var box=document.createElement("div");
				box.className="box";
				container.appendChild(box);
				var box_img=document.createElement("div");
				box_img.className="box_img";
				box.appendChild(box_img);
				var img=document.createElement("img");
				img.src="img/"+imgData[i];
				box_img.appendChild(img);
			}
			imgLocation();
		}
	}
}

function jiazai(){
	var container=document.getElementById("container");
	var box=container.getElementsByClassName("box");
	var lastTop=box[box.length-1].offsetTop;
	var scroll=document.documentElement.scrollTop;
	var screenHeight=document.documentElement.clientHeight;
		if(lastTop<screenHeight+scroll)
		{
			return true;
		}
}

function imgLocation(){
	var container=document.getElementById("container");
	var box=container.getElementsByClassName("box");
	var num=Math.floor(window.innerWidth/box[0].offsetWidth);
	container.style.cssText="width:"+num*box[0].offsetWidth+"px;margin:0 auto;";
	var boxHeight=[];
	for (var i=0;i<box.length;i++) {
		if(i<num){
			boxHeight[i]=box[i].offsetHeight;
		}else{
			var minHeight=Math.min.apply(null,boxHeight);
			var minIndex;
			for (var j=0;j<boxHeight.length;j++) {
				if(boxHeight[j]==minHeight)
				{
					minIndex=j;
					break;
				}
			} 
//			if(boxHeight[i]==minHeight)
//			{
//				minIndex=i;
//			}
//	container.style.top=minHeight+"px;";
//	container.style.left=minIndex*box[0].offsetWidth;
			box[i].style.position="absolute";
			box[i].style.top=minHeight+"px";
//			box[i].style.left=minIndex*box[0].offsetWidth+"px;";
			box[i].style.left=box[minIndex].offsetLeft+"px";
			boxHeight[minIndex]=box[i].offsetHeight+boxHeight[minIndex];
			console.log(minIndex,box[minIndex].offsetLeft);
		}
	}
}
