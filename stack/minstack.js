class stack{
    constructor(){
        this.satck=[]
        this.minstack=[]
    }

    push(value){
        this.satck.push(value)
        if(this.minstack.length==0 || value <=this.minval()){
            this.minstack.push(value)
        }
    }

    pop(){
        let popval=this.satck.pop()
        if(popval==this.minstack[this.minstack-1]){
            this.minstack.pop()
        }
    }
    peek(){
        return this.satck[this.satck.length-1]
    }
    minval(){
        return this.minstack[this.minstack.length-1]
    }
}

const thestack= new stack()
thestack.push(2)
thestack.push(-1)
thestack.push(89)
thestack.pop()
console.log(thestack.minval());