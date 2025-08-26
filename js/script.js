//? payoo project js code starts from here
// section capturing 
const loginSection = document.querySelector('.login_section');
//? login button functionality
document.getElementById('loginButton').addEventListener('click', function(e) {
  e.preventDefault();
  const mobileNumber = 12345678900;
  const pinNumber = 8090;
  const numberInput = document.getElementById('numberInput');
  const pinInput = document.getElementById('pinInput');
  const numberValue = parseInt(numberInput.value);
  const pinValue = parseInt(pinInput.value);
  if((numberValue === mobileNumber) && (pinValue === pinNumber)) {
    window.location.href = './home.html';
  } else {
    alert('Invalid Credential');
  }
});

