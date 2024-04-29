let x = 0;
function gamestart() {
    x = 0;
    document.getElementById('log').textContent = 'ゲーム開始、です！';
    document.getElementById("gamestart") = ' ' ;
    }
function addmoney() {
x += 100;
document.getElementById('log').textContent = 'あなたは' + x + '円持っています！';
}
function resetmoney() {
x = 0;
document.getElementById('log').textContent = 'あなたはお金を全て盗まれました！';
}