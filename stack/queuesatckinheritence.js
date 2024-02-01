class queue{
    constructor(){
        this.queue=[]
    }
    enqueue(value){
        this.queue.push(value)
    }
    dequeue(){
        this.queue.shift()
    }
}

class stack extends queue{
    constructor(){
        super()       
    }

    push(val){
        this.enqueue(val)

        for(let i=0;i<this.queue.length-1;i++){
            this.enqueue(this.dequeue())
        }
    }

    pop(){
        this.dequeue()
    }

    peek(){
        console.log(this.queue[0]);
    }
}



const stacker=new stack()

stacker.push(2)
stacker.push(8)
stacker.pop()
stacker.peek()