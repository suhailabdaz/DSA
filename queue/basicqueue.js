class queue{
    constructor(){
        this.items=[]
        this.size=0
        this.front=null
        this.rear=null
    }

    enqueue(value){
        if(!this.front){
            this.front=value
        }
        this.rear=value
        this.items[this.size]=value
        this.size++
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


