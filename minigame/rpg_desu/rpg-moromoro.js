let playername = 'player';
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 1;
let playerdefense = 0;
let playerexp = 0;
let playerbuff = 0;
let playerskillbuff = 0;
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
let enemynames =  ["ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",
                   "彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",
                   "古書館の魔術師", "トラブルメーカーな天才少女", "誰もが恐れる風紀委員長", "自称清楚系超天才病弱美少女ハッカー",'黒服',
                   "大量発生中のツインテ", "ああああ"];
                   // 名前の元!紹介! 1行目-cybercodeonline 2行目-東方ロストワード 3行目-ブルーアーカイブ 4行目-スプラトゥーン3 & 勇者あるある
let enemyprefixe1 = 0;
let enemyprefixe2 = 0;
let enemyprefixes = ['コッペパン好きな','猫耳の','メイド服を着た','かっこいい','ボカロ好きの','頭のおかしくなった','マカロンが好きな','Discord信者の','勇者..のコスプレをした','魔王..のコスプレをした','ゾンビ..のコスプレをした','ダークモカチップクリームフラペチーノを持った','猫になった','真のヒロイン'
                     ,'ドンファイのマスターフルコンを目指す','どっちかっていうと猫派な','犬が嫌いな','借り暮らしの','その日暮らしの','モス通いの','手に何か持ってないと落ち着かない','西の高校生探偵','東の高校生探偵','元','課題に追われる','ツインテ狩りの','白水色が好きな','カービィ使いの','承認欲求高めの'
                     ,'Mac依存症の','ぬいぐるみ依存症の','レモンティー依存症の','ヘッドフォン依存症の','ZEPETO依存症の','つぶグミ依存症の','黒ピンク依存症の'
                     ,'「ぼっち・ざ・ろっく」が好きな', '「よふかしのうた」が好きな','「らき☆すた」が好きな','Minecraftが好きな','弾幕ゲームが好きな','ブルーアーカイブが好きな','第五人格が好きな','プロセカが好きな','#コンパスが好きな'];
let saydefeats = 0;
let skillcooldown = 0;
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
    if(enemyskilldebuff == 1){document.getElementById('EnemySkillDebuff').textContent = 'onslimed';}
    if(playerskillbuff == 0){document.getElementById('PlayerSkillBuff').textContent = '';}
    if(playerskillbuff == 1){document.getElementById('PlayerSkillBuff').textContent = 'spliting';}
    if(playerskillbuff == 2){document.getElementById('PlayerSkillBuff').textContent = 'throw wrench';}
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // 遅延やってみたかったの
// beginで名前とか全部やります
function begin(){
    if (document.getElementById('NameInputText').value !== ''){playername = document.getElementById('NameInputText').value;}
    document.getElementById('PlayerName').textContent = playername;
    if (playername == 'greenslime'){
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #67a17b;padding: 2px 3px;background: #bbffad;cursor: pointer;}';
        playermaxmp = 8;
        //"greenslime"
        // EX 体力を消費して自分のコピーを出し、ダメージを代わりに受けさせる。コピーが倒されると少し回復する。
        // NS 3の倍数のターンの時、敵にスライムを被せる。スライムが被さると攻撃が当たらなくなる。
        // PS 攻撃時、たまに2回ヒットする。
    }
    if (playername == 'mechanic'){
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #ff7373;padding: 2px 3px;background: #fcffc0;cursor: pointer;}';
        // "mechanic"
        // EX タレットを後ろに設置し、追加で攻撃力の0.5倍(四捨五入)のダメージを与える。重複設置可能。
        // NS 2の倍数のターンの時、レンチを投げる。(攻撃力が2倍に)
        // PS 敵の攻撃時、たまにスタンさせて攻撃を無効化する。
    }
    document.getElementById('Thisdisappearsafterthegamestartbegin').innerHTML = ' ';
    document.getElementById('Thisdisappearsafterthegamestartnameinput').innerHTML = ' ';
    document.getElementById('Thisappearsafterthegamestartsreset').innerHTML = '<button align="center" class="button" onclick="reset()">reset</button>';
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
    skillcooldown = 0;
    tekiou()
    document.getElementById('log').textContent = 'ゲーム開始です！！';
    window.setTimeout(start,1000);
    if(playerskillbuff == 1){greenslimecopybreak();};
    if(playername == 'mechanic'){mechanicturretbreak();};
}
function start(){
    playerhealth = 10;
    playermaxhealth = 10;
    playermp = playermaxmp;
    enemyhealth = 5;
    enemymaxhealth = 5;
    if(playername == 'mechanic'){playerhealth = 5; playermaxhealth = 5;}
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)];
    document.getElementById("EnemyName").textContent = enemyname;
    tekiou();
    playerbuff = 0;
    playerskillbuff = 0;
    enemydebuff = 0;
    enemyskilldebuff = 0;
    bufftekiou();
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    turncountincrease();
    playerturn();
}
function turncountincrease(){turncount += 1; document.getElementById('TurnCount').textContent = turncount;}
function SkillCooldownDecrease(){
    if (skillcooldown > 0){skillcooldown -= 1;};
    if (skillcooldown == 0){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';};
}
async function NSaction(){
    if ((turncount % 3) == 0 && playername == 'greenslime'){
        if(enemyskilldebuff !== 1){
        enemyskilldebuff = 1;
        bufftekiou();
        document.getElementById('log').textContent = enemyname + 'にスライムが覆い被さった!';
        await delay(1000);
        };
    } else if ((turncount % 4) == 0 && playername == 'mechanic'){
        playerskillbuff = 2;
        bufftekiou();
        document.getElementById('log').textContent = 'wrenchを投げる準備ができた!';
        await delay(1000);
        };
}
async function playerturn() {
    if(playername == 'mechanic'){mechanicturretattack = Math.round(playerattack * 0.5);};
    if (turn !== 3){turn = 1;};
    phase = 1;
    document.getElementById('log').textContent = 'あなたのターンです！';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'magic';
    document.getElementById('select3').textContent = 'tools';
    document.getElementById('back').textContent = 'pass';
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
    x = enemyhealth;
    y = enemyhealth;
    x -= (playerattack * playerpower);
    x = Math.floor(x);
    damage = y - x;
    if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();};
    if(damage < 0){damage = 0};
    if(damage > y){damage = y};
    enemyhealth -= damage;
    document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
    if (enemyhealth < 0){enemyhealth = 0};
    tekiou();
    x = Math.floor(Math.random() * 6); // 1/6の確率
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000);
    }else   if(playername == 'greenslime' && x == 0){
            await delay(1000)
            document.getElementById('log').textContent = 'greenslimeは頑張った!';
            await delay(500)
            x = enemyhealth;
            y = enemyhealth;
            x -= (playerattack * playerpower);
            x = Math.floor(x);
            damage = y - x;
            if(damage < 0){damage = 0};
            if(damage > y){damage = y};
            enemyhealth -= damage;
            document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
            if (enemyhealth < 0){enemyhealth = 0 }
            tekiou();
            if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
            else{
                await delay(1000)
                x = enemyhealth;
                y = enemyhealth;
                x -= (playerattack * playerpower);
                x = Math.floor(x);
                damage = y - x;
                if(damage < 0){damage = 0};
                if(damage > y){damage = y};
                enemyhealth -= damage;
                document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
                if (enemyhealth < 0){enemyhealth = 0 }
                tekiou();
                if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
                else {window.setTimeout(enemyorplayer, 1000)}
                };
    } else {window.setTimeout(enemyorplayer, 1000)};
}
async function doubleslash() {
    x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = enemyhealth;
            y = enemyhealth;
            x -= (playerattack * playerpower);
            x = Math.floor(x);
            damage = y - x;
            if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();}
            if(damage < 0){damage = 0};
            if(damage > y){damage = y};
            enemyhealth -= damage;
        }
    if (damage == 0){
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    } else {
    document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
    if (enemyhealth < 0){
        enemyhealth = 0
    }
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
            y = enemyhealth;
            x -= (playerattack * playerpower);
            x = Math.floor(x);
            damage = y - x;
            if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();}
            if(damage < 0){damage = 0};
            if(damage > y){damage = y};
            enemyhealth -= damage;
        }
        if (damage == 0){
            await delay(1000);
            document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
        } else {
            await delay(1000);
            document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
                if (enemyhealth < 0){
                    enemyhealth = 0
                }
                if (enemyhealth == 0){
                    window.setTimeout(killedenemy, 1000)
                }   
                tekiou();
        }
        window.setTimeout(enemyorplayer, 1000)
    }
}
function slashoflight() {
    x = Math.floor(Math.random() * 3);
    if (x == 0) {
        x = enemyhealth;
        y = enemyhealth;
        x -= (playerattack * 3 * playerpower);
        x = Math.floor(x);
        damage = y - x;
        if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();}
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if (enemyhealth < 0){
            enemyhealth = 0
        }
        if (enemyhealth == 0){
            window.setTimeout(killedenemy, 1000)
        }
        tekiou();   
    } else {
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    }
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
function magic() {
    if (playermp > 0){
    if (z == 'heal') {
        Heal();
    } else if (z == 'power') {
        Power();
    } else if (z == 'shell') {
        Shell();
    } else if (z == 'poison') {
        Poison();
    } else if (z == 'healer than') {
        Healerthan();
    } else if (z == 'luck') {
        Luck();
    } else if (z == 'more power') {
        Morepower();
    } else if (z == 'more shell') {
        Moreshell();
    } else if (z == 'deadly poison') {
        Deadlypoison();
    } else if (z == 'the healest') {
        Thehealest();
    } else if (z == 'greatluck') {
        Greatluck();
    } else if (z == 'random') {
        Random();
    }
    playermp -= 1;
    } else {
        document.getElementById('log').textContent = 'not enough mp...';
        window.setTimeout(playerturn, 1000)
    }
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
    playerhealth = playermaxhealth
    tekiou();
    document.getElementById('log').textContent = '　　　全　　　回　　　復　　　';
    potion -= 1;
    window.setTimeout(playerturn, 1000)
}
function Bomb() {
    enemyhealth = 0;
    tekiou();
    document.getElementById('log').textContent = '黒より黒く闇より暗き漆黒に我が深紅の混淆を望みたも..エ、エクスプロージョン!';
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
let greenslimecopyhealth = 0;
let greenslimecopymaxhealth = 0;
let mechanicturret = 0;
let mechanicturretattack = 0;
// skillの手続き
function skillact() {
    if (skillcooldown == 0){
        if(playername == 'greenslime'){
        if(playerhealth > Math.floor(playermaxhealth * 0.5)){
        playerskillbuff = 1;
        bufftekiou()
        x = Math.floor(playermaxhealth * 0.5);
        playerhealth -= x;
        document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#2EFE2E">greenslimeのコピー</font></b>  <br><span id="GreenSlimeCopyHealth">0</span>/<span id="GreenSlimeCopyMaxHealth">0</span>';
        greenslimecopymaxhealth = x;
        greenslimecopyhealth = x;
        greenslimecopytekiou()
        document.getElementById('log').textContent = 'greenslimeは分裂した!!';
        tekiou()
        document.getElementById('Skillbutton').innerHTML = '';
        } else {document.getElementById('log').textContent = 'tairyoku ga sukunai desu...';}
    } else if(playername == 'mechanic'){
        document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="MechanicTurret"></span></b>';
        mechanicturret += 1;
        mechanicturrettekiou()
        mechanicturretattack = Math.round(playerattack * 0.5);
        document.getElementById('Skillbutton').innerHTML = '';
        skillcooldown = 3;
    }
    }else {document.getElementById('log').textContent = 'skill is not ready...';}
    
}
function greenslimecopytekiou(){
    document.getElementById('GreenSlimeCopyHealth').textContent = greenslimecopyhealth;
    document.getElementById('GreenSlimeCopyMaxHealth').textContent = greenslimecopymaxhealth;
    }
function greenslimecopybreak(){
    playerskillbuff = 0;
    bufftekiou()
    x = Math.floor(greenslimecopymaxhealth * 0.7);
    playerhealth += x;
    if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
    document.getElementById('PlayerFriendFront').innerHTML = ' ';
    greenslimecopymaxhealth = 0;
    greenslimecopyhealth = 0;
    skillcooldown = 5;
    document.getElementById('log').textContent = 'greenslimeのコピーは倒された...';
}
function mechanicturrettekiou(){
    document.getElementById('MechanicTurret').textContent = 'x' + mechanicturret;
    }
function mechanicturretbreak(){
    document.getElementById('PlayerFriendBack').innerHTML = '';
    mechanicturret = 0;
    mechanicturretattack = 0;
    skillcooldown = 0;
}
// enemyの手続き
async function enemieturn() {
    if(playername == 'mechanic' && mechanicturret > 0){
        document.getElementById('log').textContent = 'turretの攻撃!';
        await delay(1000);
        x = enemyhealth;
        y = enemyhealth;
        x -= (mechanicturretattack * mechanicturret);
        x = Math.floor(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
            enemyhealth -= damage;
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!!';
        if (enemyhealth < 0){enemyhealth = 0};
        tekiou();
        await delay(1000);
        }
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
    if (enemyskilldebuff == 1){damage = 0;}
    if (playername == 'mechanic'){w = Math.floor(Math.random() * 5);} // mechanicのPSのスタンの動き(1/5)
    if (w == 0){damage = 0;}
    if (playerskillbuff == 1){y = greenslimecopyhealth; greenslimecopyhealth -= damage; if(greenslimecopyhealth < 0){greenslimecopyhealth = 0} greenslimecopytekiou(); greenslimecopyhealth = Math.floor(greenslimecopyhealth); z = y - greenslimecopyhealth; if(greenslimecopyhealth == 0){greenslimecopybreak(); await delay(1000)};}
    else {playerhealth -= damage; playerhealth = Math.floor(playerhealth); z = y - playerhealth;}
    if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
    else if (z == 0){
        document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';
    } else {
        document.getElementById('log').textContent = playername + 'に' + z + 'のダメージ!';
    }
    if (playerhealth < 0){
        playerhealth = 0
    }
    if (playerhealth == 0){
        defeat();
        turn = 0;
    }
    tekiou();
    if (enemyskilldebuff == 1){
        await delay(1000);
        enemyskilldebuff = 0;
        bufftekiou();
        document.getElementById('log').textContent = enemyname + 'からスライムが剥がれた!';
    }
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
        await delay(1000); // 2秒間の遅延
        document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';
    }
    tekiou();
    if (enemyhealth < 0){
        enemyhealth = 0
    }
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000)
    } else {
        await delay(1000);
        playerturn()
        turncountincrease()
        SkillCooldownDecrease()
        NSaction()
    }
}
}
// ゲームの判定のお話
function killedenemy() {
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
    if (playerskillbuff == 1){x = 1}
    playerskillbuff = 0;
    if (x == 1){playerskillbuff = 1}
    enemydebuff = 0;
    enemyskilldebuff = 0;
    bufftekiou()
    mechanicturretbreak();
    z = enemylevel; // この辺レベルのお話
    enemylevel += (Math.floor(Math.random() * 3) - 1); // -1 ~ +1 
    if (enemylevel < z){enemylevel += (Math.floor(Math.random() * 2));} // 0 ~ +1
    if (playername == 'greenslime' || playername == 'mechanic'){enemylevel += (Math.floor(Math.random() * 2));} // 0 ~ +1}
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
    if (playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!'];}
    else {saydefeats = [playername + 'は力尽きた...残念だったね!にはははは!!', playername + 'は..まけました', '残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、もう一回、やってみない?'];}
    document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
    window.setTimeout(reset, 2000)
}
function StatusAppear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusDisappear()">status</button>';
    document.getElementById('Status').textContent = '攻撃力:' + playerattack + '   防御力:' + playerdefense + '   経験値:' + playerexp +'   魔力:' + playermp;
}
function StatusDisappear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
}