class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prime=[]
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


    reverse(current){
        if(current ==null&& current.next==null){
            return current
        }
        return this.reverse(current.next)
    }
    head(){
        return this.head
    }
    


}

const st=new stack

st.push(1)
st.push(2)
st.push(3)
re=st.head()

res=st.reverse(re)
console.log(res);