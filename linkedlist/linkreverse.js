class Node{
    constructor(value){
        this.value=value
        this.next = null
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
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail= node
        }
        this.size ++
    }

    printList(){
        let current= this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }

    reverse(){
        let current = this.head
        let prev = null
        while(current){
            let second = current.next
            current.next = prev
            prev = current
            current = second
            
        }
        this.head=prev
    }
}

const list = new LinkedList

list.append(32)
list.append(30)
list.reverse()
list.printList()