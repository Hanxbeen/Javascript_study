// arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.
// arguments 객체는 Array가 아닙니다. length 빼고는 pop()과 같은 어떤 Array 속성도 없습니다.
// Array로 변경할 수 있는 방법은 다음과 같이 네가지가 있습니다.

function func1(a, b, c) {
  // var args = Array.prototype.slice.call(arguments);
  // var args = [].slice.call(arguments);
  // var args = Array.from(arguments);
  var args = [...arguments];
  console.log(args);
}

func1(1, 2, 3);
func1('a', 'b', 'c');
