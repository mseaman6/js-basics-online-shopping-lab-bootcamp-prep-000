var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length===0) {
    return `Your shopping cart is empty.`;
  } else {
    var cartDesc = '';
    for(var i=0; i<cart.length; i++) {
      var cartItemName = cart[i].itemName;
      var cartItemPrice = cart[i].itemPrice;
      if(i===cart.length) {
        cartDesc = cartDesc + `and ${cartItemName} at $${cartItemPrice}`;
      } else {
        cartDesc = cartDesc + `${cartItemName} at $${cartItemPrice},`;
      }
    }
    return `In your cart, you have ${cartDesc}.`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
