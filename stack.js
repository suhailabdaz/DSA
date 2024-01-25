class Stack{
    constructor(){
        this.array=[]
        this.size=0
    }


    push(value){
        this.array[this.size]=value
        this.size ++
    }
    pop(){
        delete this.array[this.size]
    }

    isempty(){
        return this.array.length==0
    }

    getsize(){
        return this.array.length
    }

    peek(){
        return this.array[this.array.length-1]
    }

    print(){
        return this.array
    }
    clear(){
        this.array=[]
    }
}

const stt=new Stack

stt.push(2)
res=stt.peek()
console.log(res);
stt.pop()
hai=stt.isempty()
console.log(hai);
stt.push(8)
ley=stt.print()
console.log(ley);