class stack{
    constructor(){
        this.stack=[]
        this.top=null
    }

    isEmpty(){
        return this.stack.length==0
    }

    push(value){
        this.stack.push(value)
           }

    pop(){
        this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length-1]
    }
}

const stac=new stack

stac.push(12)
stac.pop()

stac.push(8)
console.log(stac.peek());