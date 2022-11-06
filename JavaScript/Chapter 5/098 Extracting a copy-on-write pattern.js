/// Original
function add_item(cart, item) {
  var new_cart = cart.slice();
  new_cart.push(item);
  return new_cart;
}

/// General
/**
 * 장바구니와 제품에만 쓸 수 있는 함수가 아닌 어떤 배열이나 항목에도 쓸 수 있는 이름으로 바꿨다.
 * 그래서 재사용할 수 있는 utility 함수가 되었다. 앞으로 장바구니에 제품을 추가하는 것 뿐만
 * 아니라 배열에 항목을 추가할 일이 또 있을 때 사용할 수 있다.
 */
function add_element_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}