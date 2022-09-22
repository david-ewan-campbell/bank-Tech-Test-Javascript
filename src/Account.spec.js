const Account = require("./Account");

describe("Account", () => {
  let account = new Account();

  it("starts user account with a balance of zero", () => {
    expect(account.balance).toEqual(0);
  });

  it("can let a user make deposits into their account", () => {
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
  })
});
