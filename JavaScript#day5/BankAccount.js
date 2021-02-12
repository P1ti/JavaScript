class BankAccount {
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  showBalance() {
    console.log("Your balance is: " + this.balance + " EUR");
  }

  withdraw(amount) {
    this.balance-=amount;
    console.log("Withdraw: " + amount + " EUR");
  }

  deposit(amount) {
    this.balance+=amount;
    console.log("Deposit: " + amount + " EUR");
  }
}

let Petrica = new BankAccount("Berbecea", "Petrica", 1000);
Petrica.showBalance();
Petrica.withdraw(200);
Petrica.showBalance();
Petrica.deposit(1500);
Petrica.showBalance();

  //This is a short exercise with Object Oriented Programming
  //I know Object Oriented Programming from PHP and it was pretty easy to apply this concept in JS
