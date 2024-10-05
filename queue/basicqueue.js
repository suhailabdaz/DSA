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


// class queue{
//     constructor(){
//         this.queue=[]
//         this.top=0
//         this.rear=0
//     }

//     enqueue(value){
//        this.queue[this.rear]=value
//        this.rear ++
//     }
//     dequeue(){
//         this.queue[this.top]=null
//         this.top ++
//     }
//     peek(){
//         return this.queue[this.top]
//     }
// }

// const q=new queue()

// q.enqueue(8)
// q.dequeue()
// q.enqueue(7)
// console.log(q.peek());
