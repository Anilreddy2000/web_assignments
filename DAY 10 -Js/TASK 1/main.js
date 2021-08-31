var circle =document.getElementById("circle");
        var upbtn =document.getElementById("upbtn");
        var downbtn =document.getElementById("downbtn");
        var rotateValue = circle.style.transform;
        var rotatesum;
        upbtn.onclick=function(){
        rotatesum = rotateValue + "rotate(-90deg)";
        circle.style.transform=rotatesum;
        rotateValue=rotatesum;
        }