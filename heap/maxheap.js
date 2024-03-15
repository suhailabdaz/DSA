class maxheap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.shiftup(this.heap.length-1)
    }

    shiftup(index){
        let currentvalue=this.heap[index]
        let parentindex=Math.floor((index-1)/2)
        let parentvalue=this.heap[parentindex]
        if(index>0&&currentvalue>parentvalue){
            this.heap[index]=parentvalue
            this.heap[parentindex]=currentvalue
            this.shiftup(parentindex)
        }
    }
    getrightchild(value){
        let index=this.heap.indexOf(value)
        let parentindex=2 * index+2
        return this.heap[parentindex]
    }
    getleftchild(value){
        let index=this.heap.indexOf(value)
        let childindex=2 * index+1
        return this.heap[childindex]
    }

    getparent(value){
        let index=this.heap.indexOf(value)
        let parentindex= Math.floor((index-1)/2)
        return this.heap[parentindex]
    }
}

const hp=new maxheap()

hp.insert(8)
hp.insert(90)
hp.insert(2)
hp.insert(1)
hp.insert(9)
console.log(hp.getrightchild(90)
);
console.log(hp.getleftchild(90))

console.log(hp.getparent(8));


console.log(hp.heap);