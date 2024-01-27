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

    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
    }

    pop(){
    this.top=this.top.next
        }

        peek(){
            return this.top.value
        }


}

const st=new stack

st.push(2)
res=st.peek()
console.log(res);