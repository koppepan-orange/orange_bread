let playername = 'You';
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 1;
let playerdefense = 0;
let playerexp = 0;
let playerbuff = 0;
let playerpower = 1;
let playershell = 1;
let playermp = 0;
let playermaxmp = 10;
let enemyhealth = 0;
let enemymaxhealth = 0;
let enemydebuff = 0;
let playerlevel = 1;
let enemylevel = 1;
let turn = 0;
let turncount = 0;
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
let enemynames =  ['slime','golem','knight','swordsman','lizardman','skeleton','zombie','mechanic','touzoku','bomer','clown','greenslime'];
let enemyprefixe1 = 0;
let enemyprefixe2 = 0;
let enemyprefixes = ['strong','have shield','weak','speedy','blind','have not hands','like pc'];
let saydefeats = 0;
let EXcook = 0;
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
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // 遅延やってみたかったの

// beginで名前とか全部やります
function begin(){
    if (document.getElementById('NameInputText').value !== ''){playername = document.getElementById('NameInputText').value;}
    document.getElementById('PlayerName').textContent = playername;
    if(playername == 'koppepanorange'){
        document.getElementById('PlayerName').textContent = 'koppepan_orange';
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';

    }
    document.getElementById('Thisdisappearsafterthegamestartbegin').innerHTML = ' ';
    document.getElementById('Thisdisappearsafterthegamestartnameinput').innerHTML = ' ';
    reset()
}
function NS(){
    if(playername == koppepanorange && (turncount % 3) == 2){
        playerskillbuff = 1;
        bufftekiou()
        
    }
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
    tekiou()
    document.getElementById('log').textContent = 'ゲーム開始です！！';
    window.setTimeout(start,1000);
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
    enemydebuff = 0;
    skillcooldown = 0;
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
async function playerturn() {
    if (turn !== 3){turn = 1;};
    phase = 1;
    document.getElementById('log').textContent = 'あなたのターンです！';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'magic';
    document.getElementById('select3').textContent = 'tools';
    document.getElementById('back').textContent = 'pass';
    errorcheck()
};
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
        document.getElementById('log').textContent = playername + 'の一閃!!';
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
        else {learnmagic = 'random';}
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
    x = enemyhealth;
    x -= (playerattack * playerpower);
    x = Math.ceil(x);
    damage = enemyhealth - x;
    if(damage < 0){damage = 0};
    if(damage > enemyhealth){damage = enemyhealth};
    enemyhealth -= damage;
    document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
    if (enemyhealth < 0){enemyhealth = 0};
    tekiou();
    x = Math.floor(Math.random() * 5); // 1/5の確率
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000);;
    } else {window.setTimeout(enemyorplayer, 1000)};
}
async function doubleslash() {
    x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = enemyhealth;
            x -= (playerattack * playerpower);
            x = Math.ceil(x);
            damage = enemyhealth - x;
            if(damage < 0){damage = 0};
            if(damage > enemyhealth){damage = enemyhealth};
            enemyhealth -= damage;
        }
    if (damage == 0){
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    } else {
    document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
    if (enemyhealth < 0){enemyhealth = 0}
    }
    tekiou();
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000)
    } else {
        x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = enemyhealth;
            x -= (playerattack * playerpower);
            x = Math.ceil(x);
            damage = enemyhealth - x;
            if(damage < 0){damage = 0};
            if(damage > enemyhealth){damage = enemyhealth};
            enemyhealth -= damage;
        }
        if (damage == 0){
            await delay(1000);
            document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
        } else {
            await delay(1000);
            document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
                if (enemyhealth < 0){enemyhealth = 0}
                if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}   
                tekiou();
        }
        window.setTimeout(enemyorplayer, 1000)
    }
}
async function slashoflight() {
    x = Math.floor(Math.random() * 3); // 1/3です
    if (playername == 'clown'){x = Math.floor(Math.random() * 5);} // 1/5です。
    if (x == 0) {
        x = enemyhealth;
        x -= (playerattack * 3 * playerpower);
        x = Math.ceil(x);
        damage = enemyhealth - x;
        if(damage < 0){damage = 0};
        if(damage > enemyhealth){damage = enemyhealth};
        enemyhealth -= damage;
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if (enemyhealth < 0){enemyhealth = 0}
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
        tekiou();   
    } else {document.getElementById('log').textContent = 'miss! ダメージを与えられない!';}
    window.setTimeout(enemyorplayer, 1000)
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
        window.setTimeout(playerturn, 1000);
    };
}
function Heal() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.2)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealを唱え、' + y + '回復した!';
    if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
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
    if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
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
    if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
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
    x = [Math.floor(Math.random() * 11) + 1];
    switch(x){
        case '1':
            Heal(); break;
        case '2':
            Power(); break;
        case '3':
            Shell(); break;
        case '4':
            Poison(); break;
        case '5':
            Healerthan(); break;
        case '6':
            Luck(); break;
        case '7':
            Morepower(); break;
        case '8':
            Moreshell(); break;
        case '9':
            Deadlypoison(); break;
        case '10':
            Thehealest(); break;
        case '11':
            Greatluck(); break;
        default:
            document.getElementById('log').textContent = 'errrrrrr';
            break;
        }
}

// playerの道具
function Potion() {
    playerhealth = playermaxhealth
    tekiou();
    document.getElementById('log').textContent = '　　　全　　　回　　　復　　　';
    if(playername == 'zombie'){zombieresurrections += 1 };
    potion -= 1;
    window.setTimeout(playerturn, 1000)
}
function Bomb() {
    enemyhealth = 0;
    tekiou();
    document.getElementById('log').textContent = 'bombを投げた...';
    bomb -= 1;
    window.setTimeout(killedenemy, 1000)
}
function Skipcard() {
    turn = 3;
    document.getElementById('log').textContent = 'カードを仕込みました!';
    skipcard -= 1;
    window.setTimeout(playerturn, 1000)
}
// enemieturnまでの道のり
function enemyorplayer(){
    if (turn == 1){
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
    x = playerhealth;
    y = playerhealth;
    x -= enemylevel;
    x += playerdefense * playershell;
    damage = playerhealth - x;
    if (damage < 0){damage = 0;}
    playerhealth -= damage; playerhealth = Math.floor(playerhealth); z = y - playerhealth;
    if (z == 0){
        document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';
    } else {
        document.getElementById('log').textContent = playername + 'に' + z + 'のダメージ!';
    }
    if (playerhealth < 0){playerhealth = 0}
    if (playerhealth == 0){
        defeat();
        turn = 0;
    }
    tekiou();
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
    if (enemydebuff !== 0){
        await delay(1000);
        document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';
    }
    tekiou();
    if (enemyhealth < 0){enemyhealth = 0}
    if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)
    } else {
        await delay(1000);
        playerturn()
        turncountincrease()
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
    enemydebuff = 0;
    bufftekiou()
    enemylevel += (Math.floor(Math.random() * 3) - 1); // -1 ~ +1 
    if (enemylevel < 1){enemylevel = 1}
    enemymaxhealth += 1;
    enemyhealth = enemymaxhealth;
    enemyname = 0;
    enemyprefixe1 = 0;
    enemyprefixe2 = 0;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
    y = Math.floor(Math.random() * 2); // 1/2
    if(y == 0){enemyprefixe1 = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]}
    y = Math.floor(Math.random() * 2); // 1/2
    if(y == 0){enemyprefixe2 = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]}
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
    if(playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!'];}
    else {saydefeats = [playername + 'は力尽きた...残念だったね!にはははは!!', playername + 'は..まけました', '残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、もう一回、やってみない?'];}
    document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
    window.setTimeout(reset, 2000)
}
async function errorcheck(){if(playerattack == Infinity || playerdefense == Infinity || playerhealth == Infinity ||  playermaxhealth == Infinity || playerlevel == Infinity || playerpower == Infinity || playermaxmp == Infinity || playershell == Infinity || isNaN(playerhealth) || isNaN(playermaxhealth) || isNaN(playerattack) || isNaN(playerdefense) || isNaN(playermaxmp) || isNaN(playerpower) || isNaN(playershell) || isNaN(playerlevel) || potion == Infinity || money == Infinity || bomb == Infinity || skipcard == Infinity || isNaN(potion) || isNaN(money) || isNaN(bomb) || isNaN(skipcard)){document.getElementById('log').textContent = 'error100が発生しました。'; await delay(1000); document.getElementById('log').textContent = 'リブートを開始します。'; await delay(1000); open('about:blank', '_self').close();}} //おっとこれは...?}
function StatusAppear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusDisappear()">status</button>';
    document.getElementById('Status').textContent = '攻撃力:' + playerattack + '   防御力:' + playerdefense + '   経験値:' + playerexp +'   魔力:' + playermp;
}
function StatusDisappear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
}