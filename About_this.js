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

// 자 근데 this가 서로 다르다보니까 개발할 때 신경써야할 부분이 많은건데...
// 이 두 this를 미리 인지하고 같게 할 수 있으면 좋겠죠 ?

// 그래서 이 두가지 방법을 소개하고합니다.

var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2;
    self = this;
    (function () {
      self.value = 3;
    })();
  },
};

///////////////////////////////

var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2;
    (function () {
      this.value = 3;
    }.call(this));
    //call 이나 apply로 this를 전달해주면 된다.
  },
};
