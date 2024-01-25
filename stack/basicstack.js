class Stack{
    constructor(){
        this.items=[]
        this.min=[]
        this.size=0
    }

    push(value){
        this.items[this.size]=value
        this.size++
        const currentMin = Math.min(value,Math.min(...this.items));
        this.min.push(currentMin)
    }

    pop(){
        this.items.pop()
        this.min.pop()
        this.size--
    }

    printStack(){
    console.log(this.items);
}
iempty(){
    return console.log(this.size==0)
} 
getSize(){
    console.log(this.size)
}
getmin(){
    console.log(this.min[this.size-1])
}
peek(){
    console.log(this.items[this.size-1])
}
clear(){
    this.items=[]
    this.size=0
}
}


const stack=new Stack

stack.push(12)
// stack.push(-1)
// stack.push(33)
// stack.push(122)
// stack.pop()
// stack.printStack()
// stack.iempty()
// stack.getSize()
// stack.peek()
stack.getmin()
