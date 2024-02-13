class stack{
    constructor(){
        this.stack=[]
        this.top=0
    }


    push(value){
        this.stack[this.top]=value
        this.top ++
    }

    pop(){
        if(this.stack.length==0){
            console.log("stack already empty")
        }else{
            this.stack[this.top]==null
            this.top --
        }
    }
    peek(){
        if(this.stack.length==0){
            console.log("No elements")
        }else{
            return this.stack[this.top-1]
        }
    }
}

const st=new stack()

st.push(7)
st.push(8)
st.pop()
console.log(st.peek());

let queue=[]
let front=-1
let rear=-1
const enqueue=(value)=>{
    rear++
    queue[rear]=value
    size
}