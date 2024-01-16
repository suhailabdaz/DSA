class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    append(value){
        let node = new Node(value)
        if(!this.head){
            this.head=node
            this.tail= node
        }
        else{
            let tail= this.tail
            tail.next=node
        }
    }

    printlist(){
        let current= this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }
}

const link = new LinkedList()

link.append(2)
link.append(4)
link.printlist()