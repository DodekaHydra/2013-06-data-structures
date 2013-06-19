var makeQueue = function(){
  // Use an object with numeric keys to store values
  //var result;
  // Implement the methods below
  var queue = {};
  queue.front = 0;
  queue.end = 0;
  queue.storage = {};
  queue.result = "";
  _.extend(queue, makeQueue.queueMethods);
  return queue;
};

makeQueue.queueMethods = {};

makeQueue.queueMethods.enqueue = function(value){
  this.storage[this.front] = value;
  this.front++;
};

makeQueue.queueMethods.dequeue = function(){
  if (this.front - this.end){
    this.result = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return this.result;
  }
};

makeQueue.queueMethods.size = function(){
  return this.front-this.end;
};
