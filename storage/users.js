// storage.js
function users(){
  let currentUsers = {};
  let currentOrder = [];
      return{ 
          userLogIn(newUser){
              let userName = Object.keys(newUser)[0];
              let userDetails = Object.values(newUser)[0];
              let passwordCheck = false;
              if(currentUsers[userName] === undefined){
                  addNewUser(userName, userDetails);
                  return {login: 'newUser'};
                  
              } else {
                  let lookUpUser = currentUsers[userName];
                  passwordCheck = checkPassword(userDetails, lookUpUser);             
                  if(passwordCheck === true){
                      return {login: 'success'};
                  } else{
                      return {login: 'failure'};
                  }
              }        
          },
          currentOrderStorage(currentItemToOrder){
            currentOrder.push(currentItemToOrder);
            return currentOrder;       
        },
        returnCurrentOrder(){
            let i = 0;
            let orderSum = 0;
            currentOrder.forEach(function(item){
                item['quantityId'] = i;
                item['priceId'] = i+'priceId';
                item['totalPriceId'] = i+'totalPriceId';
                item['totalPrice'] = item.quantity * item.unitPrice;
                item['deleteId'] = 'delete-'+i;
                i=i+1;
                orderSum = orderSum + (item.quantity * item.unitPrice);
            });

            let taxSum = sumTax(orderSum);
            let totalOwed = taxSum + orderSum + 10;

            return {items: currentOrder,
                    sumOfOrder: orderSum,
                    sumOfTax: taxSum,
                    totalOwed: totalOwed
                };       
        },
        updateCurrentOrder(updatedOrder){
            currentOrder = updatedOrder;
        }
      };

  function addNewUser(userName, userDetails){
      currentUsers[userName] = userDetails;
  };
  
  function checkPassword(loginPassword, systemPassword){
      let newPassword = Object.values(loginPassword)[0];
      let oldPassword = Object.values(systemPassword)[0];
      if(newPassword === oldPassword){
          return true;
      } else {
          return false;
      }
  };

  function sumOrder(){
    let sum = currentOrder.reduce(function(total, item){
        return total + item.totalPrice;
    })
    return sum;
  };

  function sumTax(sumOrder){
    return sumOrder * 0.2;
  };


}


module.exports = users;