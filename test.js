class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class stack{
    constructor(){
        this.stack=[]
        this.top=null
    }

    push(value){
        const newnode=new Node(value)
        if(!this.top){
            this.top=newnode
        }else{
            newnode.next=this.top
            this.top=newnode
        }
    }

    pop(){
        this.top=this.top.next
    }

    peek(){
        return this.top.value
    }

    reverse(){
        this.reverseuntil(this.top)
    }

    reverseuntil(current,prev=null){
        if(!current){
            return current
        }
        let next = current.next
        current.next = prev
        return this.reverseuntil(next,current)
    }
}
const isprime=(num)=>{
    if(num<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i ==0){
            return false
        }
    }
    return true


}

const printPrimes=(newstack)=>{
    let current=newstack.top
    let res=""
    while(current){
        if(isprime(current.value)){
            res=res+current.value+" "
        }
        current=current.next
    }

    console.log(res)
}

const stackop=new stack()

stackop.push(5)
stackop.push(8)
stackop.push(6)
stackop.push(3)
printPrimes(stackop)
stackop.reverse(stackop.top)
console.log(stackop.peek()); 

