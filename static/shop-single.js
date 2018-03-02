
document.getElementById('addToCart').addEventListener("click", addItemToCart);

let name = document.getElementById('name');
let description = document.getElementById('description');
let spice = document.getElementById('spice');
let quantity = document.getElementById('quantity');
let unitPrice = document.getElementById('price');

function addItemToCart(){
  let item = itemToObject();
  sendItemToOrder(item);
  shoppingCart();
}

function itemToObject(){
    let orderItem = {};
    orderItem['name'] = name.innerText;
    orderItem['description'] = description.innerText;
    orderItem['spice'] = spice.value;
    orderItem['quantity'] = quantity.value;
    orderItem['unitPrice'] = convertStrtoInt(unitPrice.innerText);

    return orderItem;
}

function sendItemToOrder(itemInObject){
    fetch('/currentOrder', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(itemInObject),
        headers: new Headers({
        'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

function shoppingCart(){
        window.location.href = 'http://localhost:8080/shop-cart';
  }

 function convertStrtoInt(str){
    return parseInt(str.split("£")[1]).toFixed(2);
  } 