var calculator=document.querySelector('.calculator');
var keys=calculator.querySelector('.container');
        var operand1=0;
        var operand2=null;
        var operator=null;
        function isOperator(value) {
          return value == "+" || value == "-" || value == "*" || value == "/";
      }
      

keys.addEventListener("click",function(event){
    if(event.target.matches('button')){
        var key=event.target;
        // var value=key.dataset.action;

        
        var value = key.getAttribute('data-action');
        var text = display.textContent.trim();

        if(isOperator(value)){
          operator=value;
          operand1=parseFloat(text);
          display.textContent="";
        }else if(value=="clear"){
          display.textContent="";
        }
        else if(value=="sign"){
          operand1=parseFloat(text);
          operand1=-1 * operand1;
          display.textContent=operand1;

        }
        else if(value=="."){
         if(text.length && !text.includes('.')){
          display.textContent=text+'.';
        }
        }
        else if(value=="%"){
          operand1=parseFloat(text);
          operand1=operand1/100;
          display.textContent=operand1;
        }
        else if (value == "=") {
          operand2 = parseFloat(text);
          var result = eval(operand1 + ' ' + operator + ' ' + operand2);
          if (result) {
              display.textContent = result;
              operand1 = result;
              operand2 = null;
              operator = null;
          }
      }
       
        else{
          display.textContent+=value;
        }
        


       
    }
    
});






// var display=calculator.querySelector('#display');
// keys.addEventListener("click",function(event){
//   // if(event.target.matches('button')){
//   //   var key=event.target;
//   //   var action=key.dataset.action;
//   //   var keyContent=key.innerHTML;
//   //   var displayContent=display.innerHTML;

//   //   if(!action){
//   //     if(displayContent==='0'){
//   //       display.textContent=keyContent;
//   //     }else{
//   //       display.textContent=displayContent + keyContent;
//   //     }
//   //   }
//   //   if (action === 'decimal') {
//   //     display.textContent = displayContent + '.';
//   //   }
//   //   if (action === 'clear') {
//   //     display.textContent = "";
//   //   }
  
  

//   }
// })