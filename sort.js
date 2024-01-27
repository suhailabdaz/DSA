const arr=[0,88,-1,1]

const bubble=(arr)=>{
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true
            }
        }
    }while(swapped)
    return arr
}

const selection=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!=i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}

const insertion=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let key=arr[i]
        j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}

const quick=(arr)=>{
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftArray=[]
    let rightArray=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    return [...quick(leftArray),pivot,...quick(rightArray)]
}


const mergesort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftArray=arr.slice(0,mid)
    let rightArray=arr.slice(mid)
    return merge(mergesort(leftArray),mergesort(rightArray))
}
const merge=(leftArray,rightArray)=>{
    let sortedArray=[]
    while(leftArray.length&&rightArray.length){
        if(leftArray[0]<rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}

console.log(mergesort(arr));