var Account = require('../account');
var assert = require('assert');
var account1;

describe('account', function(){
  beforeEach(function(){
    account1 = new Account("John");
  });

  it('should have an owner name', function(){
    assert.equal("John", account1.ownerName);
  });

  it('has a balance of 0', function(){
    assert.equal(0, account1.balance);
  });

  it('can accept deposits', function(){
    account1.deposit(100);
    assert.equal(100, account1.balance);
  });

  it('can manage withdrawals', function(){
    account1.deposit(100);
    account1.withdraw(50);
    assert.equal(50, account1.balance);
  });

})