function myFunction() {
  // コンソール出力
  console.log("Hello JS")

  // 変数・定数の宣言，代入
  let num = 10
  const num_const = 15

  // データ型の確認
  console.log(typeof 22)
  console.log(typeof "yamashita")
  console.log(typeof [])    // object
  console.log(typeof {})

  // バッククォートの利用例
  const name_ = "miduki"
  const team = "nogi"

  console.log(`所属：${team} , 名前：${name_}`)
  
  // 配列 : 宣言，要素アクセスは，pythonのリストと大した変わらん
  const numbers = [10, 30, 20, 40]
  console.log(numbers[2])

  const dim2_numbers =[[10, 30, 20, 40], [11, 31, 21], [12]]

  // 配列の分割代入
  const [num1, num2, num3, num4] = numbers
  console.log(num1, num2, num3, num4)

  // 配列のスプレッド構文
  console.log([0, ...numbers, 50])    //[0, 10, 30, 20, 40, 50]

  // オブジェクト : python の dict と同じ雰囲気
  const person = {name: "miduki", gender: "girl", age: 22}
  // // どっちでもOK
  console.log(person.name)
  console.log(person["name"])

  // オブジェクトはプリミティブ型（アドレスが同じ）
  const person2 = person
  person2.name = "mayu"
  // // 　どっちも mayu になる
  console.log(person2)
  console.log(person)

  // オブジェクトの分割代入
  const {name, gender, age} = person
  console.log(name, gender, age)

  // オブジェクトのスプレッド構文
  const detail_person = {...person, favorite: 'anime', voice: 'iyashi'}
  console.log(detail_person)
  // console.log(...person)     エラー（配列ならOKだが，，，）

  // インクリメント，デクリメント
  let x = 1
  x ++      // x = 2
  let y = 10
  y --      // y = 9

  
}
