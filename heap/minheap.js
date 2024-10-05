class minheap{
    constructor(){
        this.heap=[]
    }


    insert(value){
        this.heap.push(value)
        this.shiftup(this.heap.length-1)
    }
    shiftup(index){
        let currentvalue=this.heap[index]
        let parentindex=Math.floor((index-1)/2);
        let parentvalue=this.heap[parentindex]
        if(index>0&& currentvalue<parentvalue){
            this.heap[parentindex]=currentvalue
            this.heap[index]=parentvalue
            this.shiftup(parentindex)
        }
    }
}

const newheap=new minheap()

newheap.insert(1)
newheap.insert(-1)
newheap.insert(3)
newheap.insert(-93)



console.log(newheap.heap);