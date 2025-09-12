//? Home page JS Code starts here

//? Log Out From Home Page
const logOutBtn = document.getElementById('logOutBtn').addEventListener('click', function() {
  window.location.href = './index.html';
})

//? store pin number in a variable bcz don't have db
const validPinNumber = 8090;

//? addEventListener to add money button
document.getElementById('add_money_btn').addEventListener('click', function(e) {
  e.preventDefault();
  const bankName = document.getElementById('select_bank').value;
  const bankAccountNumber = document.getElementById('bank_account_number').value;
  const amountToAdd = parseInt(document.getElementById('amount_to_add').value);
  const pinNumber = parseInt(document.getElementById('pin_number').value);
  
  const availableBalance = parseInt(document.getElementById('available_balance').innerText);
  
  if (!(bankName) || bankName === 'Select Bank') {
    alert('Please Select a Bank Name');
    return;
  } else if(!(bankAccountNumber) || (bankAccountNumber.length < 11)) {
    alert('Please Provide a Valid Bank Account Number');
    return;
  } else if (!(amountToAdd) || amountToAdd <= 0) {
    alert('Please Give Some Valid Amount of Money');
    return;
  } else if(!(pinNumber) || (pinNumber !== validPinNumber)) {
    alert('Please Provide a Valid Pin Number');
    return;
  }
  const totalNewAvailableBalance = availableBalance+amountToAdd;
  document.getElementById('available_balance').innerText = totalNewAvailableBalance;
  
})

//? addEventListener to Withdraw money button
document.getElementById('withdraw_money_btn').addEventListener('click', function(e) {
  e.preventDefault();
  const agentAccountNumber = document.getElementById('agent_account_number').value;
  const amountToWithdraw = parseInt(document.getElementById('amount_to_withdraw').value);
  const withdrawPinNumber = parseInt(document.getElementById('withdraw_pin_number').value);
  
  const availableBalance = parseInt(document.getElementById('available_balance').innerText);
  
  if(!(agentAccountNumber) || (agentAccountNumber.length < 11)) {
    alert('Please Provide a Valid Agent Account Number');
    return;
  } else if (!(amountToWithdraw) || amountToWithdraw <= 99) {
    alert('Please Give Some Valid Amount of Money');
    return;
  } else if(!(withdrawPinNumber) || (withdrawPinNumber !== validPinNumber)) {
    alert('Please Provide a Valid Pin Number');
    return;
  }

  const totalNewAvailableBalance = availableBalance - amountToWithdraw;
  
  if(totalNewAvailableBalance <= 0) {
    alert('Your Balance is 0');
  } else {
    document.getElementById('available_balance').innerText = totalNewAvailableBalance;
  }
})


//? Togging Features 
//? Event Listener for add money div section
document.getElementById('add_money_div').addEventListener('click', function() {
  document.getElementById('add_money_parent_section').style.display = 'block';
  document.getElementById('cash_out_parent_section').style.display = 'none';
})

//? Event Listener for cash out div section
document.getElementById('cash_out_div').addEventListener('click', function() {
  document.getElementById('add_money_parent_section').style.display = 'none';
  document.getElementById('cash_out_parent_section').style.display = 'block';
})
