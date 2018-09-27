// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();



// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function printsInfo(name, number, businessName) {

  console.log(`Account Holder Name: ${name}`,
    `Account Holder Number: ${number}`,
    `Business Name: ${businessName}`);
}   

// Add function to print all addresses, including a header
// Takes in a list of addresses as strings

function showAddresses(address) {

  console.log('Addresses:');

  for (let i = 0; i < address.length; i += 1) {
    console.log(address[i]);
  }
}

// Add function to print phone types and numbers

// Takes a map of phone numbers 

function showPhoneNums(numbers) {

  let numbers = phoneNumbers.entries();

  console.log('Phone Numbers: ');

  for (let [place, number] of numbers) {
    console.log(
      `${place} ${number}`
      );
  }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const accountTransactions = new Map();


// Add function to add transactions
function addTransaction(date, amount) {
  accountTransactions.set(date, amount);
}


// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

// Add function to show balance status

function showBalanceStatus(balance) {

  console.log(`Balance: ${balance}`);



  if (balance < 0) {
    console.log('YOU ARE OVERDRAWN');
  }
  else if (balance >= 0 && balance < 20) {
    console.log('Warning: You are close to zero balance.');
  }
  else {
    console.log('Thank you for your business.');
  }
}

// Add function to show transactions

function showTransactions(trMap, beginningBalance) {

  console.log(beginningBalance);

  // accountTransactions map of date/amount
  let transArr = trMap.entries();
  let currentBalance = beginningBalance;

  for (let [date, amount] of transArr) {
    let type = '';

    if (amount > 0) {
      type = 'deposit';
    }
    else if (amount < 0) {
      type = 'withdrawal';
    }

    currentBalance = currentBalance - amount;
    console.log(date, type, amount, currentBalance);
  }

  console.log(showBalanceStatus(currentBalance));

  if (currentBalance < 0) {
    currentBalance -= 25;
    console.log('Your balance has dipped below $0, one-time fee of $25 charged to account.')
  }  

  console.log(showBalanceStatus(currentBalance));
  
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




