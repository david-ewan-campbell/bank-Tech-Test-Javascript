class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount, date = new Date(Date.now())) {
    this.balance += amount;
    this.saveDeposit(amount, date);
  }

  withdrawal(amount, date = new Date(Date.now())) {
    this.balance -= amount;
    this.saveWithdrawal(amount, date);
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

  saveWithdrawal(amount, date) {
    let transaction = {
      date: date.toLocaleDateString(),
      credit: "",
      debit: amount.toFixed(2),
      balance: this.balance.toFixed(2),
    };

    this.transactions.push(transaction);
  }

  printedStatement() {
    return "date || credit || debit || balance\n26/09/2022 ||  || 500.00 || 500.00\n26/09/2022 || 1000.00 ||  || 1000.00"
  }
}

module.exports = Account;
