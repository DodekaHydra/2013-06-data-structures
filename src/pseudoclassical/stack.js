var Stack = function(){
  // Use an object with numeric keys to store values
  //var result;
  // Implement the methods below
  this.front = 0;
//  stack.end = 0;
  this.storage = {};
  this.result = "";
};


Stack.prototype.push = function(value){
  this.front++;
  this.storage[this.front] = value;
};

Stack.prototype.pop = function(){
  if (this.front){
    this.result = this.storage[this.front];
    delete this.storage[this.front];
    this.front--;
    return this.result;
  }
};

Stack.prototype.size = function(){
  return this.front;
};
