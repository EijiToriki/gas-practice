// ファイル名とフォルダ名の取得
function myFunction10_2_1() {
  const folderId = "12P0wcE0heKq993_sHik8bLJTzoTwaqMz"
  const folder = DriveApp.getFolderById(folderId)

  console.log(folder.getName())

  const fileId = "10uB0Eet6UGIRssh9hp2jzCjgeIE-7Gg-BkZRU2XNepQ"
  const file = DriveApp.getFileById(fileId)

  console.log(file.getName())

}

// ルートフォルダの操作
function myFunction10_2_2(){
  const root = DriveApp.getRootFolder()
  console.log(root.getName())
}

// フォルダやファイルの作成 : いずれもルートに作る
function myFunction10_2_3(){
  const folderName = '作成したフォルダ'
  DriveApp.createFolder(folderName)

  const fileName = '作成したファイル.txt'
  const content = 'hello Drive'
  DriveApp.createFile(fileName, content)
}


// フォルダを操作する Folderクラス
function myFunction10_3_1(){
  const id = '1blBjQ61EbgbsY_-Mrtpkj9goTJUcrkrZ'
  const folder = DriveApp.getFolderById(id)

  console.log(folder.getId())
  console.log(folder.getUrl())
  console.log(folder.getName())
  console.log(folder.getDescription())

  console.log(folder.getDateCreated())
  console.log(folder.getLastUpdated())

  console.log(folder.isStarred())
  console.log(folder.isTrashed())
}

// フォルダやファイルの作成
// // 複数のフォルダを一気に作る
function myFunction10_3_2(){
  const id = '1blBjQ61EbgbsY_-Mrtpkj9goTJUcrkrZ'
  const folder = DriveApp.getFolderById(id)

  for(let i=1; i<=10; i++){
    const name = String(i).padStart(2, '0')
    folder.createFolder(name)
  }
}

// ファイルとショートカットを作る
function myFunction10_3_3(){
  const id = '1blBjQ61EbgbsY_-Mrtpkj9goTJUcrkrZ'
  const folder = DriveApp.getFolderById(id)

  const name = 'hello.txt'
  const content = 'hello GAS'
  folder.createFile(name, content, MimeType.PLAIN_TEXT)

  const targetId = '10uB0Eet6UGIRssh9hp2jzCjgeIE-7Gg-BkZRU2XNepQ'
  folder.createShortcut(targetId)
}


// Fileクラス
function myFunction10_4_1(){
  const id = '1yUil4HAZZPSZVQPRH3OV9sx5-D0XJuRW'
  const file = DriveApp.getFileById(id)

  console.log(file.getId())
  console.log(file.getName())
  console.log(file.getDescription())
  console.log(file.getMimeType())
  console.log(file.getSize())

  console.log(file.getUrl())
  console.log(file.getDownloadUrl())

  console.log(file.getDateCreated())
  console.log(file.getLastUpdated())

  console.log(file.isStarred())
  console.log(file.isTrashed())
}

// ファイルのコピー・移動・削除
function myFunction10_4_2(){
  const id = '1yUil4HAZZPSZVQPRH3OV9sx5-D0XJuRW'
  const file = DriveApp.getFileById(id)

  const moveFile = file.makeCopy('マイクロシンポ_コピー.pdf')
  const destinationId = '1RB-rAfpYlu-tpsNXDGk6mfG-uu5BvAPV'
  const destination = DriveApp.getFolderById(destinationId)
  moveFile.moveTo(destination)

  const trashedFile = file.makeCopy('マイクロシンポ_ゴミ箱.pdf')
  trashedFile.setTrashed(true)
}

// フォルダ・ファイルのコレクションを操作
// // フォルダの取得
function myFunction10_5_1(){
  const id = '1oCon5tNYH96HQ7a4ZHZyNOA5f1ezWE8p'
  const targetFolder = DriveApp.getFolderById(id)

  const subFolders = targetFolder.getFolders()
  while(subFolders.hasNext()){
    const folder = subFolders.next()
    console.log(folder.getName())
  }
}

// // ファイルの取得
function myFunction10_5_2(){
  const id = '1blBjQ61EbgbsY_-Mrtpkj9goTJUcrkrZ'
  const targetFolder = DriveApp.getFolderById(id)

  const files = targetFolder.getFilesByType(MimeType.MICROSOFT_POWERPOINT)
  while(files.hasNext()){
    const file = files.next()
    console.log(file.getName())
  }
}

// // ドライブ内のフォルダ検索
function myFunction10_5_3(){
  const params = 'title contains "メモ"'

  const folders = DriveApp.searchFolders(params)
  while(folders.hasNext()){
    const folder = folders.next()
    console.log(folder.getName())
  }
}

// // ドライブ内のファイル検索
function myFunction10_5_4(){
  const params = 'title contains "マイクロ"'

  const files = DriveApp.searchFiles(params)
  while(files.hasNext()){
    const file = files.next()
    console.log(file.getName())
  }
}


// 権限について
function myFunction10_6_1(){
  const email = 'kt2lage@gmail.com'

  const folderId = '1oCon5tNYH96HQ7a4ZHZyNOA5f1ezWE8p'
  const folder = DriveApp.getFolderById(folderId)

  console.log(folder.getAccess(email).toString())
  console.log(folder.getOwner().getEmail())
  console.log(folder.getEditors.length)
  console.log(folder.getViewers.length)
  console.log(folder.isShareableByEditors())

  const fileId = '10uB0Eet6UGIRssh9hp2jzCjgeIE-7Gg-BkZRU2XNepQ'
  const file = DriveApp.getFileById(fileId)

  console.log(file.getAccess(email).toString())
  console.log(file.getOwner().getEmail())
  console.log(file.getEditors().length)
  console.log(file.getViewers().length)
  console.log(file.isShareableByEditors())
}


// // 権限の追加
function myFunction10_6_2(){
  const email = '***@*****' // メアド

  const folderId = '***'  // フォルダID
  const folder = DriveApp.getFolderById(folderId)
  folder.addEditor(email)

  const fileId = '***'    // ファイルID
  const file = DriveApp.getFileById(fileId)
  file.addCommenter(email)
}

// // 権限の削除
function myFunction10_6_3(){
const email = '***@*****' // メアド

  const folderId = '***'  // フォルダID
  const folder = DriveApp.getFolderById(folderId)
  folder.removeEditor(email)

  const fileId = '***'    // ファイルID
  const file = DriveApp.getFileById(fileId)
  file.removeCommenter(email)  
}

// // 権限範囲の取得
function myFunction10_6_4(){
  const folderId = '1oCon5tNYH96HQ7a4ZHZyNOA5f1ezWE8p'
  const folder = DriveApp.getFolderById(folderId)

  console.log(folder.getSharingAccess().toString())
  console.log(folder.getSharingPermission().toString())

  const fileId = '10uB0Eet6UGIRssh9hp2jzCjgeIE-7Gg-BkZRU2XNepQ'
  const file = DriveApp.getFileById(fileId)

  console.log(file.getSharingAccess().toString())
  console.log(file.getSharingPermission().toString())
}

// // 共有範囲の設定
function myFunction10_6_5(){
  const folderId = '1oCon5tNYH96HQ7a4ZHZyNOA5f1ezWE8p'
  const folder = DriveApp.getFolderById(folderId)
  folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.VIEW)   // 誰もが閲覧可能
  folder.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE)

  const fileId = '10uB0Eet6UGIRssh9hp2jzCjgeIE-7Gg-BkZRU2XNepQ'
  const file = DriveApp.getFileById(fileId)
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT)  // リンクをしている人がコメント可能
  file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE)
}













