var Queue = function(){
  this.front = 0;
  this.end = 0;
  this.storage = {};
  this.result = "";
};

Queue.prototype.enqueue = function(value){
  this.storage[this.front] = value;
  this.front++;
};

Queue.prototype.dequeue = function(){
  if (this.front - this.end){
    this.result = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return this.result;
  }
};

Queue.prototype.size = function(){
  return this.front-this.end;
};
