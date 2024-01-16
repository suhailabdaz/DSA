let arr=[1,2,3,4,5]

let target = 3

for(let i=0;i<arr.length-1;i++){
    if(arr[i]===target){
        console.log(i)
        break;
    }
}