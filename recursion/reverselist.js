function reverseLinkedList(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let reversedListHead = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    
    return reversedListHead;
}  


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimeStack(primeStack) {
    let current = primeStack.top;
    let result = '';
    while (current !== null) {
        if (isPrime(current.data)) {
            result += current.data + ' ';
        }
        current = current.next;
    }
    console.log("Prime numbers in the stack:");
    console.log(result.trim());
}

// Example usage:

const primeStack = new Stack();
primeStack.push(2);
primeStack.push(3);
primeStack.push(4);
primeStack.push(5);
primeStack.push(6);
primeStack.push(7);

printPrimeStack(primeStack);

