// Asynchronous is a non-blocking architecture , so the executing one is not dependent on another one 

function sum(){
    setTimeout(()=>{
        console.log("2");
    },2000);
 }
 function example(){
    console.log("1");
    sum();
    console.log("3");
 }
 example();