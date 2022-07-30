function myFunction9_2_1() {
  console.log(GmailApp.getInboxUnreadCount())
  console.log(GmailApp.getStarredUnreadCount())
  console.log(GmailApp.getSpamUnreadCount())
}


// メールを送信する
function myFunction9_2_2(){
  const recipient = 'kt2lage@gmail.com'
  const subject = 'GAS Sample'

  let body= ''
  body += 'サンプルメール\n'
  body += '\n'
  body += 'ご確認よろしくお願いいたします．'

  const options = {
    cc: 'kt2lage@icloud.com',   // cc
    name: 'eiji'                // 送信者名
  }

  GmailApp.sendEmail(recipient, subject, body, options)
                    // 受取人     件名     本文   オプション
}

// 下書きを作成する
function myFunction9_2_3(){
  const recipient = 'kt2lage@gmail.com'
  const subject = 'GAS Sample'

  let body= ''
  body += 'サンプルメール\n'
  body += '\n'
  body += 'ご確認よろしくお願いいたします．'

  const options = {
    cc: 'kt2lage@icloud.com',   // cc
    name: 'eiji'                // 送信者名
  }

  GmailApp.createDraft(recipient, subject, body, options)
                    // 受取人     件名     本文   オプション
}

// スレッドを取得する
function myFunction9_3_1(){
  const threads = GmailApp.getInboxThreads(0,3)
  for(const thread of threads){
    console.log(thread.getFirstMessageSubject())    // 最初のメッセージの件名を取得する
  }
}

// ID でスレッドを取得
function myFunction9_3_2(){
  const threads = GmailApp.getInboxThreads(0, 1)
  const id = threads[0].getId()

  const thread = GmailApp.getThreadById(id)
  console.log(thread.getFirstMessageSubject())
}

// メールの検索
function myFunction9_3_3(){
  const query = 'is:read "AtCoder"'
  const threads = GmailApp.search(query, 0, 20)

  for(const thread of threads){
    console.log(thread.getFirstMessageSubject())
  }
}


// GmailThread クラス
function myFunction9_4_1(){
  const query = 'subject:牛込パーククリニック'
  const threads = GmailApp.search(query, 0, 1)

  console.log(threads[0].getFirstMessageSubject())
  console.log(threads[0].getId())
  console.log(threads[0].getLastMessageDate())
  console.log(threads[0].getMessageCount())
  console.log(threads[0].getPermalink())
  console.log(threads[0].hasStarredMessages())
  console.log(threads[0].isImportant())
  console.log(threads[0].isInChats())
  console.log(threads[0].isInInbox())
  console.log(threads[0].isInSpam())
  console.log(threads[0].isInTrash())
  console.log(threads[0].isUnread())
}

// スレッドを操作する
function myFunction9_4_2(){
  const query = 'subject:牛込パーククリニック'
  const threads = GmailApp.search(query, 0, 1)

  threads[0].markImportant()    // 重要タグ付け
  threads[0].markUnread()       // 未読状態
  threads[0].moveToInbox()      // 受信トレイに移動
}

// // 複数スレッドを操作したい場合
function myFunction9_4_3(){
  const query = 'subject:牛込パーククリニック'
  const threads = GmailApp.search(query, 0, 2)

  GmailApp.markThreadsImportant(threads)
  GmailApp.markThreadsUnread(threads)
  GmailApp.moveThreadsToInbox(threads)
}

// メッセージを取得する
// From thread
function myFunction9_5_1(){
  const threads = GmailApp.getInboxThreads(0, 1)
  const messages = threads[0].getMessages()
  console.log(messages[0].getSubject())
}

// By ID
function myFunction9_5_2(){
  const threads = GmailApp.getInboxThreads(0, 1)
  const messages = threads[0].getMessages()
  const id = messages[0].getId()

  const message = GmailApp.getMessageById(id)
  console.log(message.getSubject())   
}

// スレッドの配列からメッセージを取得する
// // Gmailへのアクセス回数を減らせるのが良き
function myFunction9_5_3(){
  const threads = GmailApp.getInboxThreads(0,2)
  const messageForThreads = GmailApp.getMessagesForThreads(threads)

  for(const [i, thread] of messageForThreads.entries()){
    for(const [j, message] of thread.entries()){
      console.log(`[${i}] [${j}] : ${message.getSubject()}`)
    }
  }
}


// GmailMessage クラス
function myFunction9_6_1(){
  const threads = GmailApp.getInboxThreads(0, 1)
  const message = GmailApp.getMessagesForThreads(threads)[0][0]

  console.log(message.getId())
  console.log(message.getDate())
  console.log(message.getSubject())

  console.log(message.getFrom())
  console.log(message.getTo())
  console.log(message.getCc())
  console.log(message.getBcc())
  console.log(message.getReplyTo())

  console.log(message.isDraft())
  console.log(message.isInChats())
  console.log(message.isInInbox())
  console.log(message.isInTrash())
  console.log(message.isStarred())
  console.log(message.isUnread())
}

// メッセージ本文の取得
function myFunction9_6_2(){
  const threads = GmailApp.getInboxThreads(0,1)
  const message = GmailApp.getMessagesForThreads(threads)[0][0] // 受信トレイの1通目の1つ目のスレッドを取得
  // const message = GmailApp.getMessagesForThreads(threads)[0][2] // 受信トレイの1通目の3つ目のスレッドを取得

  console.log(message.getBody())        // HTMLタグも含めて取得
  console.log(message.getPlainBody())   // プレーンテキストとして取得
}

// メッセージの返信と転送
function myFunction9_6_3(){
  const threads = GmailApp.getInboxThreads(0,1)
  const message = GmailApp.getMessagesForThreads(threads)[0][0]

  let replyBody = ''
  replyBody += '全員に返信をします．\n'
  replyBody += 'ご確認ください．'
  message.replyAll(replyBody)   // メッセージの返信

  const recipient = 'sample@sample.com'
  message.forward(recipient)    // メッセージの転送
}

function myFunction9_6_4(){
  const threads = GmailApp.getInboxThreads(0,1)
  const message = GmailApp.getMessagesForThreads(threads)[0][0]

  message.star()    // メッセージにスターを付与
}

function myFunction9_6_5(){
  const threads = GmailApp.getInboxThreads(0,1)
  const messages = threads[0].getMessages()

  GmailApp.starMessages(messages)
}




























