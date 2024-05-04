function showOutput() {
    const input = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // 前の出力をクリアする
  
    let redirectUrl;
    if (input.includes('yabaikopppepandesu')) {
      redirectUrl = 'https://true-koppepan-orenge.github.io/test_site_yabai/';
    } else if(input.includes('yamiyamikoppepandesu')){
      redirectUrl = 'https://true-koppepan-orenge.github.io/test_site_yamiyami/';
    } else {
      'パスワードが違います。';
    }
  
    const link = document.createElement('a')
    link.href = redirectUrl;
    link.textContent = 'success!';
    link.target = '_blank'; // 新しいタブで開く
    outputDiv.appendChild(link)
}

//<!DOCTYPE html>
//<html>
//<head>
//  <title>null</title>
//</head>
//<body>
//  <input type="text" id="inputText" placeholder="テキストを入力">
//  <button onclick="showOutput()">送信</button>
//  <p id="output"></p>
//  <script src="nanka1.js"></script>
//</body>
//</html>