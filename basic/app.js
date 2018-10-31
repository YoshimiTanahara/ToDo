console.log('Hello js');

console.log('-----四則演算-----');
console.log(1 + 1);
console.log(5 - 2);
console.log(3 * 3);
console.log(8 / 2);
console.log(7 % 2);
console.log('5 - 2');

console.log('-----文字列連結-----');

console.log('沖縄県' + '美浜');

console.log('-----変数-----');

let name ='山城';
console.log(name);
name = '平田';
console.log(name);

let num = 2;
console.log(num);
num = num + 2;
console.log(num);

console.log('-----定数-----');
const age =20;
console.log(age);

// テンプレートリテアル
const schoolName = 'NexSeed';
console.log(`私は${schoolName}の生徒です`);

// console.log('条件分岐')
let int = 5;
if (int > 3) {
  console.log(`${int}は３より大きいです`);
}

// 審議値 true false
console.log(int > 3);
console.log(1 > 3);

console.log('else if------');
int = 5
if (int > 3) {
  console.log(`${int}は３より大きいです`);
} else if (int > 2) {
  console.log(`${int}は2より大きいです`);
} else {
  console.log('${int}は2より小さいです');
}


num = 3;
if (num % 2 === 0) {
  console.log (`${num}は偶数です`);
} else {
  console.log(`${num}は奇数です`);
}


console.log('switch------');
let signal = 'green';
switch (signal) {
  case 'red':
    console.log('止まれ');
    break;
  case 'green':
    console.log('進め');
    break;
  default:
  // defaultはelseと一緒の意味
    console.log('その他');
    break;
}

console.log('switch------');
num = 5;
switch (num % 2 === 0) {
    case true:
      console.log(num + 'は偶数');
      break;
    default:
  // defaultはelseと一緒の意味
    console.log(num + 'は奇数');
      break;
}

console.log ('繰り返し');
console.log('for');
// for (変数の定義；条件式；変数の更新)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('while');
let j =11;// 変数の定義
while (j <= 20) {  // 条件式
  console.log(j);
  j++  // 変数の更新
}


console.log('do while');
let k =21;// 変数の定義
do {
  console.log(k);
  k++;  // 変数の更新
 } while(k <= 20); // 条件式


// console.log('-----アラート-----');
// // alert('Hello World');
// let answer = confirm('削除しますか');
// console.log(answer);

console.log('for');
// for (変数の定義；条件式；変数の更新)
for (let i = 1; i <= 10; i++) {
  console.log(i * 3);
}


// console.log('else if------');
// int = 5
// if (int > 3) {
//   console.log(`${int}は３より大きいです`);
// } else if (int > 2) {
//   console.log(`${int}は2より大きいです`);
// } else {
//   console.log('${int}は2より小さいです');
// }


// console.log('switch------');
// let signal = 'green';
// switch (signal) {
//   case 'red':
//     console.log('止まれ');
//     break;
//   case 'green':
//     console.log('進め');

//     break;
//   default:
//   // defaultはelseと一緒の意味
//     console.log('その他');
//     break;
// }


// fizzBuzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
// } else if (i % 3 === 0) {
//     console.log('Fizz');
// } else if (i % 5 === 0) {
//     console.log('Buzz');
// } else {
//   console.log(i);
// }
// }


for (let i = 1; i<= 100; i ++) {
  if (i % 3 ===0 && i % 5 === 0) {
    console.log('FizzBuzz');
} else if (i % 3 === 0) {
  console.log ('Fizz');
} else if (i % 5 === 0) {
  console.log('Buzz');
}  else {
    console.log(i);
}
}

// console.log('FizzBuzz----------------');
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

// console.log('FizzBuzz(switch)----------------');
// for (let i = 1; i
 // <= 100; i++) {
//   switch (true) {
//     case i % 5 === 0 && i % 3 === 0:
//       console.log('FizzBuzz');
//       break;
//     case i % 5 === 0:
//       console.log('Buzz');
//       break;
//     case i % 3 === 0:
//       console.log('Fizz');
//       break;
//     default:
//       console.log(i);
//       break;
//   }
// }

// console.log('FizzBuzz(while)----------------');
// i = 1;
// while (i <= 100) {
//   if (i % 15 === 0) { //3と5の最小公倍数が15のため
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
//   i++;
// }


// console.log(関数);
// // 複数の処理を一つにまとめたもの
// function 関数名（）{
//   処理
// }

//① 関数を作る
//② 関数を呼び出す
// ①だけでは実行されない
// ②の処理が必要

function greeting(hoge) {
  console.log('hoge');
}

// console.log(引数);
greeting('おはよう');
greeting('こんにちは');


// console.log(ローカル変数);
// 変数
// データを入れる箱

// グローバル変数
// どこからでも使える変数
// ファイル内で被っちゃだめ


// ローカル変数
// 関数の中でしか使えない変数
// 関数の{}の中で定義した変数は（）の中でしか使えない


// 変数が使える範囲のことをスコープ

// let name2 = 'ikeda';
function hoge() {
let name2 = 'ikeda';
console.log(name2);
}
hoge();
// console.log(name2);


// 関数は変数に代入できる
// 関数名を省略できる
// 呼び出すときは変数名で呼び出す

// return 戻り値
// 戻り値・・関数を実行した結果


let greeting2 = function (name) {
  let greeting = 'おはよう' + name;
return greeting;
}

let huge = greeting2('seedkun');
console.log(huge);



// console.log(タイマー処理);
// グループ化されたデータのこと
// 書き方（値１、値２）

// console.log(配列);
let studentList = ['Tanahara','Goto','Yamashiro'];
console.log(studentList);
console.log(studentList[0]);
studentList[0] = 'Aburai';
console.log(studentList[0]);
studentList.push('Tanahara');
studentList.pop();

// console.log(連想配列);
// 書き方（キー1 :値1,キー2 :値2）
// let user = ['ラーメン','沖縄','38'];
let user = {
  food: 'ラーメン',
  from: '沖縄',
  age: '38'
};
console.log(user);
console.log(user['food']);
console.log(user.food);

let user2 = {
  food: 'チャーシュー',
  from: '沖縄',
  age: '27'
}
console.log(user2.age);

// console.log(二次元配列);
// 配列の中に配列が入ってる
// ３次元、４次元、何次元でも作れる

let users = [user,user2];
console.log(users);

// console.log(メソッド);
// 連想配列の中の関数のこと
let user3 = {
  food:'🧀',
  age:'25',
  from:'神奈川',
  sing: function (song) {
    return  song + 'を歌います';
  }
}
console.log(user3.sing('USA'));
console.log(user3.food);

// console.log(組み込みオブジェクト);
// console.log(文字列);
let str = 'Atsushi';
console.log(str.length);
console.log(str.substr(0,4));


// 配列　array arr
let arr = [1,2,3];
console.log(arr.length);

// 数値
console.log(Math.ceil(3,3));
console.log(Math.floor(3,3));
console.log(Math.random() * 10);

// 日付
let date = new Date();
console.log(date);
console.log(date.getFullYear());


// 練習問題①
let i = Math.ceil(Math.random() *10);
if (i % 2 === 0) {
  console.log(`${i}は偶数です`);
} else {
  console.log(`${i}は奇数です`);
}







// おみくじ　数値・配列・関数
// 以下の配列の中身がランダムでconsoleに表示される関数
function functinoName() {
//処理
functinoName('Yoshimi');
// console.logで関数を呼び出すとにき入力した名前の運勢は○◯です
// って表示する関数
// 例yoshimiの運勢は大吉です。
// returnを使う
}


function omikuji(name) {
let omikuji = ['大吉','吉','中吉','末吉','凶','みかん'];
let category = omikuji.length
let rand = Math.floor(Math.random() * category);

return name + 'の運勢は'+ omikuji[rand] +'です';
 }

console.log(omikuji('Yoshimi'));
console.log(omikuji('Atsushi'));
console.log(omikuji('Yuki'));

// 配列、連想配列のための繰り返し処理
// 配列の数だけ繰り返す
// console.log(for in);
// for (仮変数 in 連想配列){処理}
// inの右側は繰り返したい配列
// inの左の仮変数はなんでも可

let prices = {
apple: 100,
pineapple: 300,
orange: 3000,
}
for (key in prices) {
  console.log(key);
  console.log(prices[key]);
}

// console.log(for of);
let hobbies = ['running','swimming','trip'];
for (let value of hobbies) {
  console.log(value);
}

// console.log('繰り返しの中断、スキップ');
// 中断するときはbreak

// var result = 0;
// for(let i = 1; i <= 100; i++) {
//   result += i;

//   if (result > 1000){
//     console.log('合計値が1000を超えるのは$(i)の');
//     break;
//   }
// }

// スキップしたいときはcontinue時
for (let i = 1; i <=100; i++) {
  if (i % 3 !==0) {
    continue;
  }
  console.log(i);
}


// 九九の中で積が４0以下になるものを画面に出力するプログラム

// 九九の出力

// 40以下のものだけを出力


for(let i = 1; i <=9; i++) {
  for(let j = 1; j <=9; j++) {
  let res = i *j;
  if (res > 40){
      continue;
    }
  console.log(res);
  }
}




// console.log(dom);

console.dir(window);
console.log(window.outerHeight);
// window.location.href = 'http://amazon.co.jp';
console.log(window.document);

// 今開いているページのHTML情報
// document
// documentを操作するいろいろな命令をDOM(Document Object Model)
// DOM操作 ・取得　・追加　・削除

// 追加
// 追加するものを組み立てる（pタグ、テキストなど）createElement
// document(HTML),append(下に追加)



// consol.dog(イベント)；
// イベントドリブン
// どの要素で発生した（どのタグ、どのクラスが）
// どのイベントか（クリック or ホバー orページのロード）
// どのイベントにどの処理に紐付けるか

document.getElementById('btn').addEventListener('click',function(){
  let tag = document.createElement('p');
  let text = document.createTextNode('Hello js');
  document.body.appendChild(tag).appendChild(text);
})


// document.getElementById('btn')
// indexのid=btnで発生した
// addEventListener('click',function) ・・クリック
// console.log('hoge')に紐付ける


// 週末課題 例

// let lufy = {
//   akumanomi: 'ゴムゴムの実',
//   gomugomuno: function(name) {
//     return `ゴムゴムの〜${name}!!!!`;
//   }
// }

// let mugiwara = {
//   captain: lufy,
//   crew: 'ゾロ'
// };

// let akagami = {
//   captain: 'シャンクス',
//   crew: 'ベックマン'
// };

// let kaizoku = {
//   mugiwara: mugiwara,
//   akagami: akagami
// };

// console.log(kaizoku.mugiwara.captain.gomugomuno('ピストル'));



let Cola = {
  taste: 'good',
  sounds: function(name) {
    return `ぷしゅっ!!${name}~~~`;
  }
}

let CocaCola = {
  kanenoruki: Cola,
  other: 'fanta'
};

let pepsi = {
  kanenoruki: 'pepsi',
  other: 'orangena',
};

let liquor = {
  haveAHabit: 'herbalWine',
  NoHabbit: 'gin',
}

let food = {
  main : 'steak',
  sub : 'salad',
}

let softdrink = {
CocaCola: CocaCola,
pepsi: pepsi
};

let drink = {
softdrink: softdrink,
liquor: liquor
};

let menu = {
  drink: drink,
  food: food
};

console.log(menu.drink.softdrink.CocaCola.kanenoruki.sounds('ぷはぁ'));
console.log(menu.drink.softdrink.CocaCola.kanenoruki.sounds('くぅ'));