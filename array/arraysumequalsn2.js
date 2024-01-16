array=[4,7,4,5,6]

let set = new Set(array)

function sum(n){
    for(i=0;i<array.length;i++){
        if(set.has(n-array[i])){
            return console.log(`${n-array[i]}`,array[i]);
        }
    }
    return console.log("not found");
}

sum(10) 