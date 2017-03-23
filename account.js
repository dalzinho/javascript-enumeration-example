var Account = function(ownerName, type){
  this.ownerName = ownerName;
  this.type = type;
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