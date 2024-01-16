function reverse(str,i=str.length,res=''){
    if(i==0){
    return res;
    }
    res+=str[i-1]
    return reverse(str,i-1,res);
}

let str="00123";
const rev = reverse(str);
console.log(rev);

