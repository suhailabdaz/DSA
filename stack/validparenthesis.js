class parenthesisStack{
    constructor(){
        this.stack=[]
        this.object={
            "(":")",
            "{":"}",
            "[":"]"
        }
    }
    isvalid(string){
        for(let i=0;i<string.length;i++){
            if(this.object[string[i]]){
                this.stack.push(string[i])
            }else{
                if(string[i]!==this.object[this.stack.pop()]){
                    return false
                }
            }
        }
        return this.stack.length==0
    }
}

const check=new parenthesisStack()
let arr="((){})"
console.log(check.isvalid(arr));