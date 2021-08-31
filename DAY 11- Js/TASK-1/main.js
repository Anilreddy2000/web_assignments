const fruits = ["Banana", "Orange", "Apple", "Mango"];
let len=fruits.length;
let text = "<ul>";
for (let i = 0; i < len; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;

function myfunction(){
    document.getElementById("btn").innerHTML=myfunction1();

}
function myfunction1(){
    document.getElementById("text1").innerHTML=text.includes();
}