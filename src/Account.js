class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount, date = new Date(Date.now())) {
    this.balance += amount;
    this.saveDeposit(amount, date);
  }

  withdrawal(amount) {
    this.balance -= amount;
  }

  saveDeposit(amount, date) {
    let transaction = {
      date: date.toLocaleDateString(),
      credit: amount.toFixed(2),
      debit: "",
      balance: this.balance.toFixed(2),
    };

    this.transactions.push(transaction);
  }
}

module.exports = Account;
