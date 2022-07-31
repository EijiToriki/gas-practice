// このプログラムは，ドキュメントでコンテナバインドスクリプトとして動作させていることを前提とする
// ドキュメントを取得
function myFunction12_2_1() {
  const activeDoc = DocumentApp.getActiveDocument()
  console.log(activeDoc.getName())

  const url = "https://docs.google.com/document/d/1wapgaQ1IMTgJCMxqEQFtXI2lMQAvx8vIFsGx2Dx0Df4/edit"
  const docByUrl = DocumentApp.openByUrl(url)
  console.log(docByUrl.getName())

  const id = '1wapgaQ1IMTgJCMxqEQFtXI2lMQAvx8vIFsGx2Dx0Df4'
  const docById = DocumentApp.openById(id)
  console.log(docById.getName())
}

// Documentクラス
// // ドキュメント情報の取得
function myFunction12_3_1() {
  const id = '1wapgaQ1IMTgJCMxqEQFtXI2lMQAvx8vIFsGx2Dx0Df4'
  const doc = DocumentApp.openById(id)

  console.log(doc.getName())
  console.log(doc.getId())
  console.log(doc.getUrl())
  console.log(doc.getLanguage())

  console.log(doc.getBody().getType().toString())
  // ヘッダー，フッターが無ければ，null でエラー
  // console.log(doc.getHeader().getType().toString())
  // console.log(doc.getFooter().getType().toString())
}

// // ヘッダー・フッターの追加
function myFunction12_3_2() {
  const id = '1wapgaQ1IMTgJCMxqEQFtXI2lMQAvx8vIFsGx2Dx0Df4'
  const doc = DocumentApp.openById(id)

  doc.addHeader().setText('ヘッダーです')
  doc.addFooter().setText('フッターです')
}

