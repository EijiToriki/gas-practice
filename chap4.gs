function myFunction() {
  // if文
  const x = 5
  if (x < 5){
    console.log('xは5より小さい')
  }else if (x < 10){
    console.log('xは5以上，10未満')
  }else{
    console.log('xは10以上')
  }

  // 配列の比較とオブジェクトの比較
  const words1 = ['google', 'Apps', 'script']
  const words2 = ['google', 'Apps', 'script']
  console.log(words1 == words2) // false : 番地が異なるため（オブジェクトも同様）

  // 寛容な比較と厳密な比較
  console.log(5 == '5')   // true : データ型が異なっていてもＯＫ
  console.log(5 === '5')  // false : データ型も同じでなければならない

  // 論理演算子　かつ： &&，または：||，否定：!
  // 空文字，0，undefined，null は false を返す（それ以外はtrue)
  if(!0 && !'' && !undefined && !null){
    console.log('これらは false です')
  }

  // switch文
  const rank = "A"
  switch(rank){
    case "A":
      console.log('優秀')
      break
    case "B":
      console.log('普通')
      break
    case "C":
      console.log('雑魚')
      break
    default:
      console.log('底辺')
  }

  // while文
  let x2 = 1
  while (x2<100) {
    x2 *= 3
    console.log(`x2の値：${x2}`)
  }

  // for文
  for(let i=1; i<=5; i++){
    console.log(`iの値：${i}`)
  }

  // for .. of 文
  // pythonの for x in x_list: と同じ
  const nogi_members = ['miduki', 'asuka', 'sakura']
  for(const member of nogi_members){
    console.log(member)
  }

  for(const char of 'Hello'){   // 1文字ずつ取り出せる
    console.log(char)
  }

  // for .. in 文
  // オブジェクトに対するループ
  const points = {Japanese: 85, Math: 70, English: 60}
  for(const key in points){   // オブジェクトのキーが返ってくる（取り出す順番は保証されていない）
    console.log(`${key}の点数：${points[key]}`)
  }

  // break や continue にラベルを付与する
  outerLoop:
  for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
      if(i===2 && j===2){
        break outerLoop
      }
      console.log(`iの値：${i}, jの値：${j}`)
    }
  }

  // try .. catch 文と例外処理
  // // try .. catch .. finally 文
  try{
    Browser.msgBox('Hello')
  }catch(e){
    console.log('例外が発生しました：' + e.message)
  }finally{
    console.log('スクリプトの実行完了')
  }

  // // throw文
  // const x3 = 0
  // if (x3 === 0){
  //   throw new Error('xに0が代入されました')
  // }

  // // throw 文と try..catch文の組み合わせ
  const x4 = 0
  try{
    if (x4 === 0){
      throw new Error('xに0が代入されました')   // catchに飛ぶ
    }
  }catch(e){
    console.log('例外が発生しました : ' + e.message)
  }

}
