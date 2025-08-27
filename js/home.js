//? Home page JS Code starts here


document.getElementById('add_money_btn').addEventListener('click', function(e) {
  e.preventDefault();
  const bankName = document.getElementById('select_bank').value;
  const bankAccountNumber = parseInt(document.getElementById('bank_account_number').value);
  const amountToAdd = parseInt(document.getElementById('amount_to_add').value);
  const pinNumber = parseInt(document.getElementById('pin_number').value);
  
  const availableBalance = parseInt(document.getElementById('available_balance').innerText);
  
  const totalNewAvailableBalance = availableBalance+amountToAdd;
  document.getElementById('available_balance').innerText = totalNewAvailableBalance;
  
})