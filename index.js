const display=document.querySelector("#display");
const buttons=document.querySelectorAll("button");
buttons.forEach((btn)=> {
    btn.addEventlistener("click",() => {
        if(btn.id === "=") {
            display.value = eval(display.value);
        } else if(btn.id === "ac") {
            display.value="";
        }else if(btn.id=== "de") {
            display.value= display.value.slice(0,-1);
        } else{
            display.value += btn.id;
        }
    });
});
export default{
    setup(){
        const display=ref('');
        const buttons = [
            {value:'ac',type:'clear'}
            
        ]
    }
}

let displaye=document.getElementById('displaye');
switch(buttons) {
    case id=='9':{
        display.value=9;
    }
    case id=='8':{
        display.value=8;
    }
    case id=='7':{
        display.value=7;
    }
    case id=='6':{
        display.value=6;
    }
    case id=='5':{
        display.value=5;
    }
    case id=='4':{
        display.value=4;
    }
    case id=='3':{
        display.value=3;
    }
    case id=='2':{
        display.value=2;
    }
    case id=='1':{
        display.value=1;
    }
    
}
let result;
function calc() {
    if()
}