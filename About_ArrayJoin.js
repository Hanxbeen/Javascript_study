const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

// 배열 안의 값들을 join을 통해 넘어오는 값을 구분자로 사용해 문자열로 변환한다
// 기본값은 ,이다
