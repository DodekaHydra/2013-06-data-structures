var Queue = function(){
  var newQueue = Object.create(Queue.queueMethods);
  newQueue.front = 0;
  newQueue.end = 0;
  newQueue.storage = {};
  newQueue.result = "";
  return newQueue;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value){
  this.storage[this.front] = value;
  this.front++;
};

Queue.queueMethods.dequeue = function(){
  if (this.front - this.end){
    this.result = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return this.result;
  }
};

Queue.queueMethods.size = function(){
  return this.front-this.end;
};
