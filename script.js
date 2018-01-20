// 1.1 块级作用域 let
// var name = 'zach'
// while (true) {
//     var name = 'obama'
//     console.log(name)  //obama
//     break
// }
// console.log(name)  //obama

// if(true){
//   //使用let定义的变量，只能使用在定义t他的那个块中
//   var apple = "🍎" 
//   let orange = "🍊"
// }
//
// console.log(apple);
// console.log(orange);


// let name = 'zach'
// while (true) {
//     let name = 'obama'
//     console.log(name)  //obama
//     break
// }
// console.log(name)  //zach




// // 1.2 常量 const
// const PI = Math.PI
// PI = 23

// const apple = "🍎"
//
// console.log(apple);
//
// const apple = "🍋"
//
// //注意 const 限制的是给常量分配值这个动作，它并不限制常量里的值
// const fruit = []
// fruit.push('🍎')
// fruit.push('🍋')
// console.log(fruit)
//
// fruit = []



//2.1 解构数组
// function fruits(){
//   return ['苹果','香蕉','橘子']
// }
// var tmp = fruits(),
//   tapple=tmp[0],tbanana = tmp[1],torange=tmp[2]
// let [apple,banana,orange] = fruits()
// console.log(apple,banana,orange)

//2.2 解构对象
// function breakfast(){
//   return {apple:'苹果',banana:'香蕉',orange:'橘子'}
// }
// let {apple:apple,banana:banana,orange:orange} = breakfast()
// console.log(apple,banana,orange)

//3.1模版字符串
// let apple="苹果",banana='香蕉'
// let fruit = "今天的水果是" + apple + '和' + banana + "!"
// console.log(fruit)
// let es6fruit = `今天的水果是 ${apple} 和  ${banana} !`
// console.log(es6fruit)
//3.2带标签的模版字符串
// let apple="苹果",banana='香蕉'
// let fruits = fruitinfo`今天的水果是 ${apple} 和  ${banana} !`
//
// function fruitinfo(strings,...values){
//     console.log(strings,values)
//     let result = ''
//     for(let i = 0;i < values.length;i++){
//           result = result + strings[i]  + values[i]
//     }
//    result += strings[strings.length-1]
//    console.log(result)
// }

//4.1 默认参数
// function breakfast(dessert = "蛋糕",drink = "奶茶"){
//   return `${dessert} 和 ${drink}`
// }
// console.log(breakfast())


//4.2 spread操作符
// let fruits = ['苹果','香蕉'],
//       foods = ['蛋糕',...fruits]
// console.log(fruits)
// console.log(...fruits)
// console.log(foods)

//4.2 rest 操作符
// function breakfast(dessert,drink,...foods){
//   console.log(dessert,drink,foods)
// }
// breakfast('蛋糕','牛奶','香蕉','苹果')

//4.3箭头函数
// let breakfast = dessert => dessert
//
// var breakfast = function breakfast(dessert){
//   return dessert
// }


//5.1 对象表达式
// let dessert = "蛋糕", drink = "牛奶"
//
// function breakfast(dessert,drink){
//   console.log(dessert,drink)
// }
//
// let foods = {
//   dessert,  //"dessert":dessert,
//   drink,    //"drink":drink,
//   breakfast(){}   //breakfast:function(){}
// }
// console.log(foods)

//5.2 对象属性名
// let dessert = "蛋糕"
// let freshfruit = "fresh fruit"
//
// let  foods = {}
// foods.dessert = dessert
// foods["hot drink"]  ="咖啡"
// foods[freshfruit]  ="河南草莓"
// console.log(foods)

// 6.1 类和继承
// class Animal {
//     constructor(){
//         this.type = 'animal'
//     }
//     says(say){
//         console.log(this.type + ' says ' + say)
//     }
// }
//
// let animal = new Animal()
// animal.says('hello') //animal says hello
//
// class Cat extends Animal {
//     constructor(){
//         super()
//         this.type = 'cat'
//     }
// }

// 6.2 类的构造函数
// class king {
//     constructor(name) {
//        this.name=name
//     }
//
//     run(){
//         console.log(this.name)
//     }
// }
// let num1 = new king("大王")
// num1.run()


//7.1 集合 set  如果传入字符串“冰淇淋”，Set回分解为三个元素
// let desserts = new Set(['冰淇淋','蛋糕','甜筒'])
// console.log(desserts)
// //Set中不能传入重复的元素
// desserts.add("曲奇")
// desserts.add("曲奇")
//
// console.log(desserts.size)
// console.log(desserts.has("甜筒"))
// console.log(desserts.has("甜甜圈"))
//
// desserts.delete("蛋糕")
// console.log(desserts)
// desserts.forEach(dessert => {
//   console.log(dessert)
// })
// desserts.clear()
// console.log(desserts)


//7.2集合 Map
// let food = new Map()
// let fruit = {}, cook = function(){}, dessert = "甜点"
//
// console.log(food)
// food.set(fruit,"苹果")
// food.set(cook,"刀叉")
// food.set(dessert,"甜甜圈")
// console.log(food.size)
//
// console.log(food.get(fruit))
// console.log(food.get(dessert))
//
// food.delete(dessert)
// console.log(food)
//
// food.forEach((value,key) => {
//   console.log(value)
//   console.log(key)
// })
// console.log(food)
// food.clear()
// console.log(food)
