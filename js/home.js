//? Home page JS Code starts here

// store pin number in a variable bcz don't have db
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