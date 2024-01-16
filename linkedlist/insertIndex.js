class Node{
    constructor(value){
        this.value= value
        this.next= null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
    return this.size==0
    }

    printList(){
    let current=this.head
    while(current!==null){
        console.log(current.value);
        current=current.next
    }
    }

    prepend(value){
    let node = new Node(value)
    if(this.isEmpty()){
        this.head=node
    }
    else{
        node.next=this.head
        this.head= node
    }
    this.size ++
    }

    append(value){
    let node = new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        let prev= this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next=node
    }
    this.size ++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            console.log("invalid index")
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size ++
    }
}

const link=new LinkedList()

link.prepend(2)
link.prepend(1)
link.append(3)
link.insert(9,1)
link.insert(56,1)

link.printList()