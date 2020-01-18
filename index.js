questions =[{
    question : "1. How many kilogram of sugar costing Rs. 9 per kg must be mixed with 27 kg of sugar costing Rs. 7 per kg so that there may be a gain of 10% by selling the mixture at Rs. 9.24 per kg?",
    option1 : "3",
    option2 :"4",
    option3:"5",
    option4:"6",
    ans:"7fewugfhidjkdcwfvgdsahbjsahjsads<div>adchkjnldk</div>"
},{
    question : "1. How many kilogram of sugar costing Rs. 9 per kg must be mixed with 27 kg of sugar costing Rs. 7 per kg so that there may be a gain of 10% by selling the mixture at Rs. 9.24 per kg?",
    option1 : "3",
    option2 :"4",
    option3:"5",
    option4:"6",
    ans:"7"
},{
    question : "1. How many kilogram of sugar costing Rs. 9 per kg must be mixed with 27 kg of sugar costing Rs. 7 per kg so that there may be a gain of 10% by selling the mixture at Rs. 9.24 per kg?",
    option1 : "3",
    option2 :"4",
    option3:"5",
    option4:"6",
    ans:"7"
},{
    question : "1. How many kilogram of sugar costing Rs. 9 per kg must be mixed with 27 kg of sugar costing Rs. 7 per kg so that there may be a gain of 10% by selling the mixture at Rs. 9.24 per kg?",
    option1 : "3",
    option2 :"4",
    option3:"5",
    option4:"6",
    ans:"7"
}]

onload= f1;
function f1(){
    console.log(1);
    questions.forEach(function(value,index){
        document.getElementById("questions").innerHTML+=  "<div id="+"q"+index+">"+value.question+"</div>"+
        "<div>A."+value.option1+"</div>"+
        "<div>B."+	value.option2+"</div>"+
        "<div>C."+	value.option3+"</div>"+
        "<div>D."+	value.option4+"</div>"+
        "<br/>"+
        "<div id="+index+" style='display:none'>"+value.ans+"<br/>"+"</div>"+
        "<button id="+index+"q"+" onclick="+"getans(event,id)"+">view ans</button>"+
        "<hr>";
    })
}
var flag=true;
document.getElementsByClassName("hidden").style.display ="none";
function getans(event,id){
    var i=parseInt(id);
    console.log("dwdw");
    $("#".id).animate({top:'2%'},1000);
    $("#"+i).fadeToggle();
   
}

var mySidebar = document.getElementById("mySidebar");
// Get the DIV with overlay effect
var f=true;
// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if(f){
      
        document.getElementById("mySidebar").style.display="block";
        document.getElementById("mySidebar").style.width="250px";
        f=false;
    }
    else{
        
        document.getElementById("mySidebar").style.display="none";
        document.getElementById("mySidebar").style.width="220px";
        f=true;
    }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";

}