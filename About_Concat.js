let ans;
function myConcat(separator) {
  // separator로 넘어오는 값은 "."
  // 저 첫번째 문자열만 넘어온다.

  var args = Array.prototype.slice.call(arguments, 1);
  //,1은 1번 인덱스에서부터를 의미함
  ans = args.join(separator);
  //배열을 문자열로 변경하면서 구분자를 ()안에 있는것으로 한다
  return ans;
}

myConcat(", ", "red", "orange", "blue");
// red, orange, blue
// myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// 결과 : elephant; giraffe; lion; cheetah
// myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// 결과 : sage. basil. oregano. pepper. parsley
console.log(ans);
