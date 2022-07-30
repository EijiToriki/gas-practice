function myFunction7_2_1() {
  // Number object
  const x = 1000 / 3

  console.log(x.toString())
  console.log(x.toExponential(4))
  console.log(x.toFixed(4))
  console.log(x.toFixed())
  console.log(x.toPrecision(4))
  console.log(x.toPrecision(2))

  console.log(Number.isFinite(x))
  console.log(Number.isInteger(x))
  console.log(Number.isNaN(x))

  console.log(Number.MAX_VALUE)
  console.log(Number.MIN_VALUE)
  console.log(Number.NaN)
  console.log(Number.POSITIVE_INFINITY)
  console.log(Number.NEGATIVE_INFINITY)
}

function myFunction7_3_1(){
  // String object
  let str = "I like Yamashita miduki."

  console.log(str.length)
  console.log(str.charAt(0))
  console.log(str.charCodeAt(0))

  console.log(str.toLowerCase())
  console.log(str.toUpperCase())

  console.log(str.slice(2,6))
  console.log(str.substring(2,7))

  console.log(str.split(' '))
  console.log(str.startsWith('I'))
  console.log(str.startsWith('like',2))
  console.log(str.endsWith('miduki.'))
  console.log(str.endsWith('like',6))

  str = str.concat("I like Kaki haruka too.")
  console.log(str)

  console.log(str.indexOf('miduki'))
  console.log(str.lastIndexOf('like'))
  console.log(str.includes('miduki'))

  console.log('1234'.padStart(7, '0'))
  console.log('1234'.padEnd(7, '0'))

  console.log('Bob'.localeCompare('Abc'))
  console.log('Bob'.localeCompare('Bob'))
  console.log('Bob'.localeCompare('Cde'))

  console.log('Bob'.repeat(3))
  console.log('   Bob   '.trim())
}

// 文字列検索
function myFunction7_3_2(){
  const str = 'My name is Bob.'
  const subStr = 'Bob'

  if(str.includes(subStr)){
    console.log(`${subStr}が含まれています`)
  }else{
    console.log(`${subStr}は含まれていない`)
  }

  const position = str.indexOf(subStr)
  if(position > -1){
    console.log(`${subStr}が${position}の位置に含まれています`)
  }else{
    console.log(`${subStr}は含まれていません`)
  }
}

// 配列
function myFunction7_4_1(){
  const array = ['asuka', 'miduki', 'sakura', 'shiori']

  console.log(array.length)

  console.log(array.toString())
  console.log(array.join('|'))

  console.log(array.concat(['haruka']))
  console.log(array.slice(1,3))

  console.log(array.includes('sakura'))
  console.log(array.indexOf('asuka'))
  console.log(array.lastIndexOf('miduki'))

  const array2 = ['asuka', ['miduki'], [['sakura']]]
  console.log(array2.flat())
  console.log(array2.flat(2))
}

// 配列内の検索
function myFunction7_4_2(){
  const array = ['asuka', 'miduki', 'sakura', 'shiori']
  const element = 'miduki'

  if(array.includes(element)){
    console.log('yes')
  }else{
    console.log('no')
  }

  const index = array.indexOf(element)
  if(index > -1){
    console.log(index)
  }else{
    console.log('no')
  }
}

// 配列の次元の平滑化
function myFunction7_4_3(){
  const array = [['asuka'], ['miduki'], ['sakura'], ['shiori']]
  const element = 'sakura'

  console.log(`${element} : ${array.flat().indexOf(element)}の位置`)
}

// 配列の変更
function myFunction7_4_4() {
  const array = ['asuka', 'miduki', 'sakura', 'shiori']

  array.push('haruka')
  console.log(array)

  array.unshift('nagi')
  console.log(array)

  array.reverse()
  console.log(array)

  array.sort()
  console.log(array)

  array.copyWithin(4,0,2)
  console.log(array)

  array.fill('ikuta', 3,5)
  console.log(array)

  console.log(array.pop())
  console.log(array)

  console.log(array.shift())
  console.log(array)

  console.log(array.splice(2,2,"ayame"))
  console.log(array)
}

// splice の使い方
function myFunction7_4_5(){
  const array = ['asuka', 'miduki', 'sakura', 'shiori']

  array.splice(1,2,'haruka')  // インデックス 1 から 2つの要素を haruka に差し替える
  console.log(array)

  array.splice(1,2)           // インデックス 1 から 2つの要素を削除する
  console.log(array)

  array.splice(1, 0, 'ayame') // インデックス 1 に 'ayame' を挿入する
  console.log(array)
}

// arrayオブジェクトの反復メソッド
function myFunction7_4_6(){
  const array = ['asuka', 'miduki', 'sakura', 'shiori']

  array.forEach((name, index) => console.log(`${index}: hello, ${name}`))
  // これは for of 文でも書ける
  for (const [index, name] of array.entries()){
    console.log(`${index}: hello, ${name}`)
  }

  console.log(array.every(value => value.length === 4))
  console.log(array.some(value => value === 'asuka'))
  console.log(array.find(value => value === 'sakura'))
  console.log(array.findIndex(value => value === "miduki"))

  console.log(array.filter(value => value.charAt(0) === 's'))
  console.log(array.map(value => value.length))

  console.log(array.reduce((ac, current) => ac + current, 'haruka'))  
  // haruka を初期値として array の全ての要素を先頭から連結

  console.log(array.reduceRight((ac, current) => ac + current))
  // array の全ての要素を末尾から連結する

}

// Function オブジェクト
// // 使うことは少ない
function myFunction7_5_1(){
  const sayHello2 = new Function('name', 'console.log(`Hello ${name}!`)')  // 関数宣言やアロー関数による表現
  sayHello2('Bob')

  console.log(sayHello2.toString())
  console.log(sayHello2.name)
  console.log(sayHello2.length)
}

// Dateオブジェクト
function myFunction7_6_1(){
  console.log(new Date())
  console.log(new Date(2020, 7, 17, 10, 28, 15))
  console.log(new Date('2020/07/17 10:28:15'))
  console.log(new Date(1594949295777))            // 1970/01/01 00:00:00 からの経過ミリ秒

  const d = new Date()
  console.log(new Date(d))
}

function myFunction7_6_2(){
  const d = new Date(2020, 6, 17, 10, 28, 15, 777)

  console.log(d.getFullYear())
  console.log(d.getMonth())
  console.log(d.getDate())
  console.log(d.getDay())
  console.log(d.getHours())
  console.log(d.getMinutes())
  console.log(d.getSeconds())
  console.log(d.getMilliseconds())
  console.log(d.getTime())
  console.log(d.getTimezoneOffset())    // UTCとの差を返す

  d.setFullYear(2022)
  d.setMonth(6)
  d.setDate(8)
  d.setHours(21)
  d.setMinutes(50)
  d.setSeconds(11)
  d.setMilliseconds(200)

  console.log(d.toString())
  console.log(d.toDateString())
  console.log(d.toTimeString())
  console.log(d.toJSON())
}

// 日時の演算と複製
function myFunction7_6_3(){
  const start = new Date('2020/5/5 20:00')
  const end = new Date(start)     // 複製 : start = end とはしない

  end.setMinutes(start.getMinutes() + 120)  // 120分加算
  console.log(start)
  console.log(end)
}

// RegExp オブジェクト
// // 正規表現の使い方
function myFunction7_7_1(){
  const str = "Tom Bom Tom is my friend ."

  const reg = /.o./g   // 任意の一文字 o 任意の一文字
  console.log(reg.test(str))

  console.log(reg.toString())
  console.log(reg.source)

  console.log(reg.global)
  console.log(reg.ignoreCase)
  console.log(reg.multiline)

  const reg2 = /.o./g
  console.log(reg2.exec(str))  // 最初にマッチしたものを返す

  const reg3 = /.o./g
  let result
  while(result = reg3.exec(str)){  // マッチするものすべて
    console.log(`result : ${result[0]}, lastIndex: ${result.index}`)
  }

  const reg4 = /.o./g
  console.log(str.match(reg4))  // gフラグがあると全部返す

  const reg5 = /.o./
  console.log(str.match(reg5))  // gフラグがなければ，最初にマッチした文字列を返す
}

// // 文字列の置換，分割
function myFunction7_7_2(){
  const str = "Tom Bom Tom is my friend ."
  const date = '2020/07/19 09:55:15'

  const rep_reg = /.o./g
  const split_reg = /[:\/\s]/g

  console.log(str.replace(rep_reg, 'Jay'))

  console.log(str.split(split_reg))
  console.log(date.split(split_reg))

}


// Error オブジェクト
function myFunction7_8_1(){
  try{
    // throw new Error('発生させた例外')   // 一般的な例外を表す Error オブジェクトを返す
    throw new TypeError('type error')   // 値が期待される型でない，TypeError を返す
  }catch(e){
    console.log(e.name)
    console.log(e.message)
    console.log(e.toString())
    console.log(e.stack)
  }
}

// // スタックトレース
function myFunction7_8_2a_(){
  throw new Error('発生させた例外')
}

function myFunction7_8_2b_(){
  myFunction7_8_2a_()
}

function myFunction7_8_2(){
  try{
    myFunction7_8_2b_()
  }catch(e){
    console.log(e.stack)    // 例外が発生するまでに呼び出した関数を記録している
  }
}

// 　Math オブジェクト
function myFunction7_9_1(){
  const min = 1, max = 100

  for(let i=1; i<=5; i++){
    console.log(Math.floor(Math.random() * (max - min + 1) + min))  // min ~ max の間の整数乱数
  }
}

// 最小値，最大値を求める
function myFunction7_9_2(){
  const numbers = [3, 9, 10, 1, 90]
  console.log(Math.max(...numbers))   // 配列に対して求めたい場合は，スプレッド構文を使う
  console.log(Math.min(...numbers))
}


// JSONオブジェクト
function myFunction7_10_1(){
  const obj = [
    {name:'miduki', favorite:['yadon', 'asuka']},
    {name:'kaki', favorite:['miduki', 'anime']},
    {name:'sakura', favorite:['naidesu']}
  ]

  console.log(JSON.stringify(obj))    // JSON文字列化
}

function myFunction7_10_2(){
  let str = '['
  str += '{"name":"miduki", "favorite":["yadon", "asuka"]},'
  str += '{"name":"kaki", "favorite":["miduki", "anime"]},'
  str += '{"name":"sakura", "favorite":["naidesu"]}'
  str += ']'

  const nogi = JSON.parse(str)    // JSON文字列をオブジェクト化

  console.log(nogi[0].name)
  console.log(nogi[1].favorite[1])

  const {name, favorite} = nogi[2]
  console.log(name, favorite)

}

// Object オブジェクト
// // オブジェクトの凍結と封印
function myFunction7_11_1(){
  const nogi = {name: 'yamashita', age: 23}

  Object.seal(nogi) //プロパティの追加や削除を制限
  nogi.name = 'asuka'     // 変更はされる
  nogi.favorite = 'ring'  // 追加はできない
  console.log(nogi) 

  Object.freeze(nogi)   // 変更できなくする
  nogi.name = 'haruka'
  nogi.favorite = 'anime'
  console.log(nogi)   // 1個前の出力と同じ
}

// グローバル関数
// // どこからでも呼び出せる関数
function myFunction7_12_1(){
  const url = 'https://www.google.co.jp/search?q=字'
  console.log(encodeURI(url))             // url としての機能を残しつつ，エンコード
  console.log(encodeURIComponent(url))    // url の要素として必要な / などもエンコードしてしまう
}

