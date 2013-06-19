describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('an empty queue should have size zero', function() {
    expect(queue.size()).to.equal(0);
  });


  it('enqueueing a value should increment size by one', function() {
    queue.enqueue("test");
    expect(queue.size()).to.equal(1);
  });

  it('should add enqueued items to the top of the queue', function() {
    // Fill out the body of the test here
    queue.enqueue("test");
    expect(queue.dequeue()).to.equal("test");
  });

  it('should remove dequeued items from the top of the queue', function() {
    queue.enqueue("test");
    queue.enqueue("test2");
    var size = queue.size();
    expect(queue.size()).to.equal(2);
    expect(queue.dequeue()).to.equal("test");
    expect(queue.size()).to.equal(1);
  });

  it('should enqueue and dequeue multiple items in the right order (FIFO)', function() {
    // Fill out the body of the test here
    queue.enqueue("test");
    queue.enqueue("test2");
    queue.enqueue("test3");
    expect(queue.dequeue()).to.equal("test");
    expect(queue.dequeue()).to.equal("test2");
    expect(queue.dequeue()).to.equal("test3");
  });

  it('should not error when dequeueing from an empty queue', function() {
    expect(queue.dequeue()).to.equal(undefined);
        // Fill out the body of the test here
  });
  // Hey! Add tests here that thoroughly test the functionality of your queue
});
