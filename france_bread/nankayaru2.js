let x = 0;
let y = 0;
let blocklist = ['＃','＠','＊','　'];
function ChangeStage() {
    x = 0;
    while(x == 25){
        x += 1;
    document.getElementById(x).textContent = blocklist[Math.floor(Math.random() * blocklist.length)];
    }
}
function ClickedButton(number){
    x = document.getElementById(number).textContent;
    if (x == '＠'){
        document.getElementById(log).textContent = 'it;s me.';
    }
    if (x == '　'){
    }
    if (x == '＃'){
    }
    if (x == '＊'){

    }
}