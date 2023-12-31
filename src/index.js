//const, let等の変数宣言
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// const val3 = "const変数";
// console.log(val3);

// // //const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Yuri",
//   age: 21,
// };
// console.log(val4);

// val4.name = "ゆり";
// val4.addres = "Okayama";
// console.log(val4)

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[1] = 'bird';
// val5.push('monkey');

// console.log(val5);

// //テンプレート文字列の使い方
// const name = "Yuri";
// const age = 21;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

// アロー関数

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2)=>{
//   return num1 + num2;
// };
// console.log(func3(10, 20));

////分割代入
// const myProfile = {
//   name: "Yuri",
//   age: 21,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ['Yuri', 21];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const[name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

// //デフォルト値
// const sayHello = (name="ゲスト") => console.log(`こんにちは、${name}さん！`);
// sayHello("Yuri");

/**
 * スプレッド構文...
 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// //arr8を更新するとarr4も値が変わってしまう
// console.log(arr8);
// console.log(arr4);
