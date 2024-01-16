class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size = 0
        this.tail = null
    }


    insert(value,index){
        let node = new Node(value)
        if(index<0 || index>this.size){
            console.log("invaldi");
            return
        }
        
    }
}

