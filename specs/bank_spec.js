var Bank = require('../bank');
var Account = require('../account');
var assert = require('assert');
var bank;
var account1;
var account2;
var account3;

describe ('bank', function(){

  beforeEach(function(){
    bank = new Bank();
    account1 = new Account("John", 'personal');
    account1.deposit(1000);
    account2 = new Account("Paul", 'business');
    account2.deposit(900);
    account3 = new Account("George", 'business');
    account3.deposit(800);
    bank.addAccount(account1);
    bank.addAccount(account2);
  });

  // it('initialises with no accounts', function(){
  //   assert.equal(bank.accounts.length, 0);
  // });

  it('can add accounts',function(){
    bank.addAccount('account');
    assert.equal(bank.accounts.length, 3);
  });

  it('can find account by owner name', function(){
    assert.equal(account1, bank.findByName("John"));
  });


  it('can return the account by largest value', function(){
    assert.equal(account1, bank.largestAccount())
    assert.equal(account1, bank.findAccount(bank.largest));
  });

  it('can return the total value of all accounts held', function(){
    assert.equal(1900, bank.totalHeld());
  });

  it('can return the average value of all accounts held', function(){
    assert.equal(950, bank.averageBalance());
  });

  it('can return the total value of a certain account type', function(){
    bank.addAccount(account3);
    assert.equal(bank.totalByType('personal'), 1000);
    assert.equal(bank.totalByType('business'), 1700);

  });

})