let playername = 'player';
let money = 0;
let bankmoney = 0;
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 1;
let playerdefense = 0;
let playerexp = 0;
let playerpower = 1;
let playershell = 1;
let playermp = 0;
let playermaxmp = 10;
let playercrit = 0.03; //これが確率。会心率ってやつだね
let playercritdmg = 1.5; //これが倍率。会心ダメージってやつだね
let enemyhealth = 0;
let enemymaxhealth = 0;
let enemyattack = 0;
let enemydefense = 0;
let playerlevel = 1;
let enemylevel = 1;
let playerbuff = [];
let playerbufftime = [];
let playerbuffapply = [];
let playerdebuff = [];
let playerdebufftime = [];
let playerdebuffapply = [];
let enemybufftime = [];
let enemybuffapply = [];
let enemydebufftime = [];
let enemydebuffapply = [];
let turn = 0;//今誰のターンか
let turncount = 0;//今のターン数
let phase = 0;//何中か
let t,u,w,x,y,z;
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
                   "古書館の魔術師", "トラブルメーカーな天才少女","黒服",];
let eliteenemynames = ['purpleslime']
let enemyprefixe = 0;
let enemyprefixes = ['強い','弱い'];
let saydefeats = 0;
let NStimeout = 0;
let skillcooldown = 0;
let playerEX = '50%heal';
let playerNS = '5%heal';
let playerPS = 'healthup20';
let playerSS = 0;
function tekiou(){
    document.getElementById('EnemyHealth').textContent = enemyhealth;
    document.getElementById('PlayerHealth').textContent = playerhealth;
}
function bufftekiou(){
    playerbuffapply = [];
    playerbuff.forEach(nanka => {//これをすると全部をやってくれるらしい？
        switch(nanka){
            case 'powerup1':
                playerbuffapply.push('<img src="assets/icons/power_up_1.png" width="18" height="18"> ');
                break;
            case 'powerup2':
                playerbuffapply.push('<img src="assets/icons/power_up_2.png" width="18" height="18"> ');
                break;
            case 'shell':
                playerbuffapply.push('<img src="assets/icons/defense_up_1.png" width="18" height="18"> ');
                break;
            case 'moreshell':
                playerbuffapply.push('<img src="assets/icons/defense_up_2.png" width="18" height="18"> ');
                break;
            case 'luck':
                playerbuffapply.push('<img src="assets/icons/luck.png" width="18" height="18"> ');
                break;
            case 'moreluck':
                playerbuffapply.push('<img src="assets/icons/luck_great.png" width="18" height="18"> ');
                break;
            case 'spliting':
                playerbuffapply.push('<img src="assets/icons/spliting.png" width="18" height="18"> ');
                break;
            case 'LetsThrow':
                playerbuffapply.push('<img src="assets/icons/wrench.png" width="18" height="18"> ');
                break;
            case 'onslime':
                playerbuffapply.push('<img src="assets/icons/onslime.png" width="18" height="18"> ');
                break;
        }
    });
    document.getElementById('PlayerBuff').innerHTML = playerbuffapply.join('');
    playerdebuffapply = [];
    playerdebuff.forEach(nanka => {
        switch(nanka){
            case 'poison':
                playerdebuffapply.push('<img src="assets/icons/poison.png" width="15" height="15"> ');
                break;
            case 'deadlypoison':
                playerdebuffapply.push('<img src="assets/icons/poison_deadly.png" width="15" height="15"> ');
                break;
        }
    });
    document.getElementById('PlayerDebuff').innerHTML = playerdebuffapply.join('');
    enemybuffapply = [];
    enemydebuff.forEach(nanka => {
        switch(nanka){
            case 'powerup1':
                enemybuffapply.push('<img src="assets/icons/power_up_1.png" width="18" height="18"> ');
                break;
        }
    })
};
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // 遅延やってみたかったの

// beginで名前とか全部やります
async function begin(name){
    playername = name;
    document.getElementById('PlayerName').textContent = playername;
    if(name == 'wretch'){
        //"wretch"(持たざる者)[ダークソウル シリーズ]
        // EX 無し
        // NS 無し
        // PS 無し
        // SS 無し
        // こいつ好き
    }else if (name == 'greenslime'){
        //"greenslime"
        // EX 体力を消費して自分のコピーを出し、ダメージを代わりに受けさせる。コピーが倒されると少し回復する。(slimesplit)
        // NS 3の倍数のターンの時、敵にスライムを被せる。スライムが被さると攻撃が当たらなくなる。(throwslime)
        // PS mpが少ないが、防御力が少し高い。
        // SS 攻撃時、たまに2回ヒットする。
    } else if (name == 'mechanic'){
        // "mechanic"
        // EX タレットを後ろに設置し、追加で攻撃力の0.5倍(四捨五入)のダメージを与える。重複設置可能。
        // NS 3の倍数のターンの時、レンチを投げる。(攻撃力が2倍に)
        // PS 体力が低いが、攻撃力がすこぉしたかい。
        // SS 敵の攻撃時、たまにスタンさせて攻撃を無効化する。
    } else if (name == 'clown'){
        // "clown"
        // EX 攻撃力の0~5の倍率のダメージを与える爆弾を敵に投げる。
        // NS 3の倍数のターンの時、攻撃の倍率を0倍/2倍/4倍にする。
        // PS 会心率が高い。
        // SS slash of lightの当たる確率が下がるが、ダメージは9倍になる。
    } else if (name == 'herta'){
        // "herta"(ヘルタ)[崩壊・スターレイル]
        // EX 敵に攻撃力の2倍のダメージを与え、凍らせる。
        // NS 攻撃力が1.4倍になる。
        // PS mpが低いが、会心率が少し高い。
        // SS 攻撃によって相手の体力が半分以下になった時、追撃する。(攻撃力の0.7倍)
    } else if(name == 'geld'){
        // "geld"(ゲルド)[転生したらスライムだった件]
        // EX 強烈な踏み付けにより衝撃波と威圧を与える。「滅心脚」
        // NS 3の倍数のターンの時、相手を腐食する。「混沌喰(カオスイーター)」
        // PS 防御が意味わからんくらい高い。速度は遅い。
        // SS 
    };
    document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
    document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #4da856;padding: 2px 3px;background: #bfffc5;cursor: pointer;}';
    document.getElementById('Thisdisappearsafterthegamestarts').innerHTML = '';
  //document.getElementById('BackButtonDesu').innerHTML = '<button align="center" class="button" onclick="GoToCity()">Back</button>';
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
    reset();
}
async function reset(){
    money = 0;
    turn = 0; turncount = 0;
    playerhealth = 100; playermaxhealth = 100;
    playermp = 50; playermaxmp = 50;
    playerattack = 20; playerpower = 1;
    playerdefense = 0; playershell = 1;
    playercrit = 0.03;
    playerexp = 0; playerlevel = 1;
    enemylevel = 1;
    enemyhealth = 100; enemymaxhealth = 100;
    enemyattack = 10;
    enemydefense = 0;
    w = 0; x = 0; y = 0; z = 0;
    magic1 = 0; magic2 = 0; magic3 = 0; learnedmagic = 0;
    potion = 3; bomb = 3; skipcard = 3;
    skillcooldown = 100;
    playerbuff = [];
    playerdebuff = [];
    enemybuff = [];
    enemydebuff = [];
    bufftekiou();
    switch(playername){
    case 'greenslime':
        playermaxmp = 35;
        playermp = playermaxmp;
        playerdefense = 5;
        break;
    case 'mechanic':
        playermaxhealth = 60;
        playerhealth = playermaxhealth;
        playerattack = 15;
        break;
    case 'clown':
        playercrit = 0.09;
        break;
    case 'herta':
        playermaxmp = 30;
        playermp = playermaxmp;
        playercrit = 0.07;
        hertaenelgy = 1;
        break;
    }//新PSのやつ　わかりやすくていいね
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    tekiou();
    document.getElementById('log').textContent = 'ゲーム開始です！！';
    if(playerbuff.includes('spliting')){greenslimecopybreak();};
    if(playername == 'mechanic'){mechanicturretbreak();};
    await delay(1000);
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)];
    document.getElementById("EnemyName").textContent = enemyname;
    turncountincrease(); playerturn();
}
function restart(){document.getElementById('PlayerName').textContent = playername;tekiou();document.getElementById('log').textContent = 'バトル再開です！';if(playerskillbuff == 1){greenslimecopybreak();};if(playername == 'mechanic'){mechanicturretbreak();};window.setTimeout(playerturn,500);}
let lowedplayerattack = 0; let lowedplayerdefense = 0; let lowedplayermaxmp = 0; let lowedplayermaxhealth = 0; let lowedplayerlevel = 0;
function GoToBattle(){document.getElementById('GameScene').innerHTML = '<span>turn:</span><span id="TurnCount">0</span><br><b id="EnemyName">enemy</b>   <i>Lv.</i><i id="EnemyLevel">1</i>   <u id="EnemyDebuff"></u>   <u id="EnemySkillDebuff"></u><br><span id="EnemyHealth">0</span>/<span id="EnemyMaxHealth">0</span><span id="PlayerFriendFront"></span><br><br><b id="PlayerName">player</b>   <i>Lv.</i><i id="PlayerLevel">1</i>  <span id="AdditionalPlayerPoint"></span><br><span id="PlayerHealth">0</span>/<span id="PlayerMaxHealth">0</span><br><span id="PlayerBuff"></span> <span id="PlayerDebuff"></span><span id="PlayerFriendBack"></span><br><br><br><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button><button class="button" id="select3" onclick="select3()">tools</button><button class="button" id="back" onclick="back()">pass</button><br><span id="Skillbutton"></span><br><br><span align="center" id="log"></span><br><span id="StatusAppearDisappear"><button class="button" id="StatusButton" onclick="StatusAppear()">status</button></span><br><span id="Status"></span>';    document.getElementById('TurnCount').textContent = turncount;document.getElementById('EnemyLevel').textContent = enemylevel;document.getElementById('PlayerLevel').textContent = playerlevel;document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;tekiou(); bufftekiou(); disappear(); restart();}
function turncountincrease(){turncount += 1; document.getElementById('TurnCount').textContent = turncount;}
async function NSaction(){
    NStimeout = 0;
    if ((turncount % 3) == 0 && playername == 'greenslime'){
        if(enemydebuff.includes('onslime') == false){
        enemydebuff.push('onslime');
        bufftekiou();
        document.getElementById('log').textContent = enemyname + 'にスライムが覆い被さった!';
        NStimeout = 1;
        };
    } else if ((turncount % 4) == 0 && playername == 'mechanic'){
        playerbuff.push('LetsThrow');
        bufftekiou();
        document.getElementById('log').textContent = 'wrenchを投げる準備ができた!';
        NStimeout = 1;
    } else if ((turncount % 3) == 0 && playername == 'clown'){
        if(playerbuff.includes('gambling') == false){
            playerbuff.push('gambling');
            bufftekiou();
            document.getElementById('log').textContent = 'さあ、ギャンブルの時間だ!!';
            NStimeout = 1;
        }
    } else if(turncount == 6 && playername == 'herta'){
        if(playerbuff.includes('improve') == false){
            playerbuff.push('improve');
            bufftekiou();
            document.getElementById('log').textContent = 'パーツアップグレード。';
            NStimeout = 1;
        } else if(playerbuff.includes('improve')){
            playerbuff.splice(playerbuff.indexOf('improve'), 1);
            bufftekiou();
        }
    } else if((turncount % 4) == 0 && playername == 'geld'){
        enemydebuff.push('corrosion')
        bufftekiou();
        document.getElementById('log').textContent = 'これはどうだ？';
        NStimeout = 1;
    } else if((turncount % 3) == 0 && playerNS == '5%heal'){
        x = playerhealth;
        playerhealth += Math.ceil(playermaxhealth * 0.2);
        if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
        x = playerhealth - x;
        tekiou();
        if(x > 0){document.getElementById('log').textContent = '5%のHPを回復した！'; NStimeout = 1;}
    }
    if(NStimeout == 1){await delay(1000);};
    playerturn();
}

async function playerdamaged(dam){
    playerhealth -= dam;
};

async function enemydamaged(dam){
    enemyhealth -= dam;
    if(enemyhealth < 0){enemyhealth = 0};
    tekiou();
    document.getElementById('log').textContent = enemyname + 'に' + dam + 'のダメージ！';

    switch(playername){
        case 'Wretch': skillcooldown += 10; break;
        case 'greenslime': skillcooldown += 5; break;
        case 'mechanic': skillcooldown += 20; break;
        case 'clown': skillcooldown += 15; break;
        case 'herta': skillcooldown += 10; break;
    }
    if(skillcooldown > 100){skillcooldown = 100};
    if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}
    else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};//新！クールダウン！！

    if(playername == 'herta' && enemyhealth <= playermaxhealth / 2 && hertaenelgy == 1 && enemyhealth > 0){
        hertaenelgy = 0;
        await delay(1000);
        z = Math.floor(Math.random() * 2);
        if(z == 0){document.getElementById('log').textContent = 'くるくる～――っと';}else{document.getElementById('log').textContent = 'くるりん～っと';}
        await delay(1000);
        x = (playerattack * playerpower * 1.1 + weaponpower); x -= (enemydefense);
        if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 3; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
        if(playerbuff.includes('improve')){x *= 1.4;};
        y = (x * [Math.random() *0.1]); y *= [Math.random() < 0.5 ? -1 : 1];  x += y;
        x = Math.ceil(x);
        if(playerbuff.includes('LetsThrow')){x *= 2; playerbuff.splice(playerbuff.indexOf('LetsThrow'), 1); bufftekiou();};
        if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        if(enemyhealth < 0){enemyhealth = 0};
        tekiou();
        document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
        skillcooldown += 10;
        if(skillcooldown > 100){skillcooldown = 100};
        if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}
        else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
    } //こうなると集団戦も作りたいねぇ,,,,
};

async function playerturn() {
    if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
    z = 0;
    if(playerdebuff.includes('onslime')){
        x = Math.floor(Math.random() * 3);
        if(x !== 0){playerdebuff.splice(playerdebuff.indexOf('onslime'), 1); bufftekiou(); document.getElementById('log').textContent = 'なんとかスライムを取り払った!!'}
        else {document.getElementById('log').textContent = 'スライムが邪魔して動けない!!'; z = 1;}; 
    }
    if(z == 0){
    if(playername == 'mechanic'){mechanicturretattack = Math.round(playerattack * 0.5);};if (turn !== 3){turn = 1;};
    phase = 1;
    document.getElementById('log').textContent = 'あなたのターンです！';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'magic';
    document.getElementById('select3').textContent = 'tools';
    document.getElementById('back').textContent = 'pass';
  //document.getElementById('BackButtonDesu').innerHTML = '<button align="center" class="button" onclick="GoToCity()">Back</button>';
    errorcheck();
    } else if(z == 1){window.setTimeout(enemyorplayer, 1000)}
};
// 選択ボタン
async function select1(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうやって攻撃する？';
        document.getElementById('select1').textContent = 'slash';
        document.getElementById('select2').textContent = 'double slash';
        document.getElementById('select3').textContent = 'slash of light';
        document.getElementById('back').textContent = 'back';
        phase = 2;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の斬撃!';
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
        playerattack += 5;
        document.getElementById('log').textContent = '攻撃力が上がった!';
        window.setTimeout(nextenemy,1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic1 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic1 = learnmagic
        window.setTimeout(nextenemy,1000)
    }
}
async function select2(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうする？';
        document.getElementById('select1').textContent = magic1;
        document.getElementById('select2').textContent = magic2;
        document.getElementById('select3').textContent = magic3;
        document.getElementById('back').textContent = 'back';
        phase = 3;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の回転斬り!!';
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
        playerdefense += 5;
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
        switch (learnedmagic) {
            case 1: learnmagic = 'heal';          break;
            case 2: learnmagic = 'power';         break;
            case 3: learnmagic = 'shell';         break;
            case 4: learnmagic = 'poison';        break;
            case 5: learnmagic = 'healer than';   break;
            case 6: learnmagic = 'luck';          break;
            case 7: learnmagic = 'more power';    break;
            case 8: learnmagic = 'more shell';    break;
            case 9: learnmagic = 'deadly poison'; break;
            case 10:learnmagic = 'the healest';   break;
            case 11:learnmagic = 'greatluck';     break;
            default:
                learnmagic = 'random';
                document.getElementById('log').textContent = '魔法は見つからなかった...しかしrandomを思いついた!';
                playersutefuri();
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
        disappear();
        phase = 0;
        playermaxmp += Math.floor(Math.random()*6)+5;
        playermp = playermaxmp;
        document.getElementById('log').textContent = '魔力が上がった!';
        window.setTimeout(nextenemy, 1000)
    } else if(phase == 6){
        disappear();
        document.getElementById('log').textContent = 'やっぱり覚えるのをやめた！';
        window.setTimeout(nextenemy, 1000)
    }
    
}
function disappear(){
    document.getElementById('select1').textContent = ' ';
    document.getElementById('select2').textContent = ' ';
    document.getElementById('select3').textContent = ' ';
    document.getElementById('back').textContent = '';
  //document.getElementById('BackButtonDesu').innerHTML = '';
    phase = 'null';
}
// playerの攻撃たち
// playerの斬撃攻撃
async function slash() {
    x = (playerattack * playerpower + weaponpower);
    x -= (enemydefense);
    if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 3; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
    if(playerbuff.includes('improve')){x *= 1.4;};
    y = (x * [Math.random() *0.1]);
    y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
    x += y; //ムラ発生機
    x = Math.ceil(x);
    if(playerbuff.includes('LetsThrow')){x *= 2; playerbuff.splice(playerbuff.indexOf('LetsThrow'), 1); bufftekiou();};
    if(playerbuff.includes('gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; playerbuff.splice(playerbuff.indexOf('gambling'), 1); bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
    if(x < 0){x = 0};
    if(x > enemyhealth){x = enemyhealth};
    await enemydamaged(x);
    x = Math.floor(Math.random() * 4); // 1/5の確率
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000);
    }else if(playername == 'greenslime' && x == 0){
            await delay(1000)
            document.getElementById('log').textContent = 'greenslimeは頑張った!';
            await delay(500)
            x = (playerattack * playerpower);
            x -= (enemydefense);
            if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 3; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};if(playerbuff.includes('improve')){x *= 1.4;};
            y = (x * [Math.random() *0.1]);
            y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
            x += y; //ムラ発生機
            x = Math.ceil(x);
            if(x < 0){x = 0};
            if(x > enemyhealth){x = enemyhealth};
            enemyhealth -= x;
            document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
            skillcooldown += 5;
            if(skillcooldown > 100){skillcooldown = 100};
            if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}
            else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
            if (enemyhealth < 0){enemyhealth = 0 }
            tekiou();
            if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
            else{
                await delay(1000)
                x = (playerattack * playerpower);
                x -= (enemydefense);
                if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 3; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
                if(playerbuff.includes('improve')){x *= 1.4;};
                y = (x * [Math.random() *0.1]);
                y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
                x += y; //ムラ発生機
                x = Math.ceil(x);
                if(x < 0){x = 0};
                if(x > enemyhealth){x = enemyhealth};
                enemyhealth -= x;
                document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
                skillcooldown += 5;
                if(skillcooldown > 100){skillcooldown = 100};
                if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}
                else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
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
            x = 0
        } else {
            x = (playerattack * playerpower + weaponpower);
            x -= (enemydefense);
            if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 5; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
            if(playerbuff.includes('improve')){x *= 1.4;};
            y = (x * [Math.random() *0.1]);
            y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
            x += y; //ムラ発生機
            x = Math.ceil(x);
            if(playerbuff.includes('LetsThrow')){x *= 2; playerbuff.splice(playerbuff.indexOf('LetsThrow'), 1); bufftekiou();}
            if(playerbuff.includes('gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; playerbuff.splice(playerbuff.indexOf('gambling'), 1); bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
            if(x < 0){x = 0};
            if(x > enemyhealth){x = enemyhealth};
        }
    if (x == 0){
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    } else {
    await enemydamaged(x);
    document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
    tekiou();
    }
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000)
    } else {
        x = Math.floor(Math.random() * 3);//2/3
        if (x == 0){
            x = 0
        } else {
            x = (playerattack * playerpower + weaponpower);
            x -= (enemydefense);
            if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 5; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
            y = (x * [Math.random() *0.1]);
            y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
            x += y; //ムラ発生機
            x = Math.ceil(x);
            if(playerbuff.includes('LetsThrow')){x *= 2; playerbuff.splice(playerbuff.indexOf('LetsThrow'), 1); bufftekiou();}
            if(playerbuff.includes('gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; playerbuff.splice(playerbuff.indexOf('gambling'), 1); bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
            if(x < 0){x = 0};
            if(x > enemyhealth){x = enemyhealth};
        }
        if (x == 0){
            await delay(1000);
            document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
        } else {
            await delay(1000);
            await enemydamaged(x);
            document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
            if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}   
        }
        window.setTimeout(enemyorplayer, 1000)
    }
}
async function slashoflight() {
    x = Math.floor(Math.random() * 3); // 1/3です
    if (playername == 'clown'){x = Math.floor(Math.random() * 5);} // 1/5です。
    if (x == 0) {
        x = (playerattack * 3 * playerpower + weaponpower);
        x -= (enemydefense);
        if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 5; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
        y = (x * [Math.random() *0.1]);
        y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
        x += y; //ムラ発生機
        x = Math.ceil(x);
        if(playerbuff.includes('LetsThrow')){x *= 2; playerbuff.splice(playerbuff.indexOf('LetsThrow'), 1); bufftekiou();}
        if(playerbuff.includes('gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; playerbuff.splice(playerbuff.indexOf('gambling'), 1); bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
        if(playername == 'clown'){x *= 3;} //clownさんなら最高倍率36倍の台です(1/playercrit) //会心も合わせると最高倍率180倍です(1/90)
        if(x < 0){x = 0};  
        if(x > enemyhealth){x = enemyhealth};
        await enemydamaged(x);
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    } else {
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    }
    window.setTimeout(enemyorplayer, 1000)
}
// playerの魔法
// 魔法の一覧です
// heal　20%回復 mp:4
// power　attack 1.5倍 code:1 mp:5
// shell　defence 1.5倍 code:3 mp:5
// poison　敵に毒を付与　毎ターン5%ダメージ code:1 mp:7
// healerthan　40%回復 mp:8
// luck　ターン終了時、1/5の確率でターン継続 code:5 mp:7
// morepower　attack 2倍 code:2 mp:10
// moreshell defence 2倍 code:4 m[:10]
// deadlypoison　敵に毒を付与　毎ターン10%ダメージ code:2 mp:14
// thehealest　60%回復 mp:12
// greatluck　ターン終了後、1/2の確率でターン継続 code:6 mp:14
// random ランダムな魔法を使用する mp:1
function magic() {
    switch(z){
        case 'heal':
            if(playermp >= 4){
            Heal();
            playermp -= 4;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'power':
            if(playermp >= 5){
            Power();
            playermp -= 5;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'shell':
            if(playermp >= 5){
            Shell();
            playermp -= 5;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'poison':
            if(playermp >= 7){
            Poison();
            playermp -= 7;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'healer than':
            if(playermp >= 8){
            Healerthan();
            playermp -= 8;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'luck':
            if(playermp >= 7){
            Luck();
            playermp -= 7;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'more power':
            if(playermp >= 10){
            Morepower();
            playermp -= 10;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'more shell':
            if(playermp >= 10){
            Moreshell();
            playermp -= 10;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'deadly poison':
            if(playermp >= 14){
            Deadlypoison();
            playermp -= 14;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'the healest':
            if(playermp >= 12){
            Thehealest();
            playermp -= 12;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'greatluck':
            if(playermp >= 15){
            Greatluck();
            playermp -= 15;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'random':
            if(playermp >= 1){
            Random();
            playermp -= 1;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        default:
            document.getElementById('log').textContent = 'errrrrrr';
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
    if(playerbuff.includes('powerup1') == false){playerbuff.push('powerup1');}
    playerpower = 1.25;
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はpowerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Shell() {
    if(playerbuff.includes('shellup1') == false){playerbuff.push('shellup1');}
    playershell = 1.25;
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はshellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Poison() {
    if(playerbuff.includes('poison') == false){enemydebuff.push('poison');}
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
    if(playerbuff.includes('luck') == false){playerbuff.push('luck');}
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Morepower() {
    if(playerbuff.includes('powerup1')){playerbuff.splice(playerbuff.indexOf('powerup1'), 1);}
    if(playerbuff.includes('powerup2') == false){playerbuff.push('powerup2');}
    playerpower = 1.5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はmore powerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Moreshell() {
    if(playerbuff.includes('shellup1')){playerbuff.splice(playerbuff.indexOf('shellup1'), 1);}
    if(playerbuff.includes('shellup2') == false){playerbuff.push('shellup2');}
    playershell = 1.5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はmore shellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Deadlypoison() {
    if(playerbuff.includes('deadlypoison') == false){enemydebuff.push('deadlypoison');}
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
    if(playerbuff.includes('greatluck') == false){playerbuff.push('greatluck');}
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はgreatluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
async function Random(){
    document.getElementById('log').textContent = '.........';
    await delay(1000);
    x = Math.floor(Math.random() * 11)
    switch (x) {
        case 0:
            document.getElementById('log').textContent = 'healが出た!';
            window.setTimeout(Heal, 1000);
            break;
        case 1:
            document.getElementById('log').textContent = 'powerが出た!';
            window.setTimeout(Power, 1000);
            break;
        case 2:
            document.getElementById('log').textContent = 'shellが出た!';
            window.setTimeout(Shell, 1000);
            break;
        case 3:
            document.getElementById('log').textContent = 'poisonが出た!';
            window.setTimeout(Poison, 1000);
            break;
        case 4:
            document.getElementById('log').textContent = 'healer thanが出た!';
            window.setTimeout(Healerthan, 1000);
            break;
        case 5:
            document.getElementById('log').textContent = 'luckが出た!';
            window.setTimeout(Luck, 1000);
            break;
        case 6:
            document.getElementById('log').textContent = 'more powerが出た!';
            window.setTimeout(Morepower, 1000);
            break;
        case 7:
            document.getElementById('log').textContent = 'more shellが出た!';
            window.setTimeout(Moreshell, 1000);
            break;
        case 8:
            document.getElementById('log').textContent = 'deadly poisonが出た!';
            window.setTimeout(Deadlypoison, 1000);
            break;
        case 9:
            document.getElementById('log').textContent = 'the healestが出た!';
            window.setTimeout(Thehealest, 1000);
            break;
        case 10:
            document.getElementById('log').textContent = 'greatluckが出た!';
            window.setTimeout(Greatluck, 1000);
            break;
        default:
            document.getElementById('log').textContent = '不明なエラーが発生しました';
            break;
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
    document.getElementById('log').textContent = '私のファイナルエターナルラストアタック!!相手は死ぬ!!!';
    bomb -= 1;
    window.setTimeout(killedenemy, 1000)
}
function Skipcard() {
    turn = 3;
    document.getElementById('log').textContent = 'カードを仕込みました!';
    skipcard -= 1;
    window.setTimeout(playerturn, 1000)
}
let greenslimecopyhealth = 0;
let greenslimecopymaxhealth = 0;
let mechanicturret = 0;
let mechanicturretattack = 0;
let clowngambling = ['0','0','2','2','2','4'];
let hertaEXvoice = ['こんな大きなダイアモンド見たことないでしょ？あげるね～','あなた…それじゃあダメだよ','ちょっとは静かになさい！','私が誰だか知ってるの？']
// skillの手続き
async function skillact() {
    if(phase == 1){
    if (skillcooldown == 100){
        if(playername == 'greenslime'){
        if(playerbuff.includes('spliting') == false){
        if(playerhealth > Math.floor(playermaxhealth * 0.5)){
        playerbuff.push('spliting');
        bufftekiou()
        x = Math.floor(playermaxhealth * 0.5);
        playerhealth -= x;
        document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#2EFE2E">greenslimeのコピー</font></b>  <br><span id="GreenSlimeCopyHealth">0</span>/<span id="GreenSlimeCopyMaxHealth">0</span>';
        greenslimecopymaxhealth = x;
        greenslimecopyhealth = x;
        greenslimecopytekiou()
        document.getElementById('log').textContent = 'greenslimeは分裂した!!';
        tekiou()
        } else {document.getElementById('log').textContent = 'tairyoku ga sukunai desu...';}
        }
    } else if(playername == 'mechanic'){
        document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="MechanicTurret"></span></b>';
        mechanicturret += 1;
        mechanicturrettekiou()
        mechanicturretattack = Math.round(playerattack * 0.5);
        document.getElementById('Skillbutton').innerHTML = '';
        document.getElementById('log').textContent = 'mechacicはturretを設置した!';
        skillcooldown = 0;
        document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="offskillbutton" onclick="skillact()"></button>'
        document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
    } else if(playername == 'clown'){
        phase = 0; disappear();
        document.getElementById('log').textContent = 'clownは爆弾を投げた...';
        document.getElementById('Skillbutton').innerHTML = '';
        window.setTimeout(clownbomb, 1000)
        skillcooldown = 0;
        document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="offskillbutton" onclick="skillact()"></button>'
        document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
    } else if(playername == 'herta'){
        phase = 0; disappear(); skillcooldown = 0;
        document.getElementById('log').textContent = hertaEXvoice[Math.floor(Math.random() * hertaEXvoice.length)];
        await delay(1000);
        x = (playerattack * playerpower * 2 + weaponpower); x -= (enemydefense);    
        y = (x * [Math.random() *0.1]); y *= [Math.random() < 0.5 ? -1 : 1]; x += y;
        x = Math.ceil(x);
        if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
        tekiou();   
        if(enemydebuff.includes('freeze') == false){enemydebuff.push('freeze'); bufftekiou();}
        skillcooldown = 0;
        document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="offskillbutton" onclick="skillact()"></button>'
        document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
        window.setTimeout(enemyorplayer, 1000)
    } else if(playerEX == '50%heal'){
        x = playerhealth;
        playerhealth += Math.floor(playermaxhealth * 0.5);
        if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
        x = playerhealth - x;
        if(x > 0){
            document.getElementById('log').textContent = '体力が' + x + '回復した!';
            skillcooldown = 0;
            document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="offskillbutton" onclick="skillact()"></button>'
            document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
        } else {
            document.getElementById('log').textContent = 'health is already full...';
        }
    }
    } else {document.getElementById('log').textContent = 'skill is not ready...';}
    } else if(phase == 5){
        disappear()
        playermaxhealth += Math.floor(Math.random() * 21) + 5;
        playerhealth = playermaxhealth;
        document.getElementById('PlayerHealth').textContent = playerhealth;
        document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
        document.getElementById('log').textContent = '体力が増えた!';
        window.setTimeout(nextenemy, 1000)
    }
}
function greenslimecopytekiou(){
    document.getElementById('GreenSlimeCopyHealth').textContent = greenslimecopyhealth;
    document.getElementById('GreenSlimeCopyMaxHealth').textContent = greenslimecopymaxhealth;
    }
function greenslimecopybreak(){
    playerbuff.splice(playerbuff.indexOf('spliting'), 1);
    bufftekiou()
    x = Math.floor(greenslimecopymaxhealth * 0.7);
    playerhealth += x;
    if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
    document.getElementById('PlayerFriendFront').innerHTML = ' ';
    greenslimecopymaxhealth = 0;
    greenslimecopyhealth = 0;
    document.getElementById('log').textContent = 'greenslimeのコピーは倒された...';
    skillcooldown = 0;
    document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="offskillbutton" onclick="skillact()"></button>'
    document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
}
function mechanicturrettekiou(){
    document.getElementById('MechanicTurret').textContent = 'x' + mechanicturret;
    }
function mechanicturretbreak(){
    document.getElementById('PlayerFriendBack').innerHTML = '';
    mechanicturret = 0;
    mechanicturretattack = 0;
}
function clownbomb(){
    x = Math.floor(Math.random() * 6);
    if (x == 0){
        document.getElementById('log').textContent = 'しかし不発弾だった!!';
        phase = 1; window.setTimeout(playerturn, 1000);
    } else if(x == 5){
        document.getElementById('log').textContent = 'Lucky! 爆弾は焼夷弾だった!!!';
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 4){
        document.getElementById('log').textContent = '爆弾は花火だった!';
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 3){
        document.getElementById('log').textContent = '爆弾は毒ガス入りだった!!';
        if(enemydebuff.includes('poison') == false){enemydebuff.push('poison');} // 毒ガス入りだった場合
        bufftekiou();
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 2){
        document.getElementById('log').textContent = '爆弾はスライム入りだった!!';
        if(enemydebuff.includes('onslime') == false){enemydebuff.push('onslime')} // スライム入りだった場合
        bufftekiou();
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 1){
        document.getElementById('log').textContent = '爆発した..だがただの特殊な薬品だった!!';
        window.setTimeout(clownbombexplosion, 1000)
    }
}
function clownbombexplosion(){
    y = Math.floor(x * playerattack);
    if(y > enemyhealth){y = enemyhealth;};
    z = (y * [Math.random() *0.1]);
    z *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
    y += z; //ムラ発生機
    y = Math.ceil(y);
    enemyhealth -= y;
    if(enemyhealth < 0){enemyhealth = 0};
    tekiou();
    document.getElementById('log').textContent = '敵に' + y + 'のダメージを与えた!';
    if (enemyhealth == 0){window.setTimeout(killedenemy,1000);;}
    else {phase = 1; window.setTimeout(enemyorplayer, 1000)};
}
// enemieturnまでの道のり
function enemyorplayer(){
    if (turn == 1){
        y = 1;
        if (playerbuff.includes('luck')){y = Math.floor(Math.random() * 5);}//luck
        if (playerbuff.includes('greakluck')){y = Math.floor(Math.random() * 3);}//greak luck
        if (y == 0){
            document.getElementById('log').textContent = 'Lucky♪';
            window.setTimeout(playerturn, 1000)
        } else{enemieturn()}
        } else if (turn == 3){
            document.getElementById('log').textContent = 'スキップ!!!';
            window.setTimeout(playerturn, 1000);
            turncountincrease();
            turn = 1;
        } else if (turn == 2){
            document.getElementById('log').textContent = 'error....';
            window.setTimeout(playerturn, 1000)
        }
}


// enemyの手続き
async function enemieturn() {
    if(playername == 'mechanic' && mechanicturret > 0){
        document.getElementById('log').textContent = 'turretの攻撃!';
        await delay(1000);
        x = (mechanicturretattack * mechanicturret);
        x -= (enemydefense);
        y = (x * [Math.random() *0.1]);
        y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
        x += y; //ムラ発生機 //ここにも登場！
        x = Math.ceil(x);
        if(x < 0){x = 0};
        if(x > enemyhealth){x = enemyhealth};
        await enemydamaged(x);
        await delay(1000);
        }
    if (enemyhealth == 0){killedenemy();}
    else {
    if(enemydebuff.includes('freeze')){
        if(Math.floor(Math.random() * 3) !== 0){document.getElementById('log').textContent = '氷が溶けた!'; enemydebuff.splice(enemydebuff.indexOf('freeze'), 1); bufftekiou(); turn = 2; document.getElementById('log').textContent = '敵のターンです!'; window.setTimeout(Enemyattack, 1000);
        }else{document.getElementById('log').textContent = enemyname + 'は凍っている...'; await delay(1000); turncountincrease(); NSaction();}
    } else {
    turn = 2;
    document.getElementById('log').textContent = '敵のターンです!';
    window.setTimeout(Enemyattack, 1000);
    }}
}
async function Enemyattack() {
    w = 1;
    x = enemyattack;
    x -= (playerdefense * playershell + armorshell);
    if(x < 0){x = 0};
    z = Math.floor(Math.random() * 35); // 1/35
    if(z == 0){x += (playerdefense * playershell + armorshell); x *= 3; document.getElementById('log').textContent = '痛恨の一撃!'; await delay(1000);};
    y = (x * [Math.random() *0.1]);
    y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
    x += y; //ムラ発生機
    x = Math.ceil(x);
    if (x < 0){x = 0;};
    if (enemydebuff.includes('onslime')){x = 0;};
    if (playername == 'mechanic'){w = Math.floor(Math.random() * 7);}; //1/7
    if (w == 0){x = 0;};//スタン用
    if (playerbuff.includes('spliting')){greenslimecopyhealth -= x; if(greenslimecopyhealth < 0){greenslimecopyhealth = 0}; greenslimecopytekiou(); greenslimecopyhealth = Math.floor(greenslimecopyhealth); if(greenslimecopyhealth == 0){greenslimecopybreak(); await delay(1000)};}
    else {await playerdamaged(Math.floor(x));tekiou();if(playerhealth <= 0){playerhealth = 0; defeat();turn = 0};};//これが通常
    if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
    else if (x == 0){document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';}
    else {document.getElementById('log').textContent = playername + 'に' + x + 'のダメージ!';};
    if (enemydebuff.includes('onslime')){await delay(1000);enemydebuff.splice(enemydebuff.indexOf('onslime'), 1);bufftekiou();document.getElementById('log').textContent = enemyname + 'からスライムが剥がれた!';};
    if (turn == 2){
    if (enemydebuff.includes('poison')) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.05
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } else if (enemydebuff.includes('deadlypoison')) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.1
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } 
    if (enemydebuff.includes('poison') || enemydebuff.includes('deadlypoison')) {await delay(1000);document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';};
    tekiou();
    if (enemyhealth < 0){enemyhealth = 0}
    if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    else {
        await delay(1000);
        turncountincrease()
        NSaction()
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
    await delay(1000);
    z = Math.floor(Math.random() * 11) + 1;
    money += z;
    document.getElementById('log').textContent =  z + '€を獲得した!';
    window.setTimeout(expget, 1000)
}
function expget(){
    document.getElementById('log').textContent = y + 'の経験値を奪った!';
    window.setTimeout(playerlevelup, 1000)
    if(playerexp >= playerlevel){
        document.getElementById('log').textContent = 'レベルアップ!!'; window.setTimeout(playerlevelup,1000);}else{window.setTimeout(nextenemy, 1000)

    }
}
let i;
function playerlevelup(){
        playerlevel += 1; playerexp -= playerlevel;
        learnedmagic += 1;
        document.getElementById('PlayerLevel').textContent = playerlevel;
        if(playerexp >= playerlevel){window.setTimeout(playerlevelup, 1000)}
        else{window.setTimeout(playersutefuri, 1000)}
}
async function nextenemy() {
    turncount = 0;
    document.getElementById('TurnCount').textContent = turncount;
    playermp = playermaxmp;
    playerpower = 1;
    playershell = 1;
    x = 0;
    mechanicturretbreak();
    if(playername == 'herta'){hertaenelgy = 1;};

    //ここで何が起きるかの抽選会
    x = Math.floor(Math.random() * 5) + 1;
    if(x == 1||x == 2||x == 3){//敵登場！！
    
    z = Math.floor(Math.random() * 2);// 0~1
   z += Math.floor(Math.random() * 2);// 0~1
    enemylevel += z
    if(z !== 0){
        document.getElementById('log').textContent = '敵は'+z+'レベル上がった!';
        await delay(1000);
        for(i = 0; i < z; i++){
        y = Math.floor(Math.random() * 3) + 1;
        switch(y){
            case 1: enemymaxhealth += Math.floor(Math.random() * 11) + 5; document.getElementById('log').textContent = '敵は体力が増えた!'; await delay(800); break;
            case 2: enemyattack  += Math.floor(Math.random()*3)+4; document.getElementById('log').textContent = '敵の攻撃力が上がった!'; await delay(800); break;
            case 3: enemydefense += Math.floor(Math.random()*3)+4; document.getElementById('log').textContent = '敵の防御力が上がった!'; await delay(800); break;
        }}
    }
    enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    x = Math.floor(Math.random() * 10);
    if(x !== 0){
        enemyprefixe = 0;
        enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
        y = Math.floor(Math.random() * 3); // 1/3
        if(y == 0){enemyprefixe = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]};
        if(enemyprefixe !== 0){enemyname = enemyprefixe + ' ' + enemyname}
        else {enemyname = enemyname}; // 敵に接頭辞を確率で付与します。意味はありません。ひとえに愛だよ
        document.getElementById("EnemyName").textContent = enemyname;
        document.getElementById('EnemyLevel').textContent = enemylevel;
        document.getElementById('log').textContent = enemyname + 'が現れた!';
        tekiou();
        window.setTimeout(playerturn, 750);
        turncountincrease();

    } else {//強敵登場！
        enemyname = eliteenemynames[Math.floor(Math.random() * eliteenemynames.length)]; // 敵の名前を決めます
        document.getElementById('log').textContent = '注意！何かが来ている......!!';
        await delay(1000);
        document.getElementById("EnemyName").textContent = enemyname;
        document.getElementById('EnemyLevel').textContent = enemylevel;
        document.getElementById('log').textContent = enemyname + 'が現れた!!';
        tekiou();
        window.setTimeout(playerturn, 750);
        turncountincrease();
    }
    } else if(x == 4){//何かしらのイベント
        x = Math.floor(Math.random() * 2) + 1;
        eventoccur(x);
    } else if(x == 5){//休憩所

    }
}   

function playersutefuri(){
    document.getElementById('log').textContent = 'どの能力を上げますか?';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'defense';
    document.getElementById('select3').textContent = 'magic';
    document.getElementById('back').textContent = 'mp';
    document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">health</button>'
    phase = 5;
}

function defeat() {
    if (playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あはは..負けちゃいましたね....zombieは生き返ることができるのでそれで慣れると良いですよ!','あれ〜？負けちゃったんですか〜？？おにいさん弱いね〜'];}
    else {saydefeats = [playername + 'は力尽きた...残念でしたね！にはははは〜！', playername + 'は..まけました', '残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、もう一回、やってみない?','あれあれ〜？まけちゃったんですか〜？？よっわw'];}
    document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
    window.setTimeout(begin, 2000)
}
async function errorcheck(){if(playerattack == Infinity || playerdefense == Infinity || playerhealth == Infinity ||  playermaxhealth == Infinity || playerlevel == Infinity || playerpower == Infinity || playermaxmp == Infinity || playershell == Infinity || isNaN(playerhealth) || isNaN(playermaxhealth) || isNaN(playerattack) || isNaN(playerdefense) || isNaN(playermaxmp) || isNaN(playerpower) || isNaN(playershell) || isNaN(playerlevel) || potion == Infinity || money == Infinity || bomb == Infinity || skipcard == Infinity || isNaN(potion) || isNaN(money) || isNaN(bomb) || isNaN(skipcard)){document.getElementById('log').textContent = 'error100が発生しました。'; await delay(1000); document.getElementById('log').textContent = 'リブートを開始します。'; await delay(1000); open('about:blank', '_self').close();}} //おっとこれは...?}
function StatusAppear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusDisappear()">status</button>';
    document.getElementById('Status').innerHTML = '攻撃力:' + playerattack + '   防御力:' + playerdefense + '   魔力:' + playermp + '<br>' + '   経験値:' + playerexp + '   お金' + money + '€';
}
function StatusDisappear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
}
// こっからcityとかのやつです
function GoToCity(){
    document.getElementById('GameScene').innerHTML = '<button class="button" id="GoToBattle" onclick="GoToBattle()">Go To Battle</button><br><br><br><button class="button" id="GoToCityBattle" onclick="GoToShop()">Go To Shop</button><br><br><br>';
} // document.getElementById("LevelPlate").src = 'level_plate_' + x + '.png';

let nowshop = 0;
let haveweapons = [];
let havearmors = [];
let havetools = [];
let equipweapon = 0;
let equiparmor = 0;
let equiptool1 = 0;
let equiptool2 = 0;
let equiptool3 = 0;
let weaponpower = 0;
let armorshell = 0;
function GoToShop(){
    nowshop = 0;
    document.getElementById('GameScene').innerHTML = '<span id="InShopScene"><button class="button" id="ShopBuyWeapons" onclick="ShopBuyWeapons()">Buy Weapons</button><br><br><button class="button" id="ShopBuyArmors" onclick="ShopBuyArmors()">Buy Armors</button><br><br><button class="button" id="ShopBuyTools" onclick="ShopBuyTools()">Buy Tools</button><br><br><button class="button" id="ShopEquip" onclick="GoToEquip()">Equip Center</button></span><br><br><br><br><button class="button" id="BackToCity" onclick="GoToCity()">Back To City</button>';
}
function ShopBuyWeapons(){
    nowshop = 1;
    document.getElementById('GameScene').innerHTML = '<span id="InShopScene"><span id="SHOPMONEY"></span><p>ここにはこんなものがあるけど、どうする？<br><iframe height="230" width="200" src="https://koppepan-orange-game.github.io/game_daisuki/clicker_of_mugen_shop_weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><span id="SHOPlog"></span></p><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>';
    SHOPmoneytekiou();
}
function ShopBuyArmors(){
    nowshop = 2;
    document.getElementById('GameScene').innerHTML = '<span id="InShopScene"><span id="SHOPMONEY"></span><p>うちの店ではこんなものが売ってるよ<br><iframe height="230" width="200" src="https://koppepan-orange-game.github.io/game_daisuki/clicker_of_mugen_shop_armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><span id="SHOPlog"></span></p><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>';
    SHOPmoneytekiou();
}
function ShopBuyTools(){
    nowshop = 3;
    document.getElementById('GameScene').innerHTML = '<span id="InShopScene"><span id="SHOPMONEY"></span><p>いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！<br><iframe height="230" width="200" src="https://koppepan-orange-game.github.io/game_daisuki/clicker_of_mugen_shop_tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><span id="SHOPlog"></span></p><br><br><br><br><button class="button" id="BackToShop" onclick="GoToShop()">Back To Shop</button></span>';
    SHOPmoneytekiou();
}
function ShopBuyButton(){
    shopinputtext = document.getElementById('ShopInputText').value;
    switch(shopinputtext){
      case '01':
        if(nowshop == 1){
        if(haveweapons.includes("木の棒")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; haveweapons.push('木の棒');document.getElementById('SHOPlog').textContent = '木の棒を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("マスク")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 10){money -= 10; havearmors.push('マスク');document.getElementById('SHOPlog').textContent = 'マスクを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 30){money -= 30; havetools.push('アスピリン');document.getElementById('SHOPlog').textContent = 'アスピリンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '02':
        if(nowshop == 1){
        if(haveweapons.includes("木刀")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 50){money -= 50; haveweapons.push('木刀');document.getElementById('SHOPlog').textContent = '木刀を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("薄めの本")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; havearmors.push('薄めの本');document.getElementById('SHOPlog').textContent = '薄い本を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 50){money -= 50; havetools.push('パブロン');document.getElementById('SHOPlog').textContent = 'パブロンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '03':
        if(nowshop == 1){
        if(haveweapons.includes("竹刀")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 100){money -= 100; haveweapons.push('竹刀');document.getElementById('SHOPlog').textContent = '竹刀を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("木の板")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 50){money -= 50; havearmors.push('木の板');document.getElementById('SHOPlog').textContent = '木の板を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 100){money -= 100; havetools.push('トリプシン');document.getElementById('SHOPlog').textContent = 'トリプシンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '04':
        if(nowshop == 1){
        if(haveweapons.includes("石ころ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 200){money -= 200; haveweapons.push('石ころ');document.getElementById('SHOPlog').textContent = '石ころを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("テッパン")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 100){money -= 100; havearmors.push('テッパン');document.getElementById('SHOPlog').textContent = 'テッパンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 500){money -= 500; havetools.push('ルル');document.getElementById('SHOPlog').textContent = 'ルルを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '05':
        if(nowshop == 1){
        if(haveweapons.includes("大きな石")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 300){money -= 300; haveweapons.push('大きな石');document.getElementById('SHOPlog').textContent = '大きな石を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("鍋の蓋")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 300){money -= 300; havearmors.push('鍋の蓋');document.getElementById('SHOPlog').textContent = '鍋の蓋を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '06':
        if(nowshop == 1){
        if(haveweapons.includes("レンガ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 500){money -= 500; haveweapons.push('レンガ');document.getElementById('SHOPlog').textContent = 'レンガを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("厚めの本")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 500){money -= 500; havearmors.push('厚めの本');document.getElementById('SHOPlog').textContent = '厚めの本を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '07':
        if(nowshop == 1){
        if(haveweapons.includes("薄めの紙")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; haveweapons.push('薄めの紙');document.getElementById('SHOPlog').textContent = '薄めの紙を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("ドア")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 1000){money -= 1000; havearmors.push('ドア');document.getElementById('SHOPlog').textContent = 'ドアを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '08':
        if(nowshop == 1){
        if(haveweapons.includes("カード")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 77){money -= 77; haveweapons.push('カード');document.getElementById('SHOPlog').textContent = 'カードを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
      }
      case '09':
        if(nowshop == 1){
        if(haveweapons.includes("ハサミ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 600){money -= 600; haveweapons.push('はさみ');document.getElementById('SHOPlog').textContent = 'はさみを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '10':
        if(nowshop == 1){
        if(haveweapons.includes("ナイフ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 1000){money -= 1000; haveweapons.push('ナイフ');document.getElementById('SHOPlog').textContent = 'ナイフを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '11':
        if(nowshop == 3){
        if(money >= 40){money -= 40; havetools.push('投げナイフ');document.getElementById('SHOPlog').textContent = '投げナイフを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        } // 4 8 12 30
      case '12':
        if(nowshop == 3){
        if(money >= 80){money -= 80; havetools.push('トリッキーな変数');document.getElementById('SHOPlog').textContent = 'トリッキーな変数を購入しました!にはははは〜!!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '13':
        if(nowshop == 3){
        if(money >= 120){money -= 120; havetools.push('援護射撃');document.getElementById('SHOPlog').textContent = '援護射撃ライセンスを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '14':
        if(nowshop == 3){
        if(money >= 300){money -= 300; havetools.push('ガラスの破片');document.getElementById('SHOPlog').textContent = 'ガラスの破片を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      default:
        document.getElementById('SHOPlog').textContent = 'id doesnt exist...';
        break;
    }
    SHOPmoneytekiou();
    document.getElementById('ShopInputText').value = '';
  }
  function SHOPmoneytekiou(){
    document.getElementById('SHOPMONEY').textContent = money + '€';
  }
let appearweapons = '';
let appeararmors = '';
let appeartools = '';
function GoToEquip(){
    document.getElementById('GameScene').innerHTML = '<span id="InShopScene"><p><button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button><br><br><button class="button"onclick="GoToEquipArmor()">Equip Armor</button><br><br><button class="button"onclick="GoToEquipTool()">Equip Tool</button></p><br><br><br><br><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>'
}
function GoToEquipWeapon(){
    nowshop = 4;
    document.getElementById('GameScene').innerHTML = '<span id="InShopScene"><p><span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button></p><br><br><span id="SHOPlog"></span><br><br><br><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>';
    appearweapons = '';
    x = 0;
    if(haveweapons.includes("木の棒")){x += 1;}
    if(haveweapons.includes("木刀")){x += 10;}
    if(haveweapons.includes("竹刀")){x += 100;}
    if(haveweapons.includes("石ころ")){x += 1000;}
    if(haveweapons.includes("大きな石")){x += 10000;}
    if(haveweapons.includes("レンガ")){x += 100000;}
    if(haveweapons.includes("薄めの紙")){x += 1000000;}
    if(haveweapons.includes("カード")){x += 10000000;}
    if(haveweapons.includes("はさみ")){x += 100000000;}
    if(haveweapons.includes("ナイフ")){x += 1000000000;}
    if(x >= 1000000000){x -= 1000000000; appearweapons = '10 ナイフ';}
    if(x >= 100000000){x -= 100000000; appearweapons = '09 はさみ'+ '<br>' + appearweapons;}
    if(x >= 10000000){x -= 10000000; appearweapons = '08 カード'+ '<br>' + appearweapons;}
    if(x >= 1000000){x -= 1000000; appearweapons = '07 薄めの紙'+ '<br>' + appearweapons;}
    if(x >= 100000){x -= 100000; appearweapons = '06 レンガ' + '<br>' + appearweapons;}
    if(x >= 10000){x -= 10000; appearweapons = '05 大きな石' + '<br>' + appearweapons;}
    if(x >= 1000){x -= 1000; appearweapons = '04 石ころ' + '<br>' + appearweapons;}
    if(x >= 100){x -= 100; appearweapons = '03 竹刀' + '<br>' + appearweapons;}
    if(x >= 10){x -= 10; appearweapons = '02 木刀' + '<br>' + appearweapons;}
    if(x >= 1){x -= 1; appearweapons = '01 木の棒' + '<br>' + appearweapons;}
    document.getElementById('AppearShops').innerHTML = appearweapons;
  }
  function GoToEquipArmor(){
    nowshop = 5;
    appeararmors = '';
    x = 0;
    if(havearmors.includes("マスク")){x += 1;}
    if(havearmors.includes("薄めの本")){x += 10;}
    if(havearmors.includes("木の板")){x += 100;}
    if(havearmors.includes("テッパン")){x += 1000;}
    if(havearmors.includes("鍋の蓋")){x += 10000;}
    if(havearmors.includes("厚めの本")){x += 100000;}
    if(havearmors.includes("ドア")){x += 1000000;}
    if(x >= 1000000){x -= 1000000; appeararmors = '07 ドア'+ '<br>' + appeararmors;}
    if(x >= 100000){x -= 100000; appeararmors = '06 厚めの本'+ '<br>' + appeararmors;}
    if(x >= 10000){x -= 10000; appeararmors = '05 鍋の蓋'+ '<br>' + appeararmors;}
    if(x >= 1000){x -= 1000; appeararmors = '04 テッパン'+ '<br>' + appeararmors;}
    if(x >= 100){x -= 100; appeararmors = '03 木の板'+ '<br>' + appeararmors;}
    if(x >= 10){x -= 10; appeararmors = '02 薄めの本'+ '<br>' + appeararmors;}
    if(x >= 1){x -= 1; appeararmors = '01 マスク'+ '<br>' + appeararmors;}
    document.getElementById('AppearShops').innerHTML = appeararmors;
  }
  function GoToEquipTool(){
    nowshop = 6;
    document.getElementById('GameScene').innerHTML = '<span>えーっと...開発期間が短かったです！テスト期間と重なってたし<br>なのでもうちょい待ってね〜<br>magicの動きを応用すればすぐにできるから<br>あ、メモwebのネタ帳に"もはやただのあれ"を追加したから、暇だったらみてね<br>配信者さんはguraさんしかみないのです</span><br><br><button onclick="GoToCity()">Back</button><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="https://scratch.mit.edu/projects/1000452587/">wait....what?!</a>'; //この文たちは消しといてね
  }
function ShopEquipButton(){
  shopinputtext = document.getElementById('ShopInputText').value;
  switch(shopinputtext){
    case '01':
      if(nowshop == 4){
      if(haveweapons.includes("木の棒")){
        document.getElementById('SHOPlog').textContent = 'あなたは木の棒を装備しました！';
        equipweapon = 1;
        weaponpower = 1;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      } else if(nowshop == 5){
      if(havearmors.includes("マスク")){
        document.getElementById('SHOPlog').textContent = 'あなたはマスクを装備しました！';
        equiparmor = 1;
        armorshell = 0;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '02':
      if(nowshop == 4){
      if(haveweapons.includes("木刀")){
        document.getElementById('SHOPlog').textContent = 'あなたは木刀を装備しました！';
        equipweapon = 2;
        weaponpower = 2;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      } else if(nowshop == 5){
      if(havearmors.includes("薄めの本")){
        document.getElementById('SHOPlog').textContent = 'あなたは薄い本を装備しました！';
        equiparmor = 2;
        armorshell = 0;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '03':
      if(nowshop == 4){
        if(haveweapons.includes("竹刀")){
          document.getElementById('SHOPlog').textContent = 'あなたは竹刀を装備しました！';
          equipweapon = 3;
        weaponpower = 3;
        }
        }
      else if(nowshop == 5){
      if(havearmors.includes("木の板")){
        document.getElementById('SHOPlog').textContent = 'あなたは木の板を装備しました！';
        equiparmor = 3;
        armorshell = 1;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '04':
      if(nowshop == 4){
        if(haveweapons.includes("石ころ")){
          document.getElementById('SHOPlog').textContent = 'あなたは石ころを装備しました！';
          equipweapon = 4;
          weaponpower = 4;
        } 
        } 
      else if(nowshop == 5){
      if(havearmors.includes("テッパン")){
        document.getElementById('SHOPlog').textContent = 'あなたはテッパンを装備しました！';
        equiparmor = 4;
        armorshell = 2;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '05':
      if(nowshop == 4){
        if(haveweapons.includes("大きな石")){
          document.getElementById('SHOPlog').textContent = 'あなたは大きな石を装備しました！';
          equipweapon = 5;
          weaponpower = 5;
        }
        }
      else if(nowshop == 5){
      if(havearmors.includes("鍋の蓋")){
        document.getElementById('SHOPlog').textContent = 'あなたは鍋の蓋を装備しました！';
        equiparmor = 5;
        armorshell = 3;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '06':
      if(nowshop == 4){
        if(haveweapons.includes("レンガ")){
          document.getElementById('SHOPlog').textContent = 'あなたはレンガを装備しました！';
          equipweapon = 6;
          weaponpower = 6;
        }

        }
    else if(nowshop == 5){
      if(haveweapons.includes("厚めの本")){
        document.getElementById('SHOPlog').textContent = 'あなたは厚めの本を装備しました！';
        equiparmor = 6;
        armorshell = 4;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '07':
      if(nowshop == 4){
        if(haveweapons.includes("薄めの紙")){
          document.getElementById('SHOPlog').textContent = 'あなたは薄めの紙を装備しました！';
          equipweapon = 7;
          weaponpower = 1;
        }
        }
      else if(nowshop == 5){
        if(haveweapons.includes("ドア")){
          document.getElementById('SHOPlog').textContent = 'あなたはドアを装備しました！';
          equiparmor = 7;
          armorshell = 5;
        }
        else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
        break;
        };
    case '08':
      if(nowshop == 4){
        if(haveweapons.includes("カード")){
          document.getElementById('SHOPlog').textContent = 'あなたはカードを装備しました！';
          equipweapon = 8;
          weaponpower = 1;
        }
          break;
        };
    case '09':
      if(nowshop == 4){
        if(haveweapons.includes("はさみ")){
          document.getElementById('SHOPlog').textContent = 'あなたははさみを装備しました！';
          equipweapon = 9;
          weaponpower = 7;
        }
          break;
        };
    case '10':
      if(nowshop == 4){
        if(haveweapons.includes("ナイフ")){
          document.getElementById('SHOPlog').textContent = 'あなたはナイフを装備しました！';
          equipweapon = 10;
          weaponpower = 8;
        }
          break;
        };
    }
    document.getElementById('ShopInputText').value = '';
}


async function eventoccur(num){
    switch(num){
        case 1:
            document.getElementById('log').textContent = 'あめの置かれた台を見つけた！';
            await delay(1000);
            document.getElementById('log').textContent = 'どうする？';
            break;
    }
}
let kari = {
    attack:0,
    defense:0,
    health:0
}
function CandyStand() {
    y = [];//デバフによって初期からたくさんあるってのもありかも
    document.getElementById('GameScene').innerHTML = '<button class="button" onclick="CandyStand()">あめを取る</button>　<button class="button" onclick="Candyleave">逃げる</button><br><span id="log"></span>';
    document.getElementById('log').textContent = 'あめの置かれた台を見つけた！';
}
async function Candytake() {
    document.getElementById('log').textContent = 'あめを食べた...';
    await delay(1000);
    x = Math.floor(Math.random() * 20) + 1;
    if (!y.includes(x)) {
        y.push(x);
        Candycorrect();
    } else {
        y = [1];
        Candymissed();
    }
}

async function Candycorrect(){
    document.getElementById('log').textContent = '甘い！';
    x = Math.floor(Math.random() * 3)+1;
    switch(x){
        case 1:
            kari.attack += Math.floor(Math.random() * 8) + 5;if(playerattack < 1){playerattack = 1};
            document.getElementById('log').textContent = '攻撃力が上がった！';
            await delay(800);
            break;
        case 2:
            kari.defense += Math.floor(Math.random() * 4) + 3;if(playerdefense < 0){playerdefense = 0};
            document.getElementById('log').textContent = '防御力が上がった！';
            await delay(800);
            break;
        case 3:
            kari.health += Math.floor(Math.random() * 11) + 10;if(playermaxhealth < 1){playermaxhealth = 1};
            document.getElementById('log').textContent = '体力が増えた！';
            await delay(800);
            break;
    }
    await delay(800);
    document.getElementById('どうする？')
}
async function Candymissed(){
    document.getElementById('log').textContent = 'これは..消しゴムだ....!!';
    await delay(800);
    x = Math.floor(Math.random() * 3)+1;
    switch(x){
        case 1:
            playerattack -= Math.floor(Math.random() * 8) + 5;if(playerattack < 1){playerattack = 1};
            document.getElementById('log').textContent = '攻撃力が下がった！';
            await delay(800);
            break;
        case 2:
            playerdefense -= Math.floor(Math.random() * 4) + 3;if(playerdefense < 0){playerdefense = 0};
            document.getElementById('log').textContent = '防御力が下がった！';
            await delay(800);
            break;
        case 3:
            playermaxhealth -= Math.floor(Math.random() * 11) + 10;if(playermaxhealth < 1){playermaxhealth = 1};
            if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
            document.getElementById('log').textContent = '体力が減った！';
            await delay(800);
            break;
    }
    kari.attack = 0; kari.defense = 0; kari.health = 0;
}
async function Candyleave(){
    document.getElementById('log').textContent = '逃げることにした！';
    playerattack += kari.attack; playerdefense += kari.defense; playermaxhealth += kari.health;
    document.getElementById('GameScene').innerHTML = '<span>turn:</span><span id="TurnCount">0</span><br><b id="EnemyName">enemy</b>   <i>Lv.</i><i id="EnemyLevel">1</i>   <u id="EnemyDebuff"></u>   <u id="EnemySkillDebuff"></u><br><span id="EnemyHealth">0</span>/<span id="EnemyMaxHealth">0</span><span id="PlayerFriendFront"></span><br><br><b id="PlayerName">player</b>   <i>Lv.</i><i id="PlayerLevel">1</i>  <span id="AdditionalPlayerPoint"></span><br><span id="PlayerHealth">0</span>/<span id="PlayerMaxHealth">0</span><br><span id="PlayerBuff"></span> <span id="PlayerDebuff"></span><span id="PlayerFriendBack"></span><br><br><br><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button><button class="button" id="select3" onclick="select3()">tools</button><button class="button" id="back" onclick="back()">pass</button><br><span id="Skillbutton"></span><br><br><span align="center" id="log"></span><br><span id="StatusAppearDisappear"><button class="button" id="StatusButton" onclick="StatusAppear()">status</button></span><br><span id="Status"></span>';
    document.getElementById('EnemyLevel').textContent = enemylevel; document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('PlayerHealth').textContent = playerhealth; tekiou(); bufftekiou();

    z = Math.floor(Math.random() * 2);// 0~1
   z += Math.floor(Math.random() * 2);// 0~1
    enemylevel += z
    if(z !== 0){
        document.getElementById('log').textContent = '敵は'+z+'レベル上がった!';
        await delay(1000);
        for(i = 0; i < z; i++){
        y = Math.floor(Math.random() * 3) + 1;
        switch(y){
            case 1: enemymaxhealth += Math.floor(Math.random() * 11) + 5; document.getElementById('log').textContent = '敵は体力が増えた!'; await delay(800); break;
            case 2: enemyattack  += Math.floor(Math.random()*3)+4; document.getElementById('log').textContent = '敵の攻撃力が上がった!'; await delay(800); break;
            case 3: enemydefense += Math.floor(Math.random()*3)+4; document.getElementById('log').textContent = '敵の防御力が上がった!'; await delay(800); break;
        }}
    }
    enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    x = Math.floor(Math.random() * 10);
    if(x !== 0){
        enemyprefixe = 0;
        enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
        y = Math.floor(Math.random() * 3); // 1/3
        if(y == 0){enemyprefixe = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]};
        if(enemyprefixe !== 0){enemyname = enemyprefixe + ' ' + enemyname}
        else {enemyname = enemyname}; // 敵に接頭辞を確率で付与します。意味はありません。ひとえに愛だよ
        document.getElementById("EnemyName").textContent = enemyname;
        document.getElementById('EnemyLevel').textContent = enemylevel;
        document.getElementById('log').textContent = enemyname + 'が現れた!';
        tekiou();
        window.setTimeout(playerturn, 750);
        turncountincrease();
}}