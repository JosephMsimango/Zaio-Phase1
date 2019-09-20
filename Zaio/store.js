var btn_add  = document.getElementById("add");
var btn_minus = document.getElementById("minus");
var btn_cart = document.getElementById("btn_cart");
var btn_agree = document.getElementById("btn_agree");
var btn_cancel = document.getElementById("btn_cancel");

var btn_color1 = document.getElementById("btn1");
var btn_color2 = document.getElementById("btn2");
var btn_color3 = document.getElementById("btn3");

var btn_color5 = document.getElementById("btn5");
var btn_color6 = document.getElementById("btn6");
var btn_color7 = document.getElementById("btn7");
var btn_color8 = document.getElementById("btn8");
var btn_color9 = document.getElementById("btn9");
var btn_color10 = document.getElementById("btn10");
var btn_color11 = document.getElementById("btn11");
var btn_color12 = document.getElementById("btn12");
var btn_color13 = document.getElementById("btn13");
var btn_color14  = document.getElementById("btn14");
var btn_color15 = document.getElementById("btn15");
var btn_color16 = document.getElementById("btn16");
var btn_color17 = document.getElementById("btn17");
var btn_color18 = document.getElementById("btn18");
var color = "";


/* var button_r = document.getElement("asfdsfs");
	var color = do...
	button_r.onclick = functiop(){
		color.innerHTML = button_r.style.backgroundColor;
	};

*/
var colorName = document.getElementById("color_name");
btn_color1.onclick = function(){
color = "btnColor1";
colorName.innerHTML = "Electric Red";
btn_cart.disabled = false;
}
btn_color2.onclick = function(){
color = "btnColor2";
colorName.innerHTML ="Purple";
btn_cart.disabled = false;
}

btn_color3.onclick = function(){
color = "btnColor3";
colorName.innerHTML ="Black";
btn_cart.disabled = false;
}

btn_color5.onclick = function(){
color = "btnColor5";
colorName.innerHTML ="Dark Orange";
btn_cart.disabled = false;
}

btn_color6.onclick = function(){
color = "btnColor6";
colorName.innerHTML ="Yellow";
btn_cart.disabled = false;
}
btn_color7.onclick = function(){
color = "btnColor7";
colorName.innerHTML ="Blue";
btn_cart.disabled = false;
}
btn_color8.onclick = function(){
color = "btnColor8";
colorName.innerHTML ="Dark Lategrey";
btn_cart.disabled = false;
}

btn_color9.onclick = function(){
color = "btnColor9";
colorName.innerHTML ="Burlywood";
btn_cart.disabled = false;
}
btn_color10.onclick = function(){
color = "btnColor10";
colorName.innerHTML ="Aqua";
btn_cart.disabled = false;
}
btn_color11.onclick = function(){
color = "btnColor11";
colorName.innerHTML ="Lime";
btn_cart.disabled = false;
}

btn_color12.onclick = function(){
color = "btnColor12";
colorName.innerHTML ="Deep Pink";
btn_cart.disabled = false;
}
btn_color13.onclick = function(){
color = "btnColor13";
colorName.innerHTML ="Coral";
btn_cart.disabled = false;
}
btn_color14.onclick = function(){
color = "btnColor14";
colorName.innerHTML ="Dark Green";
btn_cart.disabled = false;
}

btn_color15.onclick = function(){
color = "btnColor15";
colorName.innerHTML ="Dimgrey";
btn_cart.disabled = false;
}
btn_color16.onclick = function(){
color = "btnColor15";
colorName.innerHTML ="Saddle Brown";
btn_cart.disabled = false;
}
btn_color17.onclick = function(){
color = "btnColor17";
colorName.innerHTML ="Aquamarine";
btn_cart.disabled = false;
}

btn_color18.onclick = function(){
color = "btnColor18";
colorName.innerHTML ="Darkgray";
btn_cart.disabled = false;
}

btn_add.onclick = function () {
	var num = document.getElementById("myDIV");
	num.innerHTML = ++num.innerHTML ;
	if(num.innerHTML>9)
		{
			document.getElementById("myDIV").setAttribute("class", "valueAlign2");
		}
};
btn_minus.onclick = function(){

	var num = document.getElementById("myDIV");
	num.innerHTML = --num.innerHTML ;
	
	if(num.innerHTML<=0)
		{
			num.innerHTML=0;
		}
	if(num.innerHTML<10)
		{
			document.getElementById("myDIV").setAttribute("class", "valueAlign");
		}

};

btn_cart.onclick =function(){
	var btnCart = document.getElementById("btn_cart");	
	if(btnCart.innerHTML!="Checkout Now")
  		{
			if(color!="")
				{
					document.querySelector(".bg-modal").style.display ="flex";
					var c_name = document.getElementById("c_name");	
					c_name.innerHTML=colorName.innerHTML;
				}
			else
				{
					alert("Select Color")
				}
		}
	else
		{
			alert("You clicked the Checkout Now Button")
		}

};
btn_cancel.onclick = function(){
	var numCart = document.getElementById("myDIV");
	var numV = document.getElementById("cartValue");
	numV.innerHTML = 0;
	numCart.innerHTML = 0;
	document.querySelector(".bg-modal").style.display ="none";
}

btn_agree.onclick = function(){
var btnCart = document.getElementById("btn_cart");	
var numCart = document.getElementById("myDIV");
var numV = document.getElementById("cartValue");


  if(numCart.innerHTML==0)
    {
    	alert("Add Quantity Of Colors")
 	}
 	else
 		{
 		btnCart.innerHTML="Checkout Now";
		numV.innerHTML = numCart.innerHTML;
		document.querySelector(".bg-modal").style.display ="none";
    	for (var i = 0; i < numV.innerHTML; i++) 
			{
	
    		var x =document.createElement("BUTTON");
		 	var t = document.createTextNode("");
		    x.appendChild(t);
 			document.getElementById("btn_display").appendChild(x).setAttribute("class", color);
 			}
 			
 		}

};