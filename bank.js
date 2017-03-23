var Bank = function(){
  this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },

  findByName: function(searchName){
    for (var account of this.accounts){

      if(searchName === account.ownerName){
        return account;
      }
    }
  },


  largestAccount: function(){
    var largest = this.accounts[0];
    for(var account of this.accounts){
      if(account.balance > largest.balance){
        largest = account;
      }
    }
    return largest;
  },

  totalHeld: function(){
    var total = 0;
    for(var account of this.accounts){
      total += account.balance;
    }
    return total;
  },

  averageBalance: function(){
    return this.totalHeld() / this.accounts.length;
  },
  
  totalByType: function(searchType){
    var total = 0;
    for(var account of this.accounts){
      if(account.type === searchType){
        total += account.balance;
      }
    }
    return total;
  }
};


module.exports = Bank;