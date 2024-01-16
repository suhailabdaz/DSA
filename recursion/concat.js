let res =""
function concat(arr,i){
     if(i==arr.length){
        return res
     }
     res =res+arr[i]
     return concat(arr,i+1)
}

let arr=["abc","def","suhail"]

const out=concat(arr,0)
console.log(out);

