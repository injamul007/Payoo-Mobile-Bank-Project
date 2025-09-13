//? Home page JS Code starts here

//? Log Out From Home Page
const logOutBtn = document.getElementById('logOutBtn').addEventListener('click', function() {
  window.location.href = './index.html';
})

//? function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
};

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
};

//? functions to get innerText
function getInnerText(id) {
  const availableBalance = document.getElementById(id);
  const availableBalanceInnerText = availableBalance.innerText;
  const availableBalanceInnerTextNumber = parseInt(availableBalanceInnerText)
  return availableBalanceInnerTextNumber;
};

//? function to set innerText
function setInnerText(value) {
  const availableBalance = document.getElementById('available_balance');
  availableBalance.innerText = value;
  return availableBalance;
}

//? store pin number in a variable bcz don't have db
const validPinNumber = 8090;

//? add money feature
//? addEventListener to add money button
document.getElementById('add_money_btn').addEventListener('click', function(e) {
  e.preventDefault();
  const bankName = getInputValue('select_bank');

  const bankAccountNumber = getInputValue('bank_account_number');

  const amountToAdd = getInputValueNumber('amount_to_add');

  const pinNumber = getInputValueNumber('pin_number');
  
  const availableBalance = getInnerText('available_balance');
  
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
  const totalNewAvailableBalance = availableBalance + amountToAdd;

  setInnerText(totalNewAvailableBalance);
  
})

//? cash Out feature
//? addEventListener to Withdraw money button
document.getElementById('withdraw_money_btn').addEventListener('click', function(e) {
  e.preventDefault();
  const agentAccountNumber = getInputValue('agent_account_number');

  const amountToWithdraw = getInputValueNumber('amount_to_withdraw');

  const withdrawPinNumber = getInputValueNumber('withdraw_pin_number');
  
  const availableBalance = getInnerText('available_balance');
  
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
  
  //?Validation check if main balance is less than 0 then withdraw not possible;
    if(amountToWithdraw > availableBalance) {
      alert('withdraw amount is higher than main balance');
    } else {
    setInnerText(totalNewAvailableBalance);
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
