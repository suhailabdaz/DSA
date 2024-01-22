
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
        this.size=0
    }

isempty(){
    return this.size==0
}



    push(value){
        let node=new Node(value)
        if(!this.top){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
        
        this.size++

    }
    pop(){
        if(this.isempty()){
            return
        }
        this.top=this.top.next
        this.size --
    }
    peek(){
        if(!this.top){
            return 
        }
        console.log(`the top element is ${this.top.value}`)
    }
    getsize(){
        console.log(`no of elements is ${this.size}`)
    }
    display(){
        if(!this.top){
            return console.log("no elements to display");
        }
        let current=this.top
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}

const linkStack=new stack

linkStack.push(2)
linkStack.push(33)
linkStack.push(7778)
linkStack.peek()
linkStack.pop()
linkStack.getsize()
linkStack.display()
linkStack.peek()