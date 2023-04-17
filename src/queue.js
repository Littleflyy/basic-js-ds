const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {

   constructor() {
    this.headIndex = 0;
    this.tailIndex = 0;
    this.items = {};
  }
  getUnderlyingList() {
    // for (let key in this.items) {
    //   if (typeof this.items[key] === 'object') {
    //     return getUnderlyingList(this.items[key]);
    //   }
    //   else {
    //     return this.items[key];
    //   }
    // }
    // let current = this.headIndex;

    // while(current) {
    //   return current.value;
    //   current = current.next;
    // }
    return this.items;
  }

  enqueue(value) {
    let next = this.items.next;

    while(next) {
        next = next.next;
    }

    next = { value };
  }

  dequeue() {
    const item = this.items.value;
    this.items = this.items?.next;
    return item;
  }
}

module.exports = {
  Queue
};
