const y ="{{()}[]}"


const valid=(s)=>{
    let stack=[]


    let char={
        "(":")",
        "{":"}",
        "[":"]"
    }

    for(let i=0;i<s.length;i++){
        ch=s[i]
        if(char[ch]){
            stack.push(s[i])
        }else{
            rem=stack.pop()
            if(ch!==char[rem]){
                return false
            }
        }
    }
    return stack.length==0

}

console.log(valid(y));