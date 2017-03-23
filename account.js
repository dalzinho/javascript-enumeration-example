var Account = function(ownerName){
  this.ownerName = ownerName;
  this.balance = 0;
};

Account.prototype = {
  deposit: function(depositAmount){
    this.balance += depositAmount;
    return depositAmount;
  },

  withdraw: function(withdrawalAmount){
    this.balance -= withdrawalAmount;
    return withdrawalAmount;
  }
};

module.exports = Account;