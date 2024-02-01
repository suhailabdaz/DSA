class stack{
    constructor(){
        this.satck=[]

    }

    reverse(str){
        for(let i=0;i<str.length;i++){
            this.satck.push(str[i])
        }
        let newstr=""
        while(this.satck.length>0){
            newstr=newstr+this.satck.pop()
        }
        return newstr
    }
}


const st=new stack()

console.log(st.reverse("hello"));