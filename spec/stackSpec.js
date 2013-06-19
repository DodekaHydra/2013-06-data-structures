describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('an empty stack should have size zero', function() {
    expect(stack.size()).to.equal(0);
  });


  it('pushing a value should increment size by one', function() {
    stack.push("test");
    expect(stack.size()).to.equal(1);
  });

  it('should add pushed items to the top of the stack', function() {
    // Fill out the body of the test here
    stack.push("test");
    expect(stack.pop()).to.equal("test");
  });

  it('should remove popped items from the top of the stack', function() {
    stack.push("test2");
    var size = stack.size();
    expect(stack.size()).to.equal(1);
    expect(stack.pop()).to.equal("test2");
    expect(stack.size()).to.equal(0);
  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
    // Fill out the body of the test here
  });

  it('should not error when popping from an empty stack', function() {
    // Fill out the body of the test here
  });

  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});
