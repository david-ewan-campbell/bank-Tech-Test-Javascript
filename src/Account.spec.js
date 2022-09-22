const Account = require("./Account");

describe("Account", () => {
  it("starts user account with a balance of zero", () => {
    let account = new Account();
    expect(account.balance).toEqual(0);
  });

  it("lets a user make a deposit into their account", () => {
    let account = new Account();
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
  });
  
  it("lets a user make a withdrawal from their account", () => {
    let account = new Account();
    account.deposit(1000);
    account.withdrawal(500);
    expect(account.balance).toEqual(500);
  });
});
