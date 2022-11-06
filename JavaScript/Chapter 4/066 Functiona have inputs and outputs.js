var total = 0;

function add_to_total(amount) { // 인자는 입력
  console.log("Old total: " + total); // 전역변수를 읽는 것은 암묵적 입력 ,콘솔 로그 찍는 것은 암묵적 출력
  total += amount; // 전역변수를 바꾸는 것도 암묵적 출력
  return total; // 리턴값은 명시적 출력
}

// * 암묵적 입력 - 인자 외 다른 입력
// * 명시적 입력 - 인자
// * 명시적 출력 - 리턴값
// * 암묵적 출력 - 리턴값 외 다른 출력
// * 함수에 암묵적 입력과 출력이 있으면 액션이 된다.