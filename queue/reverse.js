class queue{
    constructor(){
        this.queue=[12,34,56,78]
        this.stack=[]
    }
    reverse(){
        while(this.queue.length>0){
            this.stack.push(this.queue.shift())
        }
        while(this.stack.length>0){
            this.queue.push(this.stack.pop())
        }

        return this.queue
    }


}

const q=new queue()
console.log(q.reverse());