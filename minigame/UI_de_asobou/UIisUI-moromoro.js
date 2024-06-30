let talknow = 0;
let x = 0;
let y = 0;  
let z = 0;
let serif1
let serif2
let serif3
let msg1 = [];
let msg2 = [];
let msg3 = [];
let rmse = [];
let room = 0; //部屋の区分です。シーンとも言う
let phase = 0;//部屋内の区分です。もうrpgの応用よね
let readmessage = 0;
let haveaddress = 1;
let luna = {
    name: 'ルナ', //名前変更イベントとかで変えれるようにする用
    likability: 50,
}
function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));} //今回使うかわからんけど

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    playername = document.getElementById("InputPlayername").value;
    if(playername == ''){playername = 'あなた';document.getElementById('SuguKieru').innerHTML= '';reset();}else{document.getElementById('SuguKieru').innerHTML= '';reset();
}}});
function reset(){
  x = 0; y = 0; z = 0;
  room = 0;
 chara = ['？？？',playername,'？？？',playername,'ルナ',playername,'ルナ',playername,'ルナ','ルナ','ルナ',playername,'ルナ',playername,'コッペくん']
  msg1 = ['..ぇ.....て...','ん....?','..ぇ..きて...','んん...?','ねぇ起きて！！','ん？あ、おはよう','おはようじゃなくて!','まあそのくらいならもうちょっと寝てても..','確かに...?','じゃなくて！','もうみんな帰っちゃったよ？！','んぇ？','そうかなぁ...','おけ、れっつご〜','えと..'];
  msg2 = ['','','','','','','もう3時だけど?!','','','なんで学校来てからずっと寝てるの？！','','まあそのくらい許されるって','てか、帰るよ！もう門閉まっちゃうから！！','','これはこんな感じに話が進むお話です！'];
  msg3 = ['','','','','','','','','','','','','','','やりたかったらすすんでってね〜？'];
  rmse = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
  talknow = 1; readmessage = 0;
  Nextmsg();
}
function ch(name){document.getElementById('CharacterName').textContent = name;}
function s1(msg){document.getElementById('serif1').textContent = msg;}
function s2(msg){document.getElementById('serif2').textContent = msg;}
function s3(msg){document.getElementById('serif3').textContent = msg;}
function choicese2(){document.getElementById('Choicese').innerHTML = '<button id="Choice1" class="Choice" onclick="choice1()"></button><br><br><button id="Choice2" class="Choice" onclick="choice2()"></button>';}
function choicese3(){document.getElementById('Choicese').innerHTML = '<button id="Choice1" class="Choice" onclick="choice1()"></button><br><br><button id="Choice2" class="Choice" onclick="choice2()"></button><br><br><button id="Choice3" class="Choice" onclick="choice3()"></button>';}
function choicese4(){document.getElementById('Choicese').innerHTML = '<button id="Choice1" class="Choice" onclick="choice1()"></button><br><br><button id="Choice2" class="Choice" onclick="choice2()"></button><br><br><button id="Choice3" class="Choice" onclick="choice3()"></button><br><br><button id="Choice4" class="Choice" onclick="choice4()"></button>';}
function c1(msg){document.getElementById('Choice1').textContent = msg;}
function c2(msg){document.getElementById('Choice2').textContent = msg;}
function c3(msg){document.getElementById('Choice3').textContent = msg;}
function c4(msg){document.getElementById('Choice4').textContent = msg;}
function Nextmsg(){
    ch(chara[readmessage]);
    s1(msg1[readmessage]);
    s2(msg2[readmessage]);
    s3(msg3[readmessage]);
    room = rmse[readmessage];
}
document.addEventListener('keydown', (event) => {
    if(talknow == 1){
    if (event.key === 'z') {
        readmessage++;
        if (readmessage < msg1.length) {
            Nextmsg();
        } else {// 全てのメッセージを表示し終えた場合の処理
            talknow = 0;
            if(room == 1){
                GoRoom();
            }
        }
    }
}});

function GoRoom(){
if(room == 1){
    phase = 1;
    ch(playername); s1('さて、何をしようか？'); s2(''); s3('');
    choicese2();
    c1('スマホを見る');
    c2('寝る');//もうちょい追加予定}
}
}
async function choice1(){
if(room == 1){
if(phase == 1){
    phase = 2;
    choicese4();
    c1('JINEを見る');
    c2('ぽけったーを見る');
    c3('ゲームをする');//この選択肢は今までのやつをいろいろとねじ込みたい
    c4('やっぱやめる');
    s1('どうする？');
} else if(phase == 2){//JINE
    if(haveaddress <= 0){s1('友達がいない....'); haveaddress = 0;}
    else{
        phase = 3;//JINE mode
        s1('ぽけったーを見よう！')
        await delay(1000);
        s1('どうやらメンテナンス中らしい.....w')
        phase = 1;
        //s1('誰に話しかけようか...');
        //jineopen(); //JINEを開く
        //右側に画面を出したい
    }

}
}
}
async function choice2(){
    if(room == 1){
    if(phase == 1){
        s1('寝よう！！');
        await delay(1000);
        s1(playername + 'は、死にました')
        await delay(1000);
        s1('error500が発生しました。');//500は、「サーバー側に以上が発生したりやプログラムにミスがあった場合などで返されるコード」だぜ
        await delay(1000);
        s1('リブートを開始します。');
        await delay(1000);
        open('about:blank', '_self').close();//できてないときは無理やり終わらせちゃおう！作戦(まじでこのゲーム大変説ある)
    } else if(phase == 2){//JINE
        if(haveaddress <= 0){s1('友達がいない....'); haveaddress = 0;}
        else{
            phase = 4;//ぽけったー
            s1('ぽけったーを見よう！')
            await delay(1000);
            s1('どうやらメンテナンス中らしい...')//一生メンテナンスしてるサイトってことで...
            phase = 2;
        }

    }
    } 
}
function choice3(){
    if(room == 1){
    if(phase == 2){//げーむ
        phase = 5;
        choicese4();
        s1('何をしようか..?');
        c1('clicker_of_mugen');
        c2('stroll_game');
        c3('vending_machine');
        c4('やっぱやめる');
    }
    }
}
function choice4(){
    if(room == 1){
    if(phase == 2){
        phase = 1;
        choicese2();
        s1('さて、何をしようか？'); s2(''); s3('');
        c1('スマホを見る');
        c2('寝る');
    } else if(phase == 5){
        phase = 1;
        choicese2();
        s1('さて、何をしようか？'); s2(''); s3('');
        c1('スマホを見る');
        c2('寝る');
    }
}
}