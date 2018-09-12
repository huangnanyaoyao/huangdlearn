//<!--web存储-->
//<!--localStorage-->
//			var ta;
//			var bta;
//			window.onload=function(){
//				ta=document.getElementById("ta");
//				if(localStorage.text){
//					ta.value=localStorage.text;
//				}
//				bta=document.getElementById("btn");
//				btn.onclick=function(){
////					alert(ta.value);
//					localStorage.text=ta.value;
//				}
//			}

//<!--sessionStorage-->
//var num=0;
//			var txt;
//			var btn;
//			window.onload=function(){
//				txt=document.getElementById("txt");
//				btn=document.getElementById("addbtn");
//				if(sessionStorage.num){
//					num=sessionStorage.num;
//				}else{
//					num=0;
//				}
//				btn.onclick=function(){
//					num++;
//					sessionStorage.num=num;
//					showNum();
//				}
//			}
//			function showNum(){
//				txt.innerHTML=num;
//			}


//web workers
var numDiv;
var work=null;
window.onload=function(){
	numDiv=document.getElementById("numDiv");
	document.getElementById("start").onclick=start;
	document.getElementById("stop").onclick=function(){
		if(work){
			work.terminate();
			work=null;
		}
	}
}

function start(){
	if(work){
		return;
	}
	work=new Worker("js/works.js");
	work.onmessage=function(e){
		numDiv.innerHTML=e.data;
	}
}
