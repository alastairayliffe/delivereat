
document.getElementById('login').addEventListener("click", openPortal);
let userName = document.getElementById('userName');
let password = document.getElementById('password');
let forgottenPassword = document.getElementById('forgottenPassword');

function openPortal(){

  let userDetails = prepareUserId(userName, password);
  
  let url = '/loginAttempt';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userDetails),
      headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => userLogin(response));
}

function prepareUserId(userName, password){
  let userDetails = {};
  let userInnerDetails = {};
  userInnerDetails['password'] = password.value;
  userDetails[userName.value] = userInnerDetails;
  return userDetails;
}

function userLogin(response){
  let loginResult = Object.values(response)[0];
  
  if(loginResult === 'newUser'){
      window.location.href = 'http://localhost:8080/shop-list';
  } else if (loginResult === 'success'){
    window.location.href = 'http://localhost:8080/shop-list';
  }

  return loginResult;
}
