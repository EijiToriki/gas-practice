function myFunction8_2_1() {
  const ssActive = SpreadsheetApp.getActiveSpreadsheet()
  console.log(ssActive.getName())        // バインドしてないとダメ（スプレッドシートなどから開くやつ）

  // スプレッドシート → シートの順に辿らなくても，シートを取得できる
  const sheet = SpreadsheetApp.getActiveSheet()
  console.log(sheet.getName())
}

// Spreadsheet クラス
function myFunction8_3_1(){
  const ss = SpreadsheetApp.getActiveSpreadsheet()

  console.log(ss.getId())
  console.log(ss.getName())
  console.log(ss.getNumSheets())
  console.log(ss.getUrl())

  const sheets = ss.getSheets()

  console.log(sheets[0].getName())
  console.log(sheets[1].getName())

}

// Sheet クラス
function myFunction8_4_1(){
  const sheet = SpreadsheetApp.getActiveSheet()

  console.log(sheet.getIndex())
  console.log(sheet.getName())
  console.log(sheet.getParent().getName())
  console.log(sheet.isSheetHidden())

  // セル範囲の取得
  console.log(sheet.getRange('B2').getA1Notation())
  console.log(sheet.getRange('D4:F6').getA1Notation())
  console.log(sheet.getRange('2:2').getA1Notation())    // 行全体
  console.log(sheet.getRange('B:B').getA1Notation())    // 列全体

  console.log(sheet.getRange(4,4).getA1Notation())
  console.log(sheet.getRange(4,4,3).getA1Notation())
  console.log(sheet.getRange(4,4,3,3).getA1Notation())  // 行番号，列番号，行数，列数の順で指定（省略時は１）

  console.log(sheet.getDataRange().getA1Notation()) // A1セルからデータがある最終行番号およびｍ最終列番後までを取得

  const row = sheet.getLastRow()  // データがある最終行
  console.log(row)

  const column = sheet.getLastColumn()  // データがある最終列（番号で返ってくる）
  console.log(column)

  const range = sheet.getRange(1,1,row,column)
  console.log(range.getA1Notation())

}

function myFunction8_4_2(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート2')
  
  sheet.appendRow(['shiori', 20, 'baseball'])   // 行データ追加
  sheet.appendRow([null, '=SUM(B2:B5)'])        // null や 数式 も追加できる

}

function myFunction8_5_1(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート4')

  const range = sheet.getRange('A2:E4')

  // セル情報の取得
  console.log(range.getA1Notation())
  console.log(range.getRow())
  console.log(range.getColumn())
  console.log(range.getNumRows())
  console.log(range.getNumColumns())
  console.log(range.getLastRow())
  console.log(range.getLastColumn())

  console.log(range.isBlank())
  console.log(range.isPartOfMerge())
}

function myFunction8_5_2(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート5')

  console.log(sheet.getRange('A10').getValue());
  sheet.getRange('B10').setValue('GAS')

  console.log(sheet.getRange('A1:D5').getValues())

  const values = [
    ['Shiori', '21', 'baseball', '3'],
    ['Nagi', '17', 'picture', '5']
  ]

  sheet.getRange(6, 1, values.length, values[0].length).setValues(values)
}

function myFunction8_5_3(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート6')

  sheet.getRange('B5:D5').setFormulas([[
    '=SUM(B2:B4)',
    '=SUM(C2:C4)',
    '=SUM(D2:D4)'
  ]])

  sheet.getRange('D2:D4').setFormulaR1C1('=RC[-2]*RC[-1]')

}

function myFunction8_5_4(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート6')

  // 全体
  const rangeTable = sheet.getDataRange()
  rangeTable
    .setBorder(false, true, false, true, true, null)
    .setFontSize(14)
    .setFontFamily('メイリオ')
    .setNumberFormat('#,##0')
  
  // 見出し
  const rangeHeader = sheet.getRange('A1:D1')
  rangeHeader
    .setBackgrounds([['yellow', 'yellow', 'yellow', 'orange']])
    .setHorizontalAlignment('center')

  // 計
  const rangeTotal = sheet.getRange('A5:D5')
  rangeTotal.setFontWeight('bold')

  // 品目
  const rangeItemName = sheet.getRange('A2:A5')
  rangeItemName.setFontColors([['red'], ['orange'], ['purple'], ['gray']])

}

function myFunction8_5_5(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート7')

  const row = sheet.getLastRow() - 1
  const column = sheet.getLastColumn()

  const range = sheet.getRange(2,1,row,column)

  range.sort([
    {column:1, ascending:true},   //昇順ソート
    {column:2, ascending:false}   //降順ソート
  ]).removeDuplicates()
}

// 配列を使ったデータ処理
// // データの挿入・削除
function myFunction8_6_1(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート8')
  const values = sheet.getDataRange().getValues()

  values.push(['Haruka', 20, 4, 'anime'])
  console.log(values)

  values.shift()
  console.log(values)

  sheet.clearContents() // シートの全てのコンテンツをクリア
  sheet.getRange(1,1, values.length, values[0].length).setValues(values)
  
}

// // データの検索
function myFunction8_6_2(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート9')
  const values = sheet.getDataRange().getValues()

  const keys = sheet.getRange(1,4,sheet.getLastRow()).getValues().flat()
  console.log(keys)

  const favorite = 'yadon'
  console.log(keys.includes(favorite))

  const row = keys.indexOf(favorite)
  console.log(row)

  const [name, age, grade] = values[row]
  console.log(`${name}(${age}歳，${grade}期生)は，${favorite}が好き`)
}

function myFunction8_6_3(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート9')
  const values = sheet.getDataRange().getValues()

  const favorite = 'yadon'
  const target = values.find(record => {
    const [name, age, grade, like] = record
    return like === favorite
  })
  console.log(target)

  const [name, age, grade] = target
  console.log(`${name}(${age}歳，${grade}期生)は，${favorite}が好き`)
}

// // シート中のデータを抽出する
function myFunction8_6_4(){
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSheet.getSheetByName('シート9')
  const values = sheet.getDataRange().getValues()
  const header = values.shift()

  const targetValues = values.filter(record => {
    const [name, age] = record
    return age < 22
  })

  targetValues.unshift(header)
  const targetSheet = activeSheet.getSheetByName('シート9フィルタ')
  targetSheet
    .getRange(1,1,targetValues.length, targetValues[0].length)
    .setValues(targetValues)
}

























