// prototype과 __proto__
// 생성자 함수의 prototype에 어떤 프로퍼티나 메서드가 있다면
// 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 됩니다.

var Constructor = function (name) {
  this.name = name;
};

Constructor.prototype.method1 = function () {};
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);

// 대표적인 내장 생성자 함수인 Array

var arr = [1, 2];
console.dir(arr);
console.dir(Array);

arr.forEach(function () {});
console.log(Array.isArray(arr));
// arr.isArray(); Array의 prototype property 내부에 있지않음.
