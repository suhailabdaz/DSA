
function add(n){
    while(n==0){
        return n
    }
    return n+add(n-1)
}

console.log(add(5))



