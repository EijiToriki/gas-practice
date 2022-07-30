// CalendarApp クラス
// // カレンダーの取得
function myFunction11_2_1() {
  const id = 'kt2lage@gmail.com'
  const calendar = CalendarApp.getCalendarById(id)
  console.log(calendar.getName())

  const defaultCalendar = CalendarApp.getDefaultCalendar()
  console.log(defaultCalendar.getName())
}

// // アクセス可能なカレンダを取得
function myFunction11_2_2(){
  const calendars = CalendarApp.getAllCalendars()

  for(const calendar of calendars){
    console.log(calendar.getName())
  }
}

// // 新規カレンダーの作成
function myFunction11_2_3(){
  const name = 'テストカレンダー'
  const options = {
    timeZone: 'Asiz/Tokyo',
    color: CalendarApp.Color.INDIGO
  }

  CalendarApp.createCalendar(name, options)
}


// Calendar クラス
// // カレンダー情報の取得
function myFunction11_3_1(){
  const id = 'kt2lage@gmail.com'
  const calendar = CalendarApp.getCalendarById(id)

  console.log(calendar.getName())
  console.log(calendar.getId())
  console.log(calendar.getDescription())
  console.log(calendar.getTimeZone())
  console.log(calendar.getColor())

  console.log(calendar.isMyPrimaryCalendar())
  console.log(calendar.isOwnedByMe())

  console.log(calendar.isHidden())
  console.log(calendar.isSelected())
}

// // 期間内のイベントを取得
function myFunction11_3_2(){
  const id = 'kt2lage@gmail.com'
  const calendar = CalendarApp.getCalendarById(id)

  const startDate = new Date('2022/7/24 9:00')
  const endDate = new Date('2022/7/28 18:00')
  const events = calendar.getEvents(startDate, endDate)

  for(const event of events){
    console.log(event.getTitle())
  }
}

// // 指定した日のイベントを取得
function myFunction11_3_3(){
  const id = 'kt2lage@gmail.com'
  const calendar = CalendarApp.getCalendarById(id)

  const date = new Date('2022/7/24')
  const options = {search: 'カラオケ'}    // カラオケと含むイベントを取得
  const events = calendar.getEventsForDay(date, options)
  for(const event of events){
    console.log(event.getTitle())
  }
}


// // イベントを作成
function myFunction11_3_4(){
  const id = 'kt2lage@gmail.com'
  const calendar = CalendarApp.getCalendarById(id)

  const title = '出社 電車移動'
  const startTime = new Date('2022/7/25 7:30')
  const endTime = new Date('2022/7/25 8:30')

  const options = {
    description: '着任 初日',
    location: '六本木一丁目アークヒルズ'
    // guests: 'email@xxx.com',
    // sendInvites: true
  }

  calendar.createEvent(title, startTime, endTime, options)
}