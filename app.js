const number=document.querySelectorAll('#number');
const display=document.querySelector('#display');
const clear=document.querySelector('#clear');
const deleter=document.querySelector('#delete');
const operation=document.querySelectorAll('#operation')
const dot=document.getElementById('dot');
const equal=document.getElementById('equal');
const previousRes=document.getElementById('previousRes');
console.log(number);
display.innerText="";
var previousOperand;
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
function add (a,b) {
    a=parseFloat(a);
    b=parseFloat(b);
	return round(a+b);
}
function subtract (a,b) {
    a=parseFloat(a);
    b=parseFloat(b);
	return round(a-b);
}
function multiply (a,b){
    a=parseFloat(a);
    b=parseFloat(b);
    return round(a*b);
}
function divide(a,b){
    a=parseFloat(a);
    b=parseFloat(b);
    return round(a/b);
}
function compute(a,b,operate){
     if(operate==="+") return add(a,b);
     if(operate==="-") return subtract(a,b);
     if(operate==="x" || operate==="*") return multiply(a,b);
     if(operate==="/") return divide(a,b);
}
number.forEach((element)=>{
      element.addEventListener("click", function (e) {
        //console.log(e.target.innerText);
        if (e.target.innerText == "0" && display.innerText == "0") return;
        else if(e.target.innerText!="0"&& display.innerText=="0"){display.innerText=e.target.innerText;}
        else if(display.innerText.length<8){
          display.innerText += e.target.innerText;
        }
      });
    

})
clear.addEventListener('click', function(){
  display.innerText="";
  previousOperand=undefined;
  previousRes.innerText='previous result: ';
})
deleter.addEventListener('click', function(){
  let newResult=display.innerText.split('');
  newResult.pop()
  newResult=newResult.join('')
  display.innerText=newResult;
})
operation.forEach((element)=>{
  element.addEventListener('click', function(e){
    //HERE IS OUR LAST PROBLEM REGARDING MULTIPLE COMPUTATIONS
    
    
    if((previousOperand!=null || previousOperand!=undefined) && display.innerText!=""){

      var copy=display.innerText;
      display.innerText="";
      previousOperand=compute(previousOperand,copy,calculateVersion);
      
      console.log("previousOp"+previousOperand);
    console.log("current op"+copy);}
    else{previousOperand=display.innerText;
    display.innerText="";}
    calculateVersion=e.target.innerText;
    
  })
})
dot.addEventListener('click', function onceClick(e){
  if(display.innerText.includes('.')){return;}
  else{display.innerText+=".";}
  
})
equal.addEventListener('click', function(){
  if(previousOperand!=null && display.innerText==""){display.innerText=previousOperand;}
  else if(previousOperand=="" || previousOperand==null){display.innerText=display.innerText;}
  else if(display.innerText=="0" && calculateVersion=="/"){display.innerText="nice try"}
  else{display.innerText=compute(previousOperand,display.innerText,calculateVersion)
  previousOperand=undefined;}
})



window.addEventListener('keydown', function(event) {
  let x = event.key;
  console.log(x);
  function operatorCalculus(){
    if((previousOperand!=null || previousOperand!=undefined) && display.innerText!=""){
  
      let copy=display.innerText;
      display.innerText="";
      previousOperand=compute(previousOperand,copy,calculateVersion);
      
      console.log("previousOp"+previousOperand);
    console.log("current op"+copy);}
    else{previousOperand=display.innerText;
    display.innerText="";}
    calculateVersion=x;
    
  }
  switch(x) {
      case '0':
          if (x == "0" && display.innerText == "") return;
          else if(display.innerText.length<8){
          display.innerText += x;}
          break;
      case '1':
        if(display.innerText.length<8){
          display.innerText +=x;}
          break;
      case '2':
          if(display.innerText.length<8){
          display.innerText += x;}
          break;
      case '3':
          if(display.innerText.length<8){
          display.innerText += x;}
          break;
      case '4':
          if(display.innerText.length<8){
          display.innerText +=x;}
          break;
      case '5':
          if(display.innerText.length<8){
          display.innerText += x;}
          break;
      case '6':
          if(display.innerText.length<8){
          display.innerText += x;}
          break;
      case '7':
          if(display.innerText.length<8){
          display.innerText += x;}
          break;
      case '8':
          if(display.innerText.length<8){
          display.innerText +=x;}
          break;
      case '9':
          if(display.innerText.length<8){
          display.innerText +=x;}
          break;
      case '/': operatorCalculus();
            break;
      case '*':operatorCalculus();
          break;      
      case '+':operatorCalculus();
          break;      
      case '-':operatorCalculus();
          break; 
      case '=':   if(previousOperand!=null && display.innerText==""){display.innerText=previousOperand;}
      else if(previousOperand=="" || previousOperand==null){display.innerText=display.innerText;}
      else if(display.innerText=="0" && calculateVersion=="/"){display.innerText="nice try"}
      else{display.innerText=compute(previousOperand,display.innerText,calculateVersion)
      previousOperand=undefined;}  
      break;
      case 'Enter':   if(previousOperand!=null && display.innerText==""){display.innerText=previousOperand;}
      else if(previousOperand=="" || previousOperand==null){display.innerText=display.innerText;}
      else if(display.innerText=="0" && calculateVersion=="/"){display.innerText="nice try"}
      else{display.innerText=compute(previousOperand,display.innerText,calculateVersion)
      previousOperand=undefined;}    
  }
})
