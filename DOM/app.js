let date = new Date();
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleString();

let list = document.getElementsByTagName('a');
for (let i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}

let list2 = document.getElementsByClassName('fuga');
let list3 = document.getElementsByClassName('fuga moge');

let ika = document.getElementById('ika');
// ノードウォーキング
ika.childNodes;
for (let item of ika.childNodes) {
  console.log(item);
}

// 画面がロードされたとき
// コンテンツ（HTMLやCSS）と画像

// どこで起きたイベントか
// どんなイベントか
// どんな処理をするか

window.onload = function(){

}

document.getElementById('btn').addEventListener('click',function(){
  alert_hoge();
})


function alert_hoge() {
    window.alert('ボタンが押されました');
}

// 画像のロードは待たない
// コンテンツがロードされたとき
// レンダリングした時

// innerHTML
// textContent
// 中の要素を入れ替えるのは一緒
// textContentは文字として表示
// innerHTMLはHTML要素として扱う
// innerHTMLはユーザーからの入力を直接扱わないようにする（注意：セキュリティー対策の為）

// 値をセット

// テキストのみ
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('text').textContent =
'<a href ="http://amazon.co.jp">アマゾン</a>';

// リンク付き
document.getElementById('html').innerHTML =
'<a href ="http://amazon.co.jp">アマゾン</a>';


// 値をゲット
　let textElm = document.getElementById('html');
console.log(textElm.textContet);

let htmlElm = document.getElementById('html');
console.log(htmlElm.innerHTML);
})

// ユーザーが入力したURLとサイト名のリンクが画面に表示させたいとき。。。
// 追加ボタンを押したら
// URLとサイトに入っている文字を使ってリンクを作る
// URLとサイト名を取得する
// 要素を組み立てる
// 画面に追加する
document.addEventListener('DOMContentLoaded', function() {

// 追加ボタンを押されたら
  document.getElementById('btn2').addEventListener('click',function(){

// URLとサイト名を取得する
  let url = document.getElementById('url').value;
  let site = document.getElementById('site').value;

// 要素を組み立てる
  let anchor = document.createElement('a');
anchor.href = url;
let text = document.createTextNode(site);
anchor.appendChild(text);

// 画面に表示する
document.getElementById('list').appendChild(anchor).appendChild(text);

})

// <a href ="url">site</a>をidがlistの子要素にする
    // document.getElementById('list').innerHTML =
    // '<a href ="http://amazon.co.jp">アマゾン</a>';
})


// thisはイベントの発生元のこと

document.addEventListener('DOMContentLoaded', function() {
  let elem = document.getElementById('elem');
  elem.addEventListener('mouseover', function() {
    this.style.color = '#f00';
})

  elem.addEventListener('mouseout',function(){
    this.style.color = '';
})

  let elem2 = document.getElementById('elem2');
  elem2.addEventListener('mouseover',function() {
    this.className = 'blue pointer';
  })

  elem2.addEventListener('mouseout',function() {
    this.className = '';
  })

let elem3 = document.getElementById('elem3');
elem3.addEventListener('click',function() {
  if (this.className === 'blue') {
    this.className = '';
  } else {
    this.className = 'blue';
  }
})

let elem4 = document.getElementById('elem4');
elem4.addEventListener('click',function() {
  this.classList.toggle('blue');
})

// クリックしたら背景色が黄色になるクラスをつける
// 背景色が黄色の時にクリックしたら背景がなくなる
let elem5 = document.getElementById('elem5');
elem5.addEventListener('click',function() {
  this.classList.toggle('yellow');

})
})
