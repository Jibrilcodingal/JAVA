//clear the display
function clearscreen(){
    document.getElementById("resuly").value="";

}

function setscreenvalue(value){
    document.getElementById("result").value + value;

}

function calculateresult(){
    const resultelement=document.value.trim();

    if(expression===''){
        resultelement.value="enter an expression";
        return;
    }
    try{
        resultelement.value=eval(expression);
    } catch(e){
        resultelement.value="Invalid expression"
    }
}