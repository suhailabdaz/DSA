class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size
    }
    insert(value,index){
    let node=new Node(value)
    if(index>this.size || index<0){
        console.log("invalid index");
        return
    }
    if(index==0){
        node.next=this.head
        this.head=node
        this.size ++
    }
    else{
        current=this.head
        for(let i=0;i<this.size-1;i++){
            current=current.next
        }
node.next=current.next
current.next=node
}


    }
    printlist(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
        
    }
}