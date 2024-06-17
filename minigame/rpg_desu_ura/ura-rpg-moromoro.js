let playername = 'player';
let playernumber = 0;
let playernametrick = 0;
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 1;
let playerdefense = 0;
let playerexp = 0;
let playerbuff = 0;
let playerskillbuff = 0;
let playerskilldebuff = 0;
let playerpower = 1;
let playershell = 1;
let playermp = 0;
let playermaxmp = 10;
let enemyhealth = 0;
let enemymaxhealth = 0;
let enemydebuff = 0;
let enemyskilldebuff = 0;
let playerlevel = 1;
let enemylevel = 1;
let turn = 0;
let turncount = 0;
let turnofcount = 0;
let phase = 0;
let w = 0;
let x = 0;
let y = 0;
let z = 0;
let damage = 0;
let magic1 = 0;
let magic2 = 0;
let magic3 = 0;
let learnedmagic = 0;
let learnmagic = 0;
let potion = 3;
let bomb = 3;
let skipcard = 3;
let enemyname = 0;
let enemynames =  ["古書館の魔術師", "トラブルメーカーな天才少女", "誰もが恐れる風紀委員長", "自称清楚系超天才病弱美少女ハッカー",'黒服'
                   ,"アリウス生徒","ユスティナ信徒","ヴァルキューレ生徒","ゲヘナ生徒","風紀委員","救急医学部員","温泉開発部員","山海経生徒","トリニティ生徒","正義実現委員会部員","百鬼夜行生徒","魑魅一座","ミレニアム生徒","スケバン","ヘルメット団","オートマタ"];
                   // 名前の元 全てブルーアーカイブ
let enemyprefixe1 = 0;
let enemyprefixe2 = 0;
let enemyprefixes = ['コッペパン好きな','猫耳の','メイド服を着た','かっこいい','ボカロ好きの','頭のおかしくなった','マカロンが好きな','Discord信者の','勇者..のコスプレをした','魔王..のコスプレをした','ゾンビ..のコスプレをした','ダークモカチップクリームフラペチーノを持った','猫になった','真のヒロイン'
                     ,'ドンファイのマスターフルコンを目指す','どっちかっていうと猫派な','犬が嫌いな','借り暮らしの','その日暮らしの','モス通いの','手に何か持ってないと落ち着かない','西の高校生探偵','東の高校生探偵','元','課題に追われる','ツインテ狩りの','白水色が好きな','カービィ使いの','承認欲求高めの'
                     ,'Mac依存症の','ぬいぐるみ依存症の','レモンティー依存症の','ヘッドフォン依存症の','ZEPETO依存症の','つぶグミ依存症の','黒ピンク依存症の'
                     ,'「ぼっち・ざ・ろっく」が好きな', '「よふかしのうた」が好きな','「らき☆すた」が好きな','Minecraftが好きな','弾幕ゲームが好きな','第五人格が好きな','プロセカが好きな','#コンパスが好きな'];
let saydefeats = 0;
let NStimeout = 0;
let skillcooldown1 = 0;
let skillcooldown2 = 0;
let allowchange = 0;
function tekiou(){
    document.getElementById('EnemyHealth').textContent = enemyhealth;
    document.getElementById('PlayerHealth').textContent = playerhealth;
}
function bufftekiou(){
    if(enemydebuff == 0){document.getElementById('EnemyDebuff').textContent = '';}
    if(enemydebuff == 1){document.getElementById('EnemyDebuff').textContent = 'poison';}
    if(enemydebuff == 2){document.getElementById('EnemyDebuff').textContent = 'deadly poison';}
    if(playerbuff == 0){document.getElementById('PlayerBuff').textContent = '';}
    if(playerbuff == 1){document.getElementById('PlayerBuff').textContent = 'power';}
    if(playerbuff == 2){document.getElementById('PlayerBuff').textContent = 'morepower';}
    if(playerbuff == 3){document.getElementById('PlayerBuff').textContent = 'shell';}
    if(playerbuff == 4){document.getElementById('PlayerBuff').textContent = 'moreshell';}
    if(playerbuff == 5){document.getElementById('PlayerBuff').textContent = 'luck';}
    if(playerbuff == 6){document.getElementById('PlayerBuff').textContent = 'great luck';}
    if(enemyskilldebuff == 0){document.getElementById('EnemySkillDebuff').textContent = '';}
    if(enemyskilldebuff == 1){document.getElementById('EnemySkillDebuff').textContent = 'your destiny';}
    if(playerskillbuff == 0){document.getElementById('PlayerSkillBuff').textContent = '';}
    if(playerskillbuff == 1){document.getElementById('PlayerSkillBuff').textContent = 'suichu gengan';}
    if(playerskillbuff == 2){document.getElementById('PlayerSkillBuff').textContent = '';}
    if(playerskillbuff == 3){document.getElementById('PlayerSkillBuff').textContent = '';}
    if(playerskillbuff == 4){document.getElementById('PlayerSkillBuff').textContent = '';}
    if(playerskillbuff == 5){document.getElementById('PlayerSkillBuff').textContent = 'slacking off';}   
    if(playerskillbuff == 6){document.getElementById('PlayerSkillBuff').textContent = 'Abi Eshuf';} 
    if(playerskilldebuff == 0){document.getElementById('PlayerSkillDebuff').textContent = '';}
    if(playerskilldebuff == 1){document.getElementById('PlayerSkillDebuff').textContent = 'summon oz';}
}
function enemywithelementtekiou(){
    if(enemywithelement == 0){document.getElementById('EnemyWithElement').textContent = '';}
    if(enemywithelement == 1){document.getElementById('EnemyWithElement').textContent = 'fire'; document.getElementById('EnemyWithElement').style.color = '#F15B47';}// styleで文字の色を変えたい
    if(enemywithelement == 2){document.getElementById('EnemyWithElement').textContent = 'water'; document.getElementById('EnemyWithElement').style.color = '#6495ED';}
    if(enemywithelement == 3){document.getElementById('EnemyWithElement').textContent = 'thunder'; document.getElementById('EnemyWithElement').style.color = '#954C93';}
    if(enemywithelement == 4){document.getElementById('EnemyWithElement').textContent = 'ice';   }
    if(enemywithelement == 5){document.getElementById('EnemyWithElement').textContent = 'grass'; }
    if(enemywithelement == 6){document.getElementById('EnemyWithElement').textContent = 'wind';  }
    if(enemywithelement == 7){document.getElementById('EnemyWithElement').textContent = 'rock';  }
} //1=炎 2=水 3=雷 4=氷 5=草 6=風 7=岩
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // 遅延やってみたかったの

// beginで名前とか全部やります
function begin(){
    if (document.getElementById('NameInputText').value !== ''){playername = document.getElementById('NameInputText').value;}
    document.getElementById('PlayerName').textContent = playername;
    if(playername == 'alice'){
        playernametrick = 1;
        playernumber = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #4f4c7d;padding: 2px 3px;background: #e8e8e8;cursor: pointer;}';
        document.getElementById('AdditionalPlayerPoint').innerHTML = '<br><i>エネルギー:</i><i id="AliceEnelgy"></i>';
        alicetekiou()
        // "alice"(アリス)[ブルーアーカイブ]
        // EX 敵に攻撃力の2倍のダメージ。エネルギーの溜め具合によってダメージ量は3倍/4倍に増加します。
        // 「世界の 法則が 崩壊します！」
        // NS 2の倍数のターンの時、エネルギーを1チャージする。(最大2)
        // 「光よ！」
        // PS EXスキルを発動した後、一時的に攻撃力が1.5倍/2倍/3倍になる。
        // 「覚醒せよ、スーパーノヴァ！」
    } else if(playername == 'toki'){
        playernametrick = 1;
        playernumber = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #3acbe8;padding: 2px 3px;background: #ffffff;cursor: pointer;}';
        document.getElementById('AdditionalPlayerPoint').innerHTML = '';
        // "toki"(トキ))[ブルーアーカイブ]
        // EX 重装甲を着て、シールドを獲得する。
        // この状態の時にslashを使うと通常の1.5倍のダメージ。しかし3回使うと重装甲は取れてしまう。
        // 「システム：アビ・エシュフ」
        // NS 6の倍数のターンの時、敵に攻撃力の2倍のダメージ。重装甲時は3倍のダメージ。
        // 「戦術的判断」
        // PS 重装甲時でのslashの使用回数に応じ、攻撃力が一時的に1.5倍/2倍/2.5倍になる。
        // 「目には目を」
    } else if (playername == 'utage'){
        playernametrick = 1;
        playernumber = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #C7A252; padding: 2px 3px;background: #717375; cursor: pointer; color: #ffffff;} body{background-color: #4D4D4F; color: #ffffff;}';
        // "utage"(ウタゲ)[アークナイツ]
        // EX 2ターン動けないが、体力が1割ずつ回復する. id = 5
        // NS 2ターンごとに攻撃力上昇。
        // PS 攻撃が命中すると、少し回復する
        // SS 回復アイテムが使用できない。
    } else if(playername == 'monasan'){
        playernametrick = 1;
        playernumber = 1;
        playername = 'mona';
        document.getElementById('PlayerName').textContent = playername;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #5F4894;padding: 2px 3px;background: #6495ED;cursor: pointer;}';
        document.getElementById('ChangeButton').innerHTML = '<br><br><button class="button" onclick="ChangePlayer()">change</button>';
        // "monarin"(モナ&フィッシュル)[原神]
        // EX モナ:次の攻撃4倍。水付着。スタン。 //ok
        //    フィ:敵に2倍のダメージを与え、雷付着。攻撃を一回回避する。 //ok
        // NS モナ:3ターンごとに壁を召喚。毎ターン水付着｡(2ターン消滅) //ok
        //    フィ:4ターンごとにオズを召喚し、毎ターン雷付着｡(2ターン消滅) //ok
        // PS changeを使うとプレイヤーが切り替わる(1ターン1回) //ok
        // SS 敵が水/雷付着状態の場合、雷/水を当てると1.5倍のダメージ。 //ok
    }
    document.getElementById('Thisdisappearsafterthegamestartbegin').innerHTML = ' ';
    document.getElementById('Thisdisappearsafterthegamestartnameinput').innerHTML = ' ';
    reset()
}
function reset() {
    turn = 0;
    turncount = 0;
    playerhealth = 0;
    playermaxhealth = 0;
    playerattack = 1;
    playerdefense = 0;
    playerexp = 0;
    playerpower = 1;
    playershell = 1;
    enemyhealth = 0;
    enemymaxhealth = 0;
    playerlevel = 1;
    enemylevel = 1;
    x = 0;
    y = 0;
    magic1 = 0;
    magic2 = 0;
    magic3 = 0;
    learnedmagic = 0;
    potion = 3;
    bomb = 3;
    skipcard = 3;
    skillcooldown1 = 0;
    SkillCooldownDecrease()
    allowchange = 0;
    aliceenelgy = 1; // アリスのエネルギーです。
    alicepower = 1; // アリスのパワーです。
    tokienelgy = 0; // トキのエネルギーです。
    tokipower = 1; // トキのパワーです。
    utagepower = 0; // ウタゲのパワーです。
    tekiou()
    document.getElementById('log').textContent = 'ゲーム開始です！！';
    window.setTimeout(start,1000);
    if(playername == 'alice'){alicetekiou();};
}
function start(){
    playerhealth = 10;
    playermaxhealth = 10;
    playermp = playermaxmp;
    enemyhealth = 5;
    enemymaxhealth = 5;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)];
    document.getElementById("EnemyName").textContent = enemyname;
    playerbuff = 0;
    playerskillbuff = 0;
    enemydebuff = 0;
    enemyskilldebuff = 0;
    skillcooldown1 = 0;
    if(playername == 'alice'){playerhealth = 6; playermaxhealth = 6; playermaxmp = 8; playermp = playermaxmp;}
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    tekiou();
    bufftekiou();
    turncountincrease();
    playerturn();
}
function turncountincrease(){turncount += 1; document.getElementById('TurnCount').textContent = turncount;}
function SkillCooldownDecrease(){
    if (skillcooldown1 > 0){skillcooldown1 -= 1;};
    if (skillcooldown1 == 'bomernull'){if(bomertension >= 10){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}};
    if (skillcooldown1 == 'tokinull'){if(playerskillbuff == 6){document.getElementById('Skillbutton').innerHTML = ' ';}else skillcooldown1 = 5;;};
    if (skillcooldown2 > 0){skillcooldown1 -= 2;};
}
async function NSaction(){
    if((turncount % 3) == 0 && playername == 'alice'){
        aliceenelgy += 1;
        if(aliceenelgy > 3){aliceenelgy = 3;};
        alicetekiou();
        document.getElementById('log').textContent = 'チャージします。';
        NStimeout = 1;
    } else if((turncount % 7) == 0 && playername == 'toki'){
        disappear();
        x = enemyhealth;
        y = enemyhealth;
        if(playerskillbuff == 6){z = (playerattack * playerpower * 3 * tokipower)}else{z = (playerattack * playerpower * tokipower * 2)};
        x -= z;
        x = Math.ceil(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        tekiou();
        if(playerskillbuff == 6){document.getElementById('log').textContent = 'やあぁっ！';}
        document.getElementById('log').textContent = '行きます。';
        await delay(1000);
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if(enemyhealth <= 0){enemyhealth = 0; tekiou();};
        if (enemyhealth == 0){window.setTimeout(killedenemy,1000);}
        else {window.setTimeout(enemieturn,1000);}
    } else if ((turncount % 5) == 0 && playername == 'utage'){
        utagepower += 1;
        document.getElementById('log').textContent = '私が必要かな？';
        NStimeout = 1;
    } else if((turncount % 3) == 0 && playername == 'mona' && playerskillbuff !== 1){
        playerskillbuff = 1;
        bufftekiou();
        monatime = 3;
        x = Math.ceil(playermaxhealth * 0.4);
        document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#0067C0">unmeino kyoei</font></b>  <br><span id="MonaKyoeiHealth">0</span>/<span id="MonaKyoeiMaxHealth">0</span>';
        monakyoeimaxhealth = x; monakyoeihealth = x;
        monakyoeitekiou();
        enemywithelement = 2; //1=炎 2=水 3=雷 4=氷 5=草 6=風 7=岩
        enemywithelementtekiou();
        document.getElementById('log').textContent = monaNSvoice[Math.floor(Math.random() * monaNSvoice.length)];
        NStimeout = 1;
    } else if((turncount % 4) == 0 && playername == 'fischl'){
        playerskilldebuff = 1;
        bufftekiou();
        oztime = 3;
        document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#7F1184">Oz</font>';
        document.getElementById('log').textContent = fischlNSvoice[Math.floor(Math.random() * fischlNSvoice.length)];
        NStimeout = 1;
    }
}
async function playerturn(){
    if(playerskillbuff == 5){
        disappear();
        await delay(1000);
        x = Math.ceil(playerdefense * 0.5);
        if(x == 0){x = 1};
        playerhealth += x;
        if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
        tekiou();
        document.getElementById('log').textContent = '体力が' + x + '回復した！';
        skillcooldown1 = 6;
        playerskillbuff = 0;
        bufftekiou();
        window.setTimeout(enemyorplayer, 1000);
    } //ウタゲさんの動き
    else {
    if (turn !== 3){turn = 1;};
    x = 1;
    if (playerskillbuff == 1){
        if(enemywithelement == 3){x = (enemyhealth * 0.5); x = Math.ceil(x); enemyhealth -= x; tekiou(); document.getElementById('log').textContent = '敵は感電し、' + x + 'のダメージを受けた!'; x = 1; if(enemyhealth <= 0){enemyhealth = 0; tekiou(); x = 0; window.setTimeout(killedenemy,1000);};};
        if(x == 1){enemywithelement = 2;}else if(x == 0){enemywithelement = 0; await delay(1000);} //1=炎 2=水 3=雷 4=氷 5=草 6=風 7=岩
        monatime -= 1;
        enemywithelementtekiou(); //モナさんの水中幻願のやつ
    }
    if (playerskilldebuff == 1){
        if(enemywithelement == 2){x = (enemyhealth * 0.5); x = Math.ceil(x); enemyhealth -= x; tekiou(); document.getElementById('log').textContent = '敵は感電し、' + x + 'のダメージを受けた!'; x = 1; if(enemyhealth <= 0){enemyhealth = 0; tekiou(); x = 0; window.setTimeout(killedenemy,1000);};};
        if(x == 1){enemywithelement = 3;}else if(x == 0){enemywithelement = 0; await delay(1000);} //1=炎 2=水 3=雷 4=氷 5=草 6=風 7=岩
        oztime -= 1;
        enemywithelementtekiou(); //フィッシュルのオズのやつ
    }
    if(x==1){
    if (NStimeout == 1){await delay(1000); NStimeout = 0;};
    if (playernumber == 1 && skillcooldown1 == 0){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}
    else if(playernumber == 2 && skillcooldown2 == 0){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';};
    allowchange = 0;
    phase = 1;
    document.getElementById('log').textContent = 'あなたのターンです！';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'magic';
    document.getElementById('select3').textContent = 'tools';
    document.getElementById('back').textContent = 'pass';
    errorcheck();
    }
    }
}
// 選択ボタン
function select1(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうやって攻撃する？';
        document.getElementById('select1').textContent = 'slash';
        document.getElementById('select2').textContent = 'double slash';
        document.getElementById('select3').textContent = 'slash of light';
        document.getElementById('back').textContent = 'back';
        phase = 2;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の攻撃!';
        window.setTimeout(slash, 1000)
    } else if (phase == 3) {
        disappear()
        if (magic1 !== 0){
            z = magic1
            magic()
        } else {
            document.getElementById('log').textContent = 'you dont have magic...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 4) {
        disappear()
        if (potion > 0) {
            document.getElementById('log').textContent = playername + 'はpotionを使用した!!';
            window.setTimeout(Potion, 1000)
        } else {
            document.getElementById('log').textContent = 'not enough potion...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 5){
        disappear()
        playerattack += 1
        document.getElementById('log').textContent = '攻撃力が上がった!';
        window.setTimeout(nextenemy,1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic1 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic1 = learnmagic
        window.setTimeout(nextenemy,1000)
    }
}
function select2(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうする？';
        document.getElementById('select1').textContent = magic1;
        document.getElementById('select2').textContent = magic2;
        document.getElementById('select3').textContent = magic3;
        document.getElementById('back').textContent = 'back';
        phase = 3;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の攻撃!!';
        window.setTimeout(doubleslash, 1000)
    } else if (phase == 3) {
        disappear()
        if (magic2 !== 0){
            z = magic2
            magic()
        } else {
            document.getElementById('log').textContent = 'you dont have magic...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 4) {
        disappear()
        if (bomb > 0) {
            document.getElementById('log').textContent = playername + 'はbombを使用した!!';
            window.setTimeout(Bomb, 1000)
        } else {
            document.getElementById('log').textContent = 'not enough bomb...';
            window.setTimeout(playerturn, 1000)
        }
        
    } else if (phase == 5){
        disappear()
        phase = 0;
        playerdefense += 1
        document.getElementById('log').textContent = '防御力が上がった!';
        window.setTimeout(nextenemy, 1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic2 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic2 = learnmagic
        window.setTimeout(nextenemy, 1000)
    }
}
function select3(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうやって攻撃する？';
        document.getElementById('select1').textContent = 'potion x' + potion;
        document.getElementById('select2').textContent = 'bomb x' + bomb;
        document.getElementById('select3').textContent = 'skipcard x' + skipcard;
        document.getElementById('back').textContent = 'back';
        phase = 4;
    } else if (phase == 2) {
        disappear()
        if(playerskillbuff == 6){document.getElementById('log').textContent = tokiEXvoice2[Math.floor(Math.random() * tokiEXvoice2.length)];}
        else {document.getElementById('log').textContent = playername + 'の一閃!!';};
        window.setTimeout(slashoflight, 1000)
    } else if (phase == 3) {
        disappear()
        if (magic3 !== 0){
            z = magic3
            magic()
        } else {
            document.getElementById('log').textContent = 'you dont have magic...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 4) {
        disappear()
        if (skipcard > 0) {
            document.getElementById('log').textContent = playername + 'はskipcardを使用した!!';
            window.setTimeout(Skipcard, 1000)
        } else {
            document.getElementById('log').textContent = 'not enough skipcard...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 5){
        phase = 0;
        if (learnedmagic == 1){learnmagic = 'heal'}
        else if (learnedmagic == 2){learnmagic = 'power'}
        else if (learnedmagic == 3){learnmagic = 'shell'}
        else if (learnedmagic == 4){learnmagic = 'poison'}
        else if (learnedmagic == 5){learnmagic = 'healer than'}
        else if (learnedmagic == 6){learnmagic = 'luck'}
        else if (learnedmagic == 7){learnmagic = 'more power'}
        else if (learnedmagic == 8){learnmagic = 'more shell'}
        else if (learnedmagic == 9){learnmagic = 'deadly poison'}
        else if (learnedmagic == 10){learnmagic = 'the healest'}
        else if (learnedmagic == 11){learnmagic = 'greatluck'}
        else {
            learnmagic = 'random'
            document.getElementById('log').textcontent = '魔法は見つからなかった...しかしrandomを思いついた!';
            playersutefuri()
        }
        document.getElementById('log').textContent = learnmagic + 'を見つけた!!';
        document.getElementById('select1').textContent = magic1;
        document.getElementById('select2').textContent = magic2;
        document.getElementById('select3').textContent = magic3;
        document.getElementById('back').textContent = 'pass';
        phase = 6;
    } else if (phase == 6){
    disappear()
        document.getElementById('log').textContent = magic3 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic3 = learnmagic
        window.setTimeout(nextenemy, 1000)
    }
}
// 一個選択肢を戻るやつ
function back(){
    if (phase == 1){
    disappear()
        enemieturn();
    } else if (phase == 2){
        playerturn();
    } else if (phase == 3) {
        playerturn();
    } else if (phase == 4) {
        playerturn();
    } else if (phase == 5) {
    disappear()
        phase = 0;
        enemylevel += 1
        document.getElementById('log').textContent = '敵のレベルが上がった!';
        window.setTimeout(nextenemy, 1000)
    } else if(phase == 6){
        window.setTimeout(enemyorplayer, 1000)
    }
    
}
function disappear(){
    document.getElementById('select1').textContent = ' ';
    document.getElementById('select2').textContent = ' ';
    document.getElementById('select3').textContent = ' ';
    document.getElementById('back').textContent = '';
    phase = 'null';
}
// playerの攻撃たち
// playerの斬撃攻撃
async function slash() {
    x = 0;
    y = enemyhealth;
    x = (playerattack * playerpower * alicepower * tokipower + utagepower);
    if (enemyskilldebuff == 1){x *= 4;; enemyskilldebuff = 0; enemyskillbufftekiou();};
    if(playername == 'mona' && enemywithelement == 0){enemywithelement = 2; enemywithelementtekiou();}else if(playername == 'mona' && enemywithelement == 3){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
    if(playername == 'fischl' && enemywithelement == 0){enemywithelement = 3; enemywithelementtekiou();}else if(playername == 'fischl' && enemywithelement == 2){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
    x = Math.ceil(x);
    if(x < 1){x = 0};
    if(x > enemyhealth){x = enemyhealth};
    enemyhealth -= x;
    document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
    if (enemyhealth < 0){enemyhealth = 0};
    tekiou();
    if(playername == 'utage'){if(playerhealth !== playermaxhealth){await delay(1000); z = Math.floor(playermaxhealth * 0.05); if(z < 1){z = 1} playerhealth += z; if(playerhealth > playermaxhealth){playerhealth = playermaxhealth}; document.getElementById('log').textContent = playername + 'は' + z + 'のHPを回復した!'; tekiou();}};
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000);
    } else {window.setTimeout(enemyorplayer, 1000)};
}
async function doubleslash() {
    x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = 0;
            y = enemyhealth;
            x = (playerattack * playerpower * alicepower * tokipower + utagepower);
            if (enemyskilldebuff == 1){x *= 4;; enemyskilldebuff = 0; enemyskillbufftekiou();};
            if(playername == 'mona' && enemywithelement == 0){enemywithelement = 2; enemywithelementtekiou();}else if(playername == 'mona' && enemywithelement == 3){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
            if(playername == 'fischl' && enemywithelement == 0){enemywithelement = 3; enemywithelementtekiou();}else if(playername == 'fischl' && enemywithelement == 2){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};    
            x = Math.ceil(x);
            if(x < 1){x = 0};
            if(x > enemyhealth){x = enemyhealth};
            enemyhealth -= x;
        }
    if (damage == 0){
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    } else {
    document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
    if (enemyhealth < 0){enemyhealth = 0}
    tekiou();
    if(playername == 'utage'){if(playerhealth !== playermaxhealth){await delay(1000); z = Math.floor(playermaxhealth * 0.05); if(z < 1){z = 1} playerhealth += z; if(playerhealth > playermaxhealth){playerhealth = playermaxhealth}; document.getElementById('log').textContent = playername + 'は' + z + 'のHPを回復した!'; tekiou();}};
    }
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000)
    } else {
        x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = 0;
            y = enemyhealth;
            x = (playerattack * playerpower * alicepower * tokipower + utagepower);
            if (enemyskilldebuff == 1){x *= 4;; enemyskilldebuff = 0; enemyskillbufftekiou();};
            if(playername == 'mona' && enemywithelement == 0){enemywithelement = 2; enemywithelementtekiou();}else if(playername == 'mona' && enemywithelement == 3){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
            if(playername == 'fischl' && enemywithelement == 0){enemywithelement = 3; enemywithelementtekiou();}else if(playername == 'fischl' && enemywithelement == 2){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
            x = Math.ceil(x);
            if(x < 1){x = 0};
            if(x > enemyhealth){x = enemyhealth};
            enemyhealth -= x;
        }
        if (damage == 0){
            await delay(1000);
            document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
        } else {
            await delay(1000);
            document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
                if (enemyhealth < 0){enemyhealth = 0}
                tekiou();
                if(playername == 'utage'){if(playerhealth !== playermaxhealth){await delay(1000); z = Math.floor(playermaxhealth * 0.05); if(z < 1){z = 1} playerhealth += z; if(playerhealth > playermaxhealth){playerhealth = playermaxhealth}; document.getElementById('log').textContent = playername + 'は' + z + 'のHPを回復した!'; tekiou();}};
                if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
        }
        window.setTimeout(enemyorplayer, 1000)
    }
}
async function slashoflight() {
    if(playerskillbuff == 6){
    if(tokienelgy > 1){
        x = enemyhealth;
        y = enemyhealth;
        x -= (playerattack * playerpower * 1.5 * tokipower);
        x = Math.ceil(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        tekiou();
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        await delay(1000);
        document.getElementById('log').textContent = '目には目を';
        await delay(1000);
        z = tokipower;
        z += 0.5;
        document.getElementById('log').textContent = '攻撃力が' + z + '倍になった!!';
        tokipower = z;
        tokienelgy -= 1;
        if (enemyhealth < 0){enemyhealth = 0}
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
        else{window.setTimeout(enemyorplayer, 1000)}
    } else if(tokienelgy == 1){
        x = enemyhealth;
        y = enemyhealth;
        x -= (playerattack * playerpower * 2 * tokipower);
        x = Math.ceil(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        document.getElementById('log').textContent = tokiEXvoice2[Math.floor(Math.random() * tokiEXvoice2.length)];
        await delay(1000);
        tekiou()
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!!';
        await delay(1000);
        tokipower = 1;
        tokienelgy = 0;
        playerskillbuff = 0;
        bufftekiou();
        armor = 0;
        document.getElementById('AdditionalPlayerPoint').innerHTML = '';
        document.getElementById('log').textContent = '解除!';
        await delay(500);
        if (enemyhealth < 0){enemyhealth = 0}
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
        else{window.setTimeout(enemyorplayer, 1000)}
    }} // アビエシュフだった時の強攻撃ね
    else{
    x = Math.floor(Math.random() * 3); // 1/3です
    if(playername == 'mona' || playername == 'fischl'){x = 0;};
    if (x == 0) {
        x = 0;
        y = enemyhealth;
        x = (playerattack * playerpower * 3 * alicepower * tokipower + utagepower);
        if (enemyskilldebuff == 1){x *= 4;; enemyskilldebuff = 0; bufftekiou();};
        if(playername == 'mona' && enemywithelement == 0){enemywithelement = 2; enemywithelementtekiou();}else if(playername == 'mona' && enemywithelement == 3){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
        if(playername == 'fischl' && enemywithelement == 0){enemywithelement = 3; enemywithelementtekiou();}else if(playername == 'fischl' && enemywithelement == 2){x *= 1.5; enemywithelement = 0; enemywithelementtekiou();};
        if(playername == 'mona' || playername == 'fischl'){x /= 2};
        x = Math.ceil(x);
        if(x < 1){x = 0};
        if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if (enemyhealth < 0){enemyhealth = 0}
        tekiou();   
        if (playername == 'utage'){if(playerhealth !== playermaxhealth){await delay(1000); z = Math.floor(playermaxhealth * 0.05); if(z < 1){z = 1} z *= 2; playerhealth += z; if(playerhealth > playermaxhealth){playerhealth = playermaxhealth}; document.getElementById('log').textContent = playername + 'は' + z + 'のHPを回復した!'; tekiou();}};
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    } else {document.getElementById('log').textContent = 'miss! ダメージを与えられない!';}
    window.setTimeout(enemyorplayer, 1000)
}
}
// playerの魔法
// 魔法の一覧です
// heal　20%回復
// power　attack 1.5倍 code:1
// shell　defence 1.5倍 code:3
// poison　敵に毒を付与　毎ターン5%ダメージ code:1
// healerthan　40%回復
// luck　ターン終了時、1/5の確率でターン継続 code:5
// morepower　attack 2倍 code:2
// moreshell defence 2倍 code:4
// deadlypoison　敵に毒を付与　毎ターン10%ダメージ code:2
// thehealest　60%回復
// greatluck　ターン終了後、1/2の確率でターン継続 code:6
// random ランダムな魔法を使用する
function magic() {
    if (playermp > 0){
        switch(z){
        case 'heal':
            Heal(); break;
        case 'power':
            Power(); break;
        case 'shell':
            Shell(); break;
        case 'poison':
            Poison(); break;
        case 'healer than':
            Healerthan(); break;
        case 'luck':
            Luck(); break;
        case 'more power':
            Morepower(); break;
        case 'more shell':
            Moreshell(); break;
        case 'deadly poison':
            Deadlypoison(); break;
        case 'the healest':
            Thehealest(); break;
        case 'greatluck':
            Greatluck(); break;
        case 'random':
            Random(); break;
        default:
            document.getElementById('log').textContent = 'errrrrrr';
            break;
        }
    playermp -= 1;
    } else {
        document.getElementById('log').textContent = 'not enough mp...';
        window.setTimeout(playerturn, 1000)
    };
}
function Heal() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.2)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealを唱え、' + y + '回復した!';
    if (playerhealth > playermaxhealth) {
        playerhealth = playermaxhealth;
    }
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Power() {
    playerbuff = 1
    playerpower = 1.5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はpowerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Shell() {
    playerbuff = 3
    playershell = 1.5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はshellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Poison() {
    enemydebuff = 1
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はpoisonを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Healerthan() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.4)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealer thanを唱え、' + y + '回復した!!';
    if (playerhealth > playermaxhealth) {
        playerhealth = playermaxhealth;
    }
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Luck() {
    playerbuff = 5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Morepower() {
    playerbuff = 2
    playerpower = 2
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はmore powerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Moreshell() {
    playerbuff = 4
    playershell = 2
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はmore shellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Deadlypoison() {
    enemydebuff = 2
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はdeadly poisonを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Thehealest() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.6)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はthe healestを唱え、' + y + '回復した!!!';
    if (playerhealth > playermaxhealth) {
        playerhealth = playermaxhealth;
    }
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Greatluck() {
    playerbuff = 6
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はgreatluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
async function Random(){
    document.getElementById('log').textContent = '.........';
    await delay(1000);
    x = Math.floor(Math.random() * 11)
    if (x == 0){
        document.getElementById('log').textContent = 'healが出た!';
        window.setTimeout(Heal, 1000)
    } else if (x == 1){
        document.getElementById('log').textContent = 'powerが出た!';
        window.setTimeout(Power, 1000)
    } else if (x == 2){
        document.getElementById('log').textContent = 'shellが出た!';
        window.setTimeout(Shell, 1000)
    } else if (x == 3){
        document.getElementById('log').textContent = 'poisonが出た!';
        window.setTimeout(Poison, 1000)
    } else if (x == 4){
        document.getElementById('log').textContent = 'healer thanが出た!';
        window.setTimeout(Healerthan, 1000)
    } else if (x == 5){
        document.getElementById('log').textContent = 'luckが出た!';
        window.setTimeout(Luck, 1000)
    } else if (x == 6){
        document.getElementById('log').textContent = 'more powerが出た!';
        window.setTimeout(Morepower, 1000)
    } else if (x == 7){
        document.getElementById('log').textContent = 'more shellが出た!';
        window.setTimeout(Moreshell, 1000)
    } else if (x == 8){
        document.getElementById('log').textContent = 'deadly poisonが出た!';
        window.setTimeout(Deadlypoison, 1000)
    } else if (x == 9){
        document.getElementById('log').textContent = 'the healestが出た!';
        window.setTimeout(Thehealest, 1000)
    } else if (x == 10){
        document.getElementById('log').textContent = 'greatluckが出た!';
        window.setTimeout(Greatluck, 1000)
    }
}

// playerの道具
function Potion() {
    if(playername == 'utage'){
    document.getElementById('log').textContent = '飲んだ...だが効果はなかった!';
    potion -= 1;
    window.setTimeout(playerturn, 1000);
    }else{
    playerhealth = playermaxhealth
    tekiou();
    document.getElementById('log').textContent = '　　　全　　　回　　　復　　　';
    potion -= 1;
    window.setTimeout(playerturn, 1000);
    }
}
function Bomb() {
    enemyhealth = 0;
    tekiou();
    document.getElementById('log').textContent = 'これで..終わりダッ！'; // 私のファイナルエターナルラストアタック!!相手は死ぬ!!!
    bomb -= 1;
    window.setTimeout(killedenemy, 1000)
}
function Skipcard() {
    turn = 3;
    document.getElementById('log').textContent = 'カードを仕込みました!';
    skipcard -= 1;
    window.setTimeout(playerturn, 1000)
}
function ChangePlayer(){
    if(allowchange == 0){
        if(playername == 'mona'){
            playername = 'fischl';
            playernumber = 2;
            document.getElementById('PlayerName').textContent = playername;
            document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #7F1184;padding: 2px 3px;background: #B455A0;cursor: pointer;}';
            allowchange = 1;
            document.getElementById('log').textContent = '交代!';
        }else if(playername == 'fischl'){
            playername = 'mona';
            playernumber = 1;
            document.getElementById('PlayerName').textContent = playername;
            document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #5F4894;padding: 2px 3px;background: #6495ED;cursor: pointer;}';
            allowchange = 1;
            document.getElementById('log').textContent = '交代!';
        }
    }
    if (playernumber == 1 && skillcooldown1 == 0){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}
    else if(playernumber == 2 && skillcooldown2 == 0){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';};
    
}
let aliceenelgy = 0;
let alicepower = 1;
let aliceEXvoice = ['魔力充填100パーセント…行きます!','ターゲット確認！出力臨界点突破！','悪を撃ち砕く正義の一撃…。','光よ！エナジーオーバーロード…リリース。','この光に意志を込めて…貫け！バランス崩壊！','アリス、全力でいきます。','世界の 法則が 崩壊します！','世界の 法則が 崩壊します！']
let tokiarmor = 0;
let tokimaxarmor = 0;
let tokienelgy = 0;
let tokipower = 1;
let tokiEXvoice1 = ['装着完了。','全力で参ります。','戦闘を開始します。']
let tokiEXvoice2 = ['これが私の、全力！','目標確認、ロックオン！','アビ・エシュフ、殲滅モード！','アビ・エシュフ、殲滅モード！','はあぁっ！','発射！']
let utagepower = 1;
let utageEXvoice = ['いっただきま〜す','ふふーん','どこ斬ればいいのかな','いいとこついてれば痛くないからね','いらないパーツあったらちょうだ〜い'];
let enemywithelement = 0; //1=炎 2=水 3=雷 4=氷 5=草 6=風 7=岩
let monakyoeihealth = 0;
let monakyoeimaxhealth = 0;
let monatime = 0;
let monaNSvoice = ['水中幻願！','運命よ、水面に映るのです！','運命の虚栄！'];
let monaEXvoice = ['運命には逆らえません！','運命よ、ここにいでよ！','これが運命です！','これが運命です！'];
let oztime = 0;
let fischlNSvoice = ['断罪の名において！','断罪の名において！','姿を見せよ！オズ！','応えなさい！','オズ:またか...','オズ:またか...'];
let fischlEXvoice = ['黒き翼よ、昼夜を切り裂きなさいーー','夜の幻現','影の鴉が、幽夜を求めているーー','オズ:お嬢様の仰せのままに！','オズ:夜の幻現！'];
// skillの手続き
async function skillact() {
    if (skillcooldown1 == 0){
        if(playername == 'alice'){
        document.getElementById('log').textContent = aliceEXvoice[Math.floor(Math.random() * aliceEXvoice.length)];
        document.getElementById('Skillbutton').innerHTML = '';
        disappear();
        await delay(1000);
        x = aliceenelgy + 1;
        y = Math.floor(playerattack * playerpower * x);
        z = aliceenelgy * 0.5 + 1;
        if(y > enemyhealth){y = enemyhealth;};
        enemyhealth -= y;
        if (enemyhealth < 0){enemyhealth = 0};
        tekiou();
        document.getElementById('log').textContent = '敵に' + y + 'のダメージを与えた!';
        await delay(1000);
        document.getElementById('log').textContent = '覚醒せよ、スーパーノヴァ!';
        await delay(1000);
        alicepower = z;
        document.getElementById('log').textContent = '攻撃力が' + z + '倍になった!';
        skillcooldown1 = 5;
        aliceenelgy = 1;
        alicetekiou();
        if(enemyhealth < 0){enemyhealth = 0;};
        if(enemyhealth == 0){window.setTimeout(killedenemy,1000);}
        else {window.setTimeout(playerturn, 1000);}
    } else if(playername == 'toki'){
        document.getElementById('Skillbutton').innerHTML = '';
        document.getElementById('AdditionalPlayerPoint').innerHTML = '<br><i>armor:</i><i id="TokiArmor"></i><i>/</i><i id="TokiMaxArmor"></i>';
        tokimaxarmor = Math.floor(playerhealth * 0.5);
        if(playerdefense > 0){tokimaxarmor * playerdefense};
        tokiarmor = tokimaxarmor;
        tokitekiou();
        playerskillbuff = 6;
        bufftekiou();
        tokienelgy = 3;
        document.getElementById('log').textContent = tokiEXvoice1[Math.floor(Math.random() * tokiEXvoice1.length)];
        skillcooldown1 = 'tokinull';
    } else if(playername == 'utage'){
        disappear();
        document.getElementById('Skillbutton').innerHTML = '';
        document.getElementById('log').textContent = utageEXvoice[Math.floor(Math.random() * utageEXvoice.length)];
        playerskillbuff = 5;
        bufftekiou();
        await delay(1000);
        x = Math.ceil(playerdefense * 0.5);
        if(x == 0){x = 1};
        playerhealth += x;
        if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
        tekiou();
        document.getElementById('log').textContent = '体力が' + x + '回復した！';
        skillcooldown1 = 'utagenull';
        window.setTimeout(enemyorplayer, 1000);
    } else if(playername == 'mona'){
        document.getElementById('Skillbutton').innerHTML = '';
        document.getElementById('log').textContent = monaEXvoice[Math.floor(Math.random() * monaEXvoice.length)];
        await delay(500);
        enemyskilldebuff = 1;
        bufftekiou();
        enemywithelement = 2;
        skillcooldown1 = 5;
        window.setTimeout(enemyorplayer, 1500);
    } else {
        document.getElementById('log').textContent = 'skill is not ready...';
    }
    }
    if(skillcooldown2 == 0){
        if(playername == 'fischl'){
            document.getElementById('Skillbutton').innerHTML = '';
            disappear();
            document.getElementById('log').textContent = fischlEXvoice[Math.floor(Math.random() * fischlEXvoice.length)];
            await delay(500);
            x = enemyhealth; y = enemyhealth;
            z = (playerattack * playerpower * 2);
            x -= z; x = Math.ceil(x);
            damage = y - x;
            if(damage < 0){damage = 0}; if(damage > y){damage = y};
            enemyhealth -= damage; tekiou();
            enemywithelement = 3; //1=炎 2=水 3=雷 4=氷 5=草 6=風 7=岩
            enemywithelementtekiou();
            turn = 3;
            skillcooldown2 = 4;
            window.setTimeout(playerturn, 1000);
        }
    } else {
        document.getElementById('log').textContent = 'skill is not ready...';
    }
}
function alicetekiou(){
    document.getElementById('AliceEnelgy').textContent = aliceenelgy;
}
function tokitekiou(){
    document.getElementById('TokiArmor').textContent = tokiarmor;
    document.getElementById('TokiMaxArmor').textContent = tokimaxarmor;
}
function monakyoeitekiou(){
    document.getElementById('MonaKyoeiMaxHealth').textContent = monakyoeimaxhealth;
    document.getElementById('MonaKyoeiHealth').textContent = monakyoeihealth;
    if(monakyoeihealth <= 0){monakyoeihealth = 0; monakyoeibreak();};
    if(monatime == 0){monakyoeibreak();}
}
function monakyoeibreak(){
    document.getElementById('PlayerFriendFront').innerHTML = '';
    playerskillbuff = 0;
    bufftekiou();
}
function ozbreak(){
        document.getElementById('PlayerFriendBack').innerHTML = '';
        playerskilldebuff = 0;
        bufftekiou();
}
// enemieturnまでの道のり
function enemyorplayer(){
    if (turn == 1 || turn == 2){
        y = 1;
        if (playerbuff == 5){y = Math.floor(Math.random() * 5);}
        if (playerbuff == 6){y = Math.floor(Math.random() * 3);}
        if (y == 0){
            document.getElementById('log').textContent = 'Lucky♪';
            window.setTimeout(playerturn, 1000)
        } else {enemieturn()}
        } else if (turn == 3) {
            document.getElementById('log').textContent = 'スキップ!!!';
            window.setTimeout(playerturn, 1000)
            turn = 1;   
        }
}
// enemyの手続き
async function enemieturn() {
    if (enemyhealth == 0){killedenemy();}
    else {
    turn = 2;
    document.getElementById('log').textContent = '敵のターンです!';
    window.setTimeout(enemyattack, 1000);
    }
}
async function enemyattack() {
    w = 1;
    if (enemyskilldebuff == 1){w = 1;} //モナさんのEXスタン
    x = playerhealth;
    y = playerhealth;
    x -= enemylevel;
    x += playerdefense * playershell;
    damage = playerhealth - x;
    if (damage < 0){damage = 0;}
    if (w == 0){damage = 0;}
    else if(playerskillbuff == 6 && tokiarmor > 0){y = tokiarmor; tokiarmor -= damage; if(tokiarmor < 0){tokiarmor = 0}; z = y - tokiarmor; tokitekiou(); if(tokiarmor == 0){tokipower = 1; skillcooldown1 = 5; tokienelgy = 0; playerskillbuff = 0; bufftekiou(); tokiarmor = 0; document.getElementById('AdditionalPlayerPoint').innerHTML = ''; document.getElementById('log').textContent = '解除!'; await delay(500);};}
    else if (playerskillbuff == 1){y = monakyoeihealth; monakyoeihealth -= damage; if(monakyoeihealth < 0){monakyoeihealth = 0}; monakyoeihealth = Math.floor(monakyoeihealth);  monakyoeitekiou(); damage = y - monakyoeihealth;}
    else {playerhealth -= damage; playerhealth = Math.floor(playerhealth); z = y - playerhealth;}
    if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
    else if (z == 0){document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';}
    if (playerhealth < 0){playerhealth = 0}
    tekiou();
    if (playerhealth == 0){window.setTimeout(defeat, 1000); turn = 0;};
    if (playerskillbuff == 1){document.getElementById('log').textContent = 'unmeinokyoeiに' + damage + 'のダメージ!';}
    else {document.getElementById('log').textContent = playername + 'に' + damage + 'のダメージ!';};
    if (turn == 2){
    if (enemydebuff == 1) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.05
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } else if (enemydebuff == 2) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.1
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    }
    if (enemydebuff == 1 || enemydebuff == 2){
        await delay(1000);
        document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';
    }
    tekiou();
    if (enemyhealth < 0){enemyhealth = 0}
    if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    else {
        await delay(1000);
        playerturn()
        turncountincrease()
        SkillCooldownDecrease()
        NSaction()
        if(playerskillbuff == 1){monakyoeitekiou();}
        else if(oztime == 0 && playerskilldebuff == 1){ozbreak();}
    }
}
}
// ゲームの判定のお話
async function killedenemy() {
    turn = 0;
    x = playerexp
    playerexp += enemylevel;
    y = playerexp - x;
    document.getElementById('log').textContent = enemyname + 'を倒した!';
    if(playername == 'alice'){alicepower = 1;};
    if(playername == 'toki'){tokipower = 1;};
    if(playername == 'utage'){utagepower = 0;};
    window.setTimeout(expget, 1000)
}
function expget(){
    document.getElementById('log').textContent = y + 'の経験値を奪った!';
    window.setTimeout(playerlevelup, 1000)
}
function playerlevelup(){
    if (playerexp >= playerlevel){
        playerlevel += 1;
        playerexp = 0;
        learnedmagic += 1
        playermaxhealth += 1;
        playerhealth = playermaxhealth;
        document.getElementById('PlayerLevel').textContent = playerlevel;
        document.getElementById('PlayerHealth').textContent = playerhealth;
        document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
        document.getElementById('log').textContent = 'レベルアップ!!';
        window.setTimeout(playersutefuri, 1000)
    } else window.setTimeout(nextenemy, 1000)
}
function nextenemy() {
    turncount = 0;
    document.getElementById('TurnCount').textContent = turncount;
    playermp = playermaxmp;
    playerbuff = 0;
    playerpower = 1;
    playershell = 1;
    x = 0;
    if (playerskillbuff == 1){x = 1}
    if (playerskillbuff == 6){x = 6}
    playerskillbuff = 0;
    if (x == 1){playerskillbuff = 1}
    if (x == 6){playerskillbuff = 6}
    x = 0;
    if(playerskilldebuff == 1){x = 1}
    playerskilldebuff = 0;
    if (x == 1){playerskilldebuff = 1}
    enemydebuff = 0;
    enemyskilldebuff = 0;
    bufftekiou()
    enemywithelement = 0;
    enemywithelementtekiou();
    enemylevel += (Math.floor(Math.random() * 3) - 1); // -1 ~ +1 
    if (playernametrick = 1){enemylevel += (Math.floor(Math.random() * 2));} // 0 ~ +1} // 名前付きのつよつよplayerのためのセプテット(?)
    if (enemylevel < 1){enemylevel = 1}
    enemymaxhealth += 1;
    enemyhealth = enemymaxhealth;
    enemyname = 0;
    enemyprefixe1 = 0;
    enemyprefixe2 = 0;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
    y = Math.floor(Math.random() * 2); // 1/2
    if(y == 0){enemyprefixe1 = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]} // 一個目の接頭時
    y = Math.floor(Math.random() * 2); // 1/2
    if(y == 0){enemyprefixe2 = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]} //　二個目の接頭辞
    if(enemyprefixe1 == enemyprefixe2){enemyprefixe2 = 0}
    if(enemyprefixe1 !== 0 && enemyprefixe2 !== 0){enemyname = enemyprefixe1 + ' ' + enemyprefixe2 + ' ' + enemyname}
    else if (enemyprefixe1 !== 0 && enemyprefixe2 == 0){enemyname = enemyprefixe1 + ' ' + enemyname}
    else if (enemyprefixe1 == 0 && enemyprefixe2 !== 0){enemyname = enemyprefixe2 + ' ' + enemyname}
    else {enemyname = enemyname}; // 敵に接頭辞を確率で付与します。意味はありません。じゃあなんでつけるんって思うよね。それはね、おもしろいからだよ　ひとえに愛だよ
    document.getElementById("EnemyName").textContent = enemyname;
    document.getElementById('log').textContent = enemyname + 'が現れた!';
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    tekiou();
    if(playerskillbuff == 6){document.getElementById('Skillbutton').innerHTML = '';};
    window.setTimeout(playerturn, 750)
    turncountincrease()
}   
function playersutefuri(){
    document.getElementById('log').textContent = 'どの能力を上げますか?';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'defense';
    document.getElementById('select3').textContent = 'magic';
    document.getElementById('back').textContent = 'enemy';
    phase = 5;
}
function defeat() {
    if (playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!'];}
    else {saydefeats = [playername + 'は力尽きた...残念だったね!にはははは!!', playername + 'は..まけました', '残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、もう一回、やってみない?'];}
    document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
    window.setTimeout(reset, 2000)
}
async function errorcheck(){if(playerattack == Infinity || playerdefense == Infinity || playerhealth == Infinity || playermaxhealth == Infinity || playerlevel == Infinity || playerpower == Infinity || playershell == Infinity){document.getElementById('log').textContent = 'errorが発生しました。'; await delay(1000); document.getElementById('log').textContent = 'リブートを開始します。'; await delay(1000); open('about:blank', '_self').close();}} //おっとこれは...?}
function StatusAppear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusDisappear()">status</button>';
    document.getElementById('Status').textContent = '攻撃力:' + playerattack + '   防御力:' + playerdefense + '   経験値:' + playerexp +'   魔力:' + playermp;
}
function StatusDisappear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
}