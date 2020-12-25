document.body.style.fontFamily = "Arial,Tahoma";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";
 var topSec = document.createElement("div");
document.body.appendChild(topSec);
topSec.style.width = "1519px";
topSec.style.height = "700px";
topSec.style.backgroundImage = "url('https://raw.githubusercontent.com/Hibanelson/DOMProject/master/universe.jpg')";
topSec.style.backgroundSize = "100% 100%";
topSec.style.margin = "0";
topSec.style.padding = "0";
var header = document.createElement("header");
topSec.appendChild(header);
header.style.width = "1519px";
header.style.height = "60px";
header.style.boxShadow = "0px 10px 7px -4px rgba(0,0,0,0.75)";
var h1 = document.createElement("h1");
header.appendChild(h1);
var h1Text = document.createTextNode("Mohab");
h1.appendChild(h1Text);
h1.style.width = "120px";
h1.style.height = "35px";
h1.style.float = "left";
h1.style.margin ="12px 0 13px 155px";
h1.style.color = "#fff";
h1.style.textAlign ="center";
h1.onmouseover = function(){
    h1.style.cursor = "pointer";
}
var ul = document.createElement("ul");
header.appendChild(ul);
var li = [];
for(var i = 0;i<3;i++){
   li.push(document.createElement("li"));
}
for(var i = 0;i < li.length;i++){
    ul.appendChild(li[i]);
}
var liText = [];
for(var i = 0;i < li.length;i++){
    var m = i+1;
    liText.push(document.createTextNode("LINK"+m));
}
for(var i = 0;i < li.length;i++){
    li[i].appendChild(liText[i]);
}
ul.style.float = "right";
ul.style.width = "175px";
ul.style.height = "15px";
ul.style.marginRight = "170px";
ul.style.marginTop = "22px";
for(var i = 0;i< li.length;i++){
    li[i].style.display ="inline";
    li[i].style.color = "#fff";
    li[i].style.marginRight ="15px";
    li[i].style.fontSize = "13px";
    li[i].style.fontWeight = "600";
}
li[0].onmouseover = function(){
        li[0].style.cursor = "pointer";
    }
li[1].onmouseover = function(){
        li[1].style.cursor = "pointer";
    }
li[2].onmouseover = function(){
        li[2].style.cursor = "pointer";
    }
var container = document.createElement("div");
topSec.appendChild(container);
container.style.height = "640px";
container.style.width = "1195px";
container.style.margin = "0 176px 0 148px";
var topP1 = document.createElement("p");
container.appendChild(topP1);
var topP1Text = document.createTextNode("Welcome To My Website");
topP1.appendChild(topP1Text);
topP1.style.height = "20px";
topP1.style.width = "210px";
topP1.style.margin = "auto";
topP1.style.color = "#fff";
topP1.style.fontSize = "18px";
topP1.style.fontWeight = "400";
topP1.style.lineHeight = "normal";
topP1.style.marginTop = "80px";
var topP2 = document.createElement("p");
container.appendChild(topP2);
var topP2Text = document.createTextNode("Build For The  ");
topP2.appendChild(topP2Text);
topP2.style.width = "600px";
topP2.style.height = "50px";
topP2.style.margin = "auto";
topP2.style.marginTop = "30px";
topP2.style.color = "#fff";
topP2.style.fontSize = "60px";
topP2.style.fontWeight = "700";
var span1 = document.createElement("span");
topP2.appendChild(span1);
var span1Text = document.createTextNode("Future");
span1.appendChild(span1Text);
span1.style.color = "rgb(156, 39, 176)";
var topP3 = document.createElement("p");
container.appendChild(topP3);
var topP3Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.");
topP3.appendChild(topP3Text);
topP3.style.width = "995px";
topP3.style.height = "20px";
topP3.style.margin = "auto";
topP3.style.marginTop = "75px";
topP3.style.color = "#fff";
topP3.style.fontSize = "20px";
var btn1 = document.createElement("button");
container.appendChild(btn1);
var btn1Text = document.createTextNode("Learn More");
btn1.appendChild(btn1Text);
btn1.style.width = "155px";
btn1.style.height = "65px";
btn1.style.display = "block";
btn1.style.margin = "auto";
btn1.style.marginTop = "17px";
btn1.style.backgroundColor = "#9C27B0";
btn1.style.borderRadius = "5px";
btn1.style.border = "none";
btn1.style.color = "#fff";
btn1.style.fontSize = "18px";
btn1.onmouseover = function (){
    this.style.cursor = "pointer";
}
btn1.onmouseout = function (){
    this.style.cursor = "auto";
}
var btn2 = document.createElement("button");
container.appendChild(btn2);
var btn2Text = document.createTextNode("Sign Up");
btn2.appendChild(btn2Text);
btn2.style.width = "155px";
btn2.style.height = "65px";
btn2.style.display = "block";
btn2.style.margin = "auto";
btn2.style.marginTop = "7px";
btn2.style.backgroundColor = "#fff";
btn2.style.borderRadius = "5px";
btn2.style.border = "none";
btn2.style.color = "#9C27B0";
btn2.style.fontSize = "18px";
btn2.onmouseover = function (){
    this.style.cursor = "pointer";
}
btn2.onmouseout = function (){
    this.style.cursor = "auto";
}
var container2 = document.createElement("div");
document.body.appendChild(container2);
container2.style.width = "1150px";
container2.style.height = "240px";
container2.style.margin = "auto";
container2.style.marginTop = "70px";
var container2Divs = [];
for(var i = 0;i < 4;i++){
    container2Divs.push(document.createElement("div"));
}
for(var i = 0;i < container2Divs.length;i++){
    container2.appendChild(container2Divs[i]);
    container2Divs[i].style.float = "right";
    container2Divs[i].style.width ="280px";
    container2Divs[i].style.height ="240px";
    container2Divs[i].style.boxShadow = "0px 2px 8px -1px rgba(0,0,0,0.5)";
    container2Divs[i].style.borderRadius = "5px";
    container2Divs[i].style.marginRight = "7.5px";
    
}
var container2Images = [];
for(var i = 0;i < container2Divs.length;i++){
    container2Images.push(document.createElement("img"));
}
for(var i = 0;i < container2Divs.length;i++){
    container2Divs[i].appendChild(container2Images[i]);
}
var imgSrc = ["https://raw.githubusercontent.com/Hibanelson/DOMProject/74edafa84dd7cd5fcbe3ac242b1798f38b6a3c8f/browser.svg","https://raw.githubusercontent.com/Hibanelson/DOMProject/74edafa84dd7cd5fcbe3ac242b1798f38b6a3c8f/tweet.svg","https://raw.githubusercontent.com/Hibanelson/DOMProject/74edafa84dd7cd5fcbe3ac242b1798f38b6a3c8f/picture.svg","https://raw.githubusercontent.com/Hibanelson/DOMProject/74edafa84dd7cd5fcbe3ac242b1798f38b6a3c8f/laptop.svg"];
for(var i = 0;i < container2Images.length;i++){
    container2Images[i].style.width = "102px";
    container2Images[i].style.height = "102px";
    container2Images[i].style.borderRadius ="50% 50%";
    container2Images[i].style.margin = "auto";
    container2Images[i].style.marginTop = "8px";
    container2Images[i].style.display = "block";
    container2Images[i].src = imgSrc[i];
    container2Images[i].style.transition ="all .7s ease-in-out";
}
container2Images[0].onmouseover = function(){
         "use strict";
        container2Images[0].style.transform 
            = "rotate(360deg)";
    }
container2Images[0].onmouseout = function(){
    "use strict";
        container2Images[0].style.transform 
            = "rotate(-360deg)";
}
container2Images[1].onmouseover = function(){
         "use strict";
        container2Images[1].style.transform 
            = "rotate(360deg)";
    }
container2Images[1].onmouseout = function(){
    "use strict";
        container2Images[1].style.transform 
            = "rotate(-360deg)";
}
container2Images[2].onmouseover = function(){
         "use strict";
        container2Images[2].style.transform 
            = "rotate(360deg)";
    }
container2Images[2].onmouseout = function(){
    "use strict";
        container2Images[2].style.transform 
            = "rotate(-360deg)";
}
container2Images[3].onmouseover = function(){
         "use strict";
        container2Images[3].style.transform 
            = "rotate(360deg)";
    }
container2Images[3].onmouseout = function(){
    "use strict";
        container2Images[3].style.transform 
            = "rotate(-360deg)";
}
var container2P1Text = ["Browser","Social","Graphic Design","Web Development"];
var container2P1TextNodes = [];
var container2P1 = [];
for(var i = 0;i < container2Divs.length;i++){
    container2P1.push(document.createElement("p"));
}
for(var i = 0;i < container2P1.length;i++){
    container2Divs[i].appendChild(container2P1[i]);
    container2P1TextNodes.push(document.createTextNode(container2P1Text[i]));
    container2P1[i].appendChild(container2P1TextNodes[i]);
    container2P1[i].style.textAlign = "center";
    container2P1[i].style.marginTop = "25px";
    container2P1[i].style.fontSize = "18.72px";
    container2P1[i].style.fontWeight = "700";
}
var container2P2 = [];
for(var i = 0;i < container2Divs.length;i++){
    container2P2.push(document.createElement("p"));
    container2Divs[i].appendChild(container2P2[i]);
    var container2P2Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    container2P2[i].appendChild(container2P2Text);
    container2P2[i].style.textAlign = "center";
}
var hint = document.createElement("div");
document.body.appendChild(hint);
hint.style.marginTop = "140px";
hint.style.width = "1519px";
hint.style.height = "360px";
hint.style.backgroundColor = "#F5F5F5";
var container3 = document.createElement("div");
hint.appendChild(container3);
container3.style.width = "1195px";
container3.style.height = "360px";
container3.style.margin = "auto";
container3.style.overflow = "hidden";
var article1 = document.createElement("article");
container3.appendChild(article1);
article1.style.width = "597.5px";
article1.style.height = "360px";
article1.style.float = "left";
var article1P1 = document.createElement("p");
article1.appendChild(article1P1);
var span2 = document.createElement("span");
article1P1.appendChild(span2);
var span2Text = document.createTextNode("About ");
span2.appendChild(span2Text);
var article1P1Text = document.createTextNode("Us");
article1P1.appendChild(article1P1Text);
article1P1.style.fontSize = "50px";
article1P1.style.fontWeight = "700";
article1P1.style.paddingLeft = "20px";
span2.style.color = "rgb(156, 39, 176)";
var article1P2 = document.createElement("p");
article1.appendChild(article1P2);
var article1P2Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.");
article1P2.appendChild(article1P2Text);
article1P2.style.fontSize = "28px";
article1P2.style.lineHeight = "42px";
article1P2.style.color = "rgb(85,85,85)";
article1P2.style.paddingLeft = "20px";
var article1Img = document.createElement("img");
container3.appendChild(article1Img);
article1Img.src = "https://raw.githubusercontent.com/Hibanelson/DOMProject/master/tech.jpg";
article1Img.style.display = "block";
article1Img.style.width = "410px";
article1Img.style.height = "275px";
article1Img.style.float = "right";
article1Img.style.marginTop = "30px";
article1Img.style.marginRight = "50px";
var message = document.createElement("div");
document.body.appendChild(message);
message.style.width = "1519px";
message.style.height = "135px";
message.style.borderTop ="5px solid #000";
message.style.borderBottom ="5px solid #000";
message.style.backgroundImage = "url('https://raw.githubusercontent.com/Hibanelson/DOMProject/master/software.jpg')";
message.style.backgroundSize = "cover";
var messageP = document.createElement("p");
message.appendChild(messageP);
var messagePText = document.createTextNode("For Developers, By Developers");
messageP.appendChild(messagePText);
messageP.style.textAlign = "center";
messageP.style.color = "#fff";
messageP.style.fontSize = "40px";
messageP.style.lineHeight = "60px";
messageP.style.fontWeight = "700";
var anyLang = document.createElement("div");
document.body.appendChild(anyLang);
anyLang.style.width = "1519px";
anyLang.style.height = "265px";
anyLang.style.backgroundColor = "#F5F5F5";
var container4 = document.createElement("div");
anyLang.appendChild(container4);
container4.style.width = "1195px";
container4.style.height = "265px";
container4.style.margin = "auto";
container4.style.padding = "10px";
var container4P = document.createElement("p");
container4.appendChild(container4P);
var container4PText = document.createTextNode("Work With ");
container4P.appendChild(container4PText);
var span3 = document.createElement("span");
container4P.appendChild(span3);
var span3Text = document.createTextNode("Any Language");
span3.appendChild(span3Text);
container4P.style.textAlign = "center";
container4P.style.fontSize = "30px";
container4P.style.fontWeight = "700";
span3.style.color = "rgb(156, 39, 176)";
var container4Images = [];
var imgSrc2 = ["https://raw.githubusercontent.com/Hibanelson/DOMProject/master/node.png","https://raw.githubusercontent.com/Hibanelson/DOMProject/master/php.png","https://raw.githubusercontent.com/Hibanelson/DOMProject/master/ruby.png","https://raw.githubusercontent.com/Hibanelson/DOMProject/master/python.png","https://raw.githubusercontent.com/Hibanelson/DOMProject/master/csharp.png","https://raw.githubusercontent.com/Hibanelson/DOMProject/master/java.png"];
for(var i = 0;i < 6;i++){
container4Images.push(document.createElement("img"));
container4.appendChild(container4Images[i]);    
container4Images[i].src = imgSrc2[i];
    container4Images[i].style.height = "90px";
    container4Images[i].style.marginTop = "40px";
    container4Images[i].style.marginLeft = "60px";
    container4Images[i].style.transition = "all 0.7s ease";
}
container4Images[0].onmouseover = function(){
         "use strict";
        container4Images[0].style.transform 
            = "translateY(-30px)";
    }
container4Images[0].onmouseout = function(){
    "use strict";
        container4Images[0].style.transform 
            = "translateY(0px)";
}
container4Images[1].onmouseover = function(){
         "use strict";
        container4Images[1].style.transform 
            = "translateY(-30px)";
    }
container4Images[1].onmouseout = function(){
    "use strict";
        container4Images[1].style.transform 
            = "translateY(0px)";
}
container4Images[2].onmouseover = function(){
         "use strict";
        container4Images[2].style.transform 
            = "translateY(-30px)";
    }
container4Images[2].onmouseout = function(){
    "use strict";
        container4Images[2].style.transform 
            = "translateY(0px)";
}
container4Images[3].onmouseover = function(){
         "use strict";
        container4Images[3].style.transform 
            = "translateY(-30px)";
    }
container4Images[3].onmouseout = function(){
    "use strict";
        container4Images[3].style.transform 
            = "translateY(0px)";
}
container4Images[4].onmouseover = function(){
         "use strict";
        container4Images[4].style.transform 
            = "translateY(-30px)";
    }
container4Images[4].onmouseout = function(){
    "use strict";
        container4Images[4].style.transform 
            = "translateY(0px)";
}
container4Images[5].onmouseover = function(){
         "use strict";
        container4Images[5].style.transform 
            = "translateY(-30px)";
    }
container4Images[5].onmouseout = function(){
    "use strict";
        container4Images[5].style.transform 
            = "translateY(0px)";
}
var container5 = document.createElement("div");
document.body.appendChild(container5);
container5.style.width = "1195px";
container5.style.height = "325px";
container5.style.margin = "auto";
container5.style.padding = "10px";
var container5P1 = document.createElement("p");
container5.appendChild(container5P1);
var container5P1Text = document.createTextNode("Testemonial");
container5P1.appendChild(container5P1Text);
container5P1.style.textAlign = "center";
container5P1.style.fontSize = "24px";
container5P1.style.fontWeight = "700";
var container5P2 = document.createElement("p");
container5.appendChild(container5P2);
var container5P2Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.");
container5P2.appendChild(container5P2Text);
container5P2.style.textAlign = "center";
container5P2.style.fontSize = "16px";
container5P2.style.lineHeight = "24px";
container5P2.style.fontWeight = "400";
container5P2.style.width = "550px";
container5P2.style.height = "70px";
container5P2.style.marginLeft = "320px";
var container5P3 = document.createElement("p");
container5.appendChild(container5P3);
var container5P3Text = document.createTextNode("-John Doe 2018/10/11");
container5P3.appendChild(container5P3Text);
container5P3.style.fontStyle = "italic";
container5P3.style.fontWeight = "bold";
container5P3.style.textAlign = "center";
var btn3 = document.createElement("button");
container5.appendChild(btn3);
var btn3Text = document.createTextNode("Read More");
btn3.appendChild(btn3Text);
btn3.style.width = "110px";
btn3.style.height = "40px";
btn3.style.marginLeft = "540px";
btn3.style.backgroundColor = "#333";
btn3.style.color = "#fff";
btn3.style.borderRadius = "5px";
btn3.style.border = "none";
btn3.onmouseover = function (){
    this.style.cursor = "pointer";
}
btn3.onmouseout = function (){
    this.style.cursor = "auto";
}
var footer = document.createElement("footer");
document.body.appendChild(footer);
footer.style.width = "1519px";
footer.style.height = "50px";
footer.style.backgroundColor = "#4A148C";
footer.style.padding = "10px";
var footerP = document.createElement("p");
footer.appendChild(footerP);
var footerPText = document.createTextNode("Quazzu Theme Copy Rights 2018 ©");
footerP.appendChild(footerPText);
footerP.style.textAlign = "center";
footerP.style.color = "#fff";
footerP.style.marginTop = "15px";
var scroll2Top = document.createElement("div");
document.body.appendChild(scroll2Top);
var scroll2TopText = document.createTextNode("UP");
scroll2Top.appendChild(scroll2TopText);
scroll2Top.style.height = "30px";
scroll2Top.style.width = "30px";
scroll2Top.style.borderRadius = "50%";
scroll2Top.style.position = "fixed";
scroll2Top.style.bottom = "20px";
scroll2Top.style.left = "20px";
scroll2Top.style.backgroundColor = "#9C27B0";
scroll2Top.style.color = "#fff";
scroll2Top.style.boxSizing = "border-box";
scroll2Top.style.padding = "9px";
scroll2Top.style.fontSize = "10px";
scroll2Top.style.fontWeight = "700";
scroll2Top.style.transition = "all 0.7s ease";
scroll2Top.onmouseover = function (){
    scroll2Top.style.cursor = "pointer";
    scroll2Top.style.transform = "translateY(-15px)";
}
scroll2Top.onmouseout = function (){
    scroll2Top.style.cursor = "auto";
    scroll2Top.style.transform = "translateY(0)";
}
scroll2Top.onclick = function(){
    document.documentElement.scrollTop = "0";
}
