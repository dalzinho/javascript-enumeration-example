var Bank = require('../bank');
var assert = require('assert');
var bank;

describe ('bank', function(){

  beforeEach(function(){
    bank = new Bank();
  });

  it('initialises with no accounts', function(){
    assert.equal(bank.accounts.length, 0);
  });

  it('can add accounts',function(){
    bank.addAccount('account');
    assert.equal(bank.accounts.length, 1);
  });

  it('can find account by owner name');

  it('can return the account by largest value');

  it('can return the total value of all accounts held');

  it('can return the average value of all accounts held');

  it('can return the total value of a certain account type');

})