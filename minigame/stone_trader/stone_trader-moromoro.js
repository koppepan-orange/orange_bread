let money = 0
let coals = 0;
let coal_price = 0;
let irons = 0;
let iron_price = 0;
let rubys = 0;
let ruby_price = 0;
let golds = 0;
let gold_price = 0;
let diamonds = 0;
let diamond_price = 0;
let stones = ['石炭', '鉄', 'ルビー', '金', 'ダイヤ']
function Sreset(){
    money = 1000;
    coals = 0;
    coal_price = 30;
    irons = 0;
    iron_price = 100;
    rubys = 0;
    ruby_price = 210;
    golds = 0;
    gold_price = 400;
    diamonds = 0;
    diamond_price = 700;
    tekiou();
    stonereset();
    document.getElementById("Sresetbutton").onclick = Sminieset();
    document.getElementById("Slog").textContent  = 'game..start!';
    window.setInterval(Sfluctuations, 10000);
}
function Sminieset(){
    money = 1000;
    coals = 0;
    coal_price = 30;
    irons = 0;
    iron_price = 100;
    rubys = 0;
    ruby_price = 210;
    golds = 0;
    gold_price = 400;
    diamonds = 0;
    diamond_price = 700;
    tekiou();
}
function Sfluctuations(){
    coal_price = Math.floor(Math.random() * 21) + 10;
    iron_price = Math.floor(Math.random() * 71) + 30;
    ruby_price = Math.floor(Math.random() * 141) + 70;
    gold_price = Math.floor(Math.random() * 201) + 200;
    diamond_price = Math.floor(Math.random() * 301) + 400;
    tekiou();
}
function stonereset(){
    document.getElementById("Sstone1").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone2").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone3").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone4").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone5").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone6").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone7").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone8").textContent  = stones[Math.floor(Math.random() * stones.length)];
    document.getElementById("Sstone9").textContent  = stones[Math.floor(Math.random() * stones.length)];
}
function tekiou(){
    document.getElementById("SMoney").textContent  = money;
    document.getElementById("Schangecoal").textContent  = coal_price;
    document.getElementById("Schangeiron").textContent  = iron_price;
    document.getElementById("Schangeruby").textContent  = ruby_price;
    document.getElementById("Schangegold").textContent  = gold_price;
    document.getElementById("Schangediamond").textContent  = diamond_price;
}
function stonebuy1(){
    if (document.getElementById("Sstone1").textContent  == '石'){
        document.getElementById("Sstone1").textContent  = stones[Math.floor(Math.random() * stones.length)];
    }
}