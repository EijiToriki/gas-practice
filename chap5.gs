function myFunction() {
  // 関数の宣言
  sayHello_()
  sayGoodNight()

  // 引数と返り値
  console.log(`長方形の面積：${calcArea_(3,4)}`)

  // デフォルト引数
  logMessage_('Taro')
  logMessage_('Ichiro', 'GoodBy')

  // 残余引数
  logMembers_('Asuka', 'Miduki', 'sakura', 'haruka')

  // オブジェクト・配列は参照渡し
  // そのほかは値渡し

  // 関数リテラルの呼び出し
  Hello_ii_()

  // アロー関数
  Hello_arrow_()
  console.log(`長方形の面積：${calcArea_arrow_(3,4)}`)

}

function sayHello_(){     // _ を末尾に付けると，関数のプルダウンに表示されなくなる
  console.log('Hello')
}

function sayGoodNight(){
  console.log('Good Night')
}

function calcArea_(x, y){
  return x * y
}

// デフォルト引数
function logMessage_(name, msg = 'Hello'){
  console.log(`${msg}, ${name}.`)
}

// 残余引数
function logMembers_(first, second, ...members){  // membersは3人目以降
  console.log(first, second)
  console.log(members)
}


// ドキュメンテーションコメント
// その関数がもつ役割，引数，戻り値について記述
/**
 * 税込み価格を表す関数
 * 
 * @param {Number} price - 価格
 * @param {Number} taxRate - 税率（規定値は0.1）
 * @return {Number} - 税込み価格
 */
function includeTax(price, taxRate = 0.1){
  return price * (1+taxRate)
}

// 関数リテラルによる定義
const Hello_ii_ = function(){
  console.log('Hello')
}

// アロー関数
const Hello_arrow_ = () => {
  console.log('Hello arrow')
}

const calcArea_arrow_ = (x,y) =>{
  return x * y
}
