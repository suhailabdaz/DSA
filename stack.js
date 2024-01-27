class stack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    push(value){
        this.q1.push(value)

        if(this.q2.legnth>0){
            this.q1.push(this.q2.slice)
        }


        [this.q1,this.q2]=[this.q2,this.q1]
    }
}