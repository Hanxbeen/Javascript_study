var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2;
    //이 메서드는 13번째 줄에서 실행이 되었고 . 앞에잇는 obj가 this에 담긴다
    (function () {
      this.value = 3;
      //이 this는 함수에서 선언이 된 this이기 때문에 this : window객체가 된다.
      // 고로 전역변수value = 3 이 되는 것이다.
    })();
  },
};

obj.setValue();
console.log(value);
console.log(obj.value);
