class heap{
    constructor(){
        this.heap=[]
    }

    getleftindex(index){
        return 2*index+1
    }

    getrightinde(index){
        return 2*index+2
    }
    getparent(index){
        return (index-1)/2
    }

    heapify(arr){
        this.heap=arr
        let index=getparent(this.heap.length-1)
        for(let i=index;i>=0;i--){
            this.buildminheap(i)
        }
    }

    remove(){
        if (this.heap.length == 0) {
            return
        }
        const root = this.heap[0]
        this.swap(0,this.heap.length-1)
        this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    heapifyDown(i) {
        let endIndex = this.heap.length - 1
        let leftIndex = this.getLeftIndex(i)
        let indexToShift;
        while (leftIndex <= endIndex) {
            let rightIndex = this.getRightIndex(i)
            if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
                indexToShift = rightIndex
            }
            else {
                indexToShift = leftIndex
            }
            if (this.heap[i] > this.heap[indexToShift]) {
                this.swap(i, indexToShift)
                i = indexToShift
                leftIndex = this.getLeftIndex(i)
            }
            else {
                return
            }
        }
    }
    }
    function minHeapSort(arr){
        for(var i=Math.floor(arr.length/2)-1;i>=0;i--){
            minHeap(arr,arr.length,i)
        }
    
        function minHeap(arr,n,i){
            let largest=i
            let left=2*i+1
            let right=2*i+2
    
            if(left < n && arr[left] > arr[largest]){
                largest=left
            }
    
            if(right < n && arr[right] > arr[largest]){
                largest=right
            }
            if (largest !== i) {
                [arr[i], arr[largest]] = [arr[largest], arr[i]];
                minHeap(arr, n, largest);
            }
        }
        for (let i = arr.length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            minHeap(arr, i, 0);
        }
        return arr;
 }
