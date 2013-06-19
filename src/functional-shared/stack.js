var makeStack = function(){
  // Use an object with numeric keys to store values
  //var result;
  // Implement the methods below
  var stack = {};
  stack.front = 0;
//  stack.end = 0;
  stack.storage = {};
  stack.result = "";
  _.extend(stack, makeStack.stackMethods);
  return stack;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.front++;
  this.storage[this.front] = value;
};

makeStack.stackMethods.pop = function(){
  if (this.front){
    this.result = this.storage[this.front];
    delete this.storage[this.front];
    this.front--;
    return this.result;
  }
};

makeStack.stackMethods.size = function(){
  return this.front;
};