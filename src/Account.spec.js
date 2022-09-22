const Account = require("./Account");

describe("Account", () => {
  let account = new Account();

  it("Starts account with a balance of zero", () => {
    expect(account.balance).toEqual(0);
  });
});
