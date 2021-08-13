// 함수를 호출하여 함수의 이 값을 지정된 개체로 대체하고 함수의 인수를 지정된 배열로 대체합니다.
// * @param thisArg func를 호출하는데 제공될 this의 값. this는 메소드에 의해 실제로 보여지는 값이
//                  아닐 수 있음을 유의합니다. 메소드가 non-strict mode 코드의 함수일 경우,
//                  null과 undefined가 전역 객체로 대체되며 기본값은 제한됩니다
// * @param argArray 함수에 전달될 인수 집합입니다.

// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(undefined, numbers);

// console.log(max);
// // expected output: 7

// const min = Math.min.apply(null, numbers);

// console.log(min);
// // expected output: 2

// var array = ['a', 'b'];
// var elements = [0, 1, 2];
// array.push.apply(array, elements);
// elements.push.call(array, elements);
// console.log(array);
// console.log(elements);

Function.prototype.construct = function (aArgs) {
  var oNew = {};
  oNew.__proto__ = this.prototype;
  this.apply(oNew, aArgs);
  return oNew;
};
