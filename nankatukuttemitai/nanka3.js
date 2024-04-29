// 繰り返し
// Scratchで例えていくね
// if　もし[  ]なら

let x = 0;
if (x == 0) {
  console.log(x); // 0が1回出力される
}
// for (  )まで繰り返す
for (x < 5; x++;) {
  console.log(x); // 0, 1, 2, 3 ,4 が出力される
};
// while (  )まで繰り返す
while (x < 5) {
  console.log(count); // 0, 1, 2, 3, 4 と出力される
  count++;
}
// forとwhileはほぼ一緒。
// でも、回数が決まっているならforの方が簡潔になり、
// ユーザーによって回数が異なるならばwhileの方が簡潔になります。

// 応用
// do...while (  )まで繰り返す
do {
  console.log(x); // 0, 1, 2, 3, 4 と出力される
  x++;
} while (x < 5); // 条件式が下に移動！ちょっとスマートに見えますね。
