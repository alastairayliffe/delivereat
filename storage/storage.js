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
}


module.exports = users;