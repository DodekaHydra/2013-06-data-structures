var Stack = function(){
  // Use an object with numeric keys to store values
  //var result;
  // Implement the methods below
  var stack = Object.create(Stack.stackMethods);
  stack.front = 0;
//  stack.end = 0;
  stack.storage = {};
  stack.result = "";
  return stack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this.front++;
  this.storage[this.front] = value;
};

Stack.stackMethods.pop = function(){
  if (this.front){
    this.result = this.storage[this.front];
    delete this.storage[this.front];
    this.front--;
    return this.result;
  }
};

Stack.stackMethods.size = function(){
  return this.front;
};