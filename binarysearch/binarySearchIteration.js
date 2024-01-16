let arr=[2,3,4,5]

target = 4

start = 0
end = arr.length-1

while(start<end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid]===target){
        return console.log(mid)
    }
    else if(target>arr[mid]){
        start=mid+1
    }
    else{
        end=mid-1
    }
}

function binarysearch(array,target){
    let start = 0
    let end  = array.length-1
    while(start<end){
        let mid = Math.floor((start+end)/2)
        if(array[mid]==target){
            return console.log(mid)
        }
        else if(array[mid]>target){
            start=mid+1
        }else{
            end = mid-1
        }
    }
    return console.log(-1);
}

binarysearch([2,3,4,5],3)