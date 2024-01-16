class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    fromArray(arr){
        if(arr.length==0){
            return -1
        }
             this.head = new Node(arr[0])
            let current = this.head
            for(let i=1;i<arr.length;i++){
                current.next=new Node(arr[i])
                current=current.next
            }
    }
    printLinkedList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    toArray(){
        let arr=[]
        let current=this.head
        while(current){
            arr.push(current.value)
            current = current.next
        }
        return arr
    }
}

const link = new LinkedList
let array = [1,2,3,4]
link.fromArray(array)
link.printLinkedList()
const res=link.toArray()
console.log(res);


