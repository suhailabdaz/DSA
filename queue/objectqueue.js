class queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }

    enqueue(value){
        this.items[this.rear]=value
        this.rear++
    }
    dequeue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front ++
        return item

    }
    peek(){
        return this.items[this.front]
    }
    isempty(){
        return this.rear-this.front==0
    }
    getsize(){
        return this.rear-this.front
    }
}

const q=new queue

q.enqueue(3)
q.enqueue(6)
q.dequeue()
res=q.peek()
er=q.getsize()

console.log(res);
console.log(er);