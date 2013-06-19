var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size=0; // Hint: set an initial value here
  var result;
  // Implement the methods below
  var stack = {};

//Value is always a string.
  stack.push = function(value){
    size++;
    storage[size] = value;
  };

  stack.pop = function(){
    if (size) {
      result = storage[size];
      delete storage[size];
      size--;
      return result;
    }
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
