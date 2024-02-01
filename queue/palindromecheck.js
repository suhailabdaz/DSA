class queue{
    constructor(){
        this.queue=[1,2,3,2,1]
        this.stack=[]
        this.size=this.queue.length
    }

    ispalindrome(){
        this.stack=[]
        for(let i=0;i<Math.floor(this.size/2);i++){
            this.stack.push(this.queue.shift())
        }

        if(this.size % 2!==0){
            this.queue.shift()
        }

        while(this.queue.length!==0){
            if(this.stack.pop()!==this.queue.shift()){
                return false
            }
        }
        return true
    }
}


const wer=new queue()
console.log(wer.ispalindrome());