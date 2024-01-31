class Objstack{
    constructor(){
        this.stack={}
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    push(value){
        this.size ++
        this.stack[this.size]=value

    }
    pop(){
        if(!this.isEmpty()){
            delete this.stack[this.size]
            
        }else{
            console.log("empty stack");
        }
    }
    peek(){
        return this.stack[this.size]
    }
    display(){
        return this.stack
    }
}


const stack=new Objstack()
stack.push(7)
stack.push(8)
console.log(stack.peek()
);
console.log(stack.display()
);

