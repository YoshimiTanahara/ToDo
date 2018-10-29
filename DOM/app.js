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
document.addEventListener('DOMContentLoaded', function() {

})