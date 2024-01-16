
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return console.log(this.size==0);
    }

    getSize(){
        return console.log(this.size);
    }

   
    

   insert(value){
    const newNode = new Node(value)
    if(this.head == null){
        this.head=newNode
    }else{
        newNode.next = this.head
        this.head = newNode
    }
    this.size++
    console.log(value+"added")
   }

   printList(){
    let current = this.head
        while (current !== null){
            console.log(current.value)
            current = current.next 
        }
    }
}

const myLinkedList = new LinkedList();

myLinkedList.insert(34)
myLinkedList.insert(33)
myLinkedList.printList()





