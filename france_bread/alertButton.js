let x=0; a=0; b=0; c=0; d=0; e=0; f=0; g=0; h=0; i=0;
function alertButton(name){
    console.log(name+'のボタンが押されました');
    x++
    console.log('これまでにボタンが押された数は'+x+'回です')
    if(name===1){
        a++
        console.log('これまでに1のボタンが押された数は'+a+'回です')
    } else if(name===2){
        b++
        console.log('これまでに2のボタンが押された数は'+b+'回です')
    } else if(name===3){
        c++
        console.log('これまでに3のボタンが押された数は'+c+'回です')
    } else if(name===4){
        d++
        console.log('これまでに4のボタンが押された数は'+d+'回です')
    } else if(name===5){
        e++
        console.log('これまでに5のボタンが押された数は'+e+'回です')
    } else if(name===6){
        f++
        console.log('これまでに6のボタンが押された数は'+f+'回です')
    } else if(name===7){
        g++
        console.log('これまでに7のボタンが押された数は'+g+'回です')
    } else if(name===8){
        h++
        console.log('これまでに8のボタンが押された数は'+h+'回です')
    } else if(name===9){
        i++
        console.log('これまでに9のボタンが押された数は'+i+'回です')
    } 
    document.getElementById("allbutton").textContent = 1*a+2*b+3*c+4*d+5*e+6*f+9*g+8*h+9*i
}