var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size=0; // Hint: set an initial value here
  var result;
  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    size+=1;
    storage[size]= value;
  };

  queue.dequeue = function(){
    result= storage[1];
    delete storage[1];
    size-=1;
    return result;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
