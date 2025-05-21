// 1. Orthogonal Array Testing
function testCombination(color, size) {
  if (color === 'red' && size === 'small') {
    return "Test Case 1 Passed";
  } else if (color === 'blue' && size === 'large') {
    return "Test Case 2 Passed";
  } else {
    return "Test Case Failed";
  }
}

// Uji Orthogonal Array Testing
console.log(testCombination('red', 'small')); // Output: Test Case 1 Passed
console.log(testCombination('blue', 'large')); // Output: Test Case 2 Passed

// 2. Matrix Testing
function testLogin(username, password) {
  const validCredentials = {
    "user1": "password123",
    "user2": "password456"
  };
  
  if (validCredentials[username] === password) {
    return "Login Success";
  } else {
    return "Login Failed";
  }
}

// Uji Matrix Testing
console.log(testLogin("user1", "password123")); // Output: Login Success
console.log(testLogin("user2", "wrongpassword")); // Output: Login Failed

// 3. Regression Testing
let totalPrice = 0;

function addToCart(itemPrice) {
  totalPrice += itemPrice;
  return totalPrice;
}

// Pengujian sebelum pembaruan
console.log(addToCart(20)); // Output: 20

// Pembaruan pada kode: diskon 10%
function applyDiscount() {
  totalPrice *= 0.9;
  return totalPrice;
}

// Pengujian setelah pembaruan
console.log(applyDiscount()); // Output: 18 (Diskon diterapkan)

// 4. Pattern Testing
function trackOrderStatus(orderID) {
  const orderStatus = {
    101: "Processing",
    102: "Shipped",
    103: "Delivered"
  };
  
  return orderStatus[orderID] || "Order not found";
}

// Uji Pattern Testing
console.log(trackOrderStatus(101)); // Output: Processing
console.log(trackOrderStatus(104)); // Output: Order not found
