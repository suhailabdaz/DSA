class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is full. Cannot enqueue.");
            return;
        }

        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.capacity;
        }

        this.queue[this.rear] = item;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return;
        }

        const removedItem = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }

        this.size--;
        return removedItem;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot peek.");
            return;
        }

        return this.queue[this.front];
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }

        let index = this.front;
        while (index !== this.rear) {
            console.log(this.queue[index]);
            index = (index + 1) % this.capacity;
        }
        console.log(this.queue[this.rear]);
    }
}

// Example usage:
const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.display(); // Output: 1 2 3 4 5
console.log(cq.dequeue()); // Output: 1
console.log(cq.dequeue()); // Output: 2
cq.enqueue(6);
cq.display(); // Output: 3 4 5 6
