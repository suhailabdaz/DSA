
array=[2,3,4,5,6]
function sum(n){
for(i=0;i<array.length-1;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]+array[j]==n){
            return console.log(array[i],array[j]); 
        }
    }
}
return console.log("not found");
}
sum(134)