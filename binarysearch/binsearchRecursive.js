function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,start,end){
    if(start>end){
        return console.log(-1);
    }
    let mid = Math.floor((start+end)/2)

    if(target==arr[mid]){
        return console.log(mid)
    }

    if(target > mid){
        return search(arr,target,mid+1,end)
    }
    else{
        return search(arr,target,start,mid-1)
    }
}

binarySearch([1,2,3,4,5,6],3)