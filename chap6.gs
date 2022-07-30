function myFunction6_1() {
  // メソッド定義と呼び出し
  const greeting = {
    sayHello() {
      return 'Hello'
    }
  }

  console.log(greeting.sayHello())

  // メソッドの代入
  greeting.sayGoodBye = function() {
    return 'Good bye'
  }

  console.log(greeting.sayHello())
  console.log(greeting.sayGoodBye())

}


function myFunction6_23(){
  // クラスの定義
  class Person{
    constructor(name, age){
      this.name = name
      this.age = age
    }

    // メソッド定義
    greet(){
      console.log(`Hello : I'm ${this.name}!`)
    }

    isAdult(){
      return this.age >= 10
    }

  }

  // インスタンス化
  const p1 = new Person("asuka", 24)
  p1.age += 1       // インスタンス メンバの変更
  p1.job = 'Idol'   // インスタンス メンバの追加
  console.log(p1)

  const p2 = new Person("sakura", 20)
  console.log(p2)

  const p3 = new Person("miduki", 22)
  p3.greet()
  console.log(p3.isAdult())

  // インスタンスのメソッドの変更
  p3.greet = function(){
    console.log(`Good Bye! I'm ${this.name}`)
  }

  p3.greet()

  console.log(Person.prototype.greet.toString())    // 関数の内容を文字列出力
  console.log(p3.greet.toString())
}


function myFunction6_4() {
  // 静的メンバー
   class Person{
     constructor(name, age){
       this.name = name
       this.age = age
     }

     static greet(name){
       console.log(`Hello! I'm ${name}`)
     }
   }


  Person.job = 'Engineer'

  // プロトタイプメソッドの変更
  Person.prototype.greet = function(){
    console.log(`Good Bye! ${this.name}`)
  }

  
  console.log(Person.job)
  
  const p = new Person('kakki', 20)
  p.greet();

  console.log(Person.prototype.greet.toString())
  console.log(p.greet.toString())


















}


