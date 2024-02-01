class rpn{
    constructor(){
        this.stack=[]
    }

    poland(arr){
        for(let i=0;i<arr.length;i++){
            let s=arr[i]
            if(!isNaN(s)){
                this.stack.push(arr[i])
            }else{
                let a=parseInt(this.stack.pop())
                let b=parseInt(this.stack.pop())
                if(s=="+"){
                    this.stack.push(a+b)
                }else if(s=="-"){
                    this.stack.push(a-b)
                }else if(s=="*"){
                    this.stack.push(a*b)
                }
            }
        }
        return this.stack[0]
    }
}


const notation=new rpn()

console.log(notation.poland(["1","2","+","3","*"]));