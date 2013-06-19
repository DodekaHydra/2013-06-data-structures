var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var front = 0;
  var end = 0;
  var result;
  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[front] = value;
    front++;
  };

  queue.dequeue = function(){
    if (front-end){
      result = storage[end];
      delete storage[end];
      end++;
      return result;
    }
  };

  queue.size = function(){
    return front-end;
  };

  return queue;
};
