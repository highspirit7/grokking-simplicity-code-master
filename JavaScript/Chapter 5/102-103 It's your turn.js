// Page 102 It's your turn

/**
 * 함수가 하는 일
 * 1. 모든 버튼을 가져오기
 * 2. 버튼을 가지고 반복하기
 * 3. 버튼에 관련된 제품을 가져오기
 * 4. 가져온 제품을 가지고 새 장바구니 만들기
 * 5. 장바구니가 무료 배송이 필요한지 확인하기
 * 6. 아이콘 표시하거나 감추기
 */
 function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom(); // 1
  for(var i = 0; i < buy_buttons.length; i++) { // 2
    var button = buy_buttons[i];
    var item = button.item; // 3
    var new_cart = add_item(cart, item); // 4
    if(gets_free_shipping(new_cart)) // 5
      button.show_free_shipping_icon(); // 6
    else
      button.hide_free_shipping_icon(); // 6
  }
}

 // 1, 2, 3번은 구매하기 버튼 관련 동작
 // 4, 5번은 cart와 item 관련 동작
 // 6번은 DOM 관련 동작

// Page 103 Answer

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for(var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, hasFreeShipping);
  }
}

// 4, 5번을 따로 분리
function gets_free_shipping_with_item(cart, item) {
  var new_cart = add_item(cart, item);
    return gets_free_shipping(new_cart);
}

// 6번을 따로 분리
function set_free_shipping_icon(button, isShown) {
  if(isShown)
    button.show_free_shipping_icon();
  else
    button.hide_free_shipping_icon();
}