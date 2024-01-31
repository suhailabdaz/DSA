class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    enqueue(value){
        let node=new Node(value)
        if(!this.front){
           this.front=node
           this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    dequeue(){
        this.front=this.front.next
    }
    peek(){
        if(!this.front){
            return null
        }
        return this.front.value
    }
}


const q=new Queue

q.enqueue(4)
q.dequeue()
res=q.peek()
console.log(res);