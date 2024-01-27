class queue{
    constructor(){
        this.items=[]
        this.size=0
        this.front=null
        this.rear=null
    }

    enqueue(value){
       this.items.push(value)
    }
    dequeue(){
        this.items.shift()
    }
    print(){
        console.log(this.items);
    }
}

const q=new queue

q.enqueue(2)
q.enqueue(24)
q.print()
q.dequeue()
q.print()


