class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head=null 
        this.size = 0
    }
    prepend(value){
        let node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head = node
        }
    }
    append(value){
        let node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
            let current = this.head
            while(current.next){
                current=current.next
            } 
            current.next=node
        }
        this.size ++
    }

    insert(value,index){
        if(index<0 ||index>this.size){
            console.log("invalid index");
        }
        if(index==0){
            this.head=node
        }else{
            let node = new Node(value)
            let  prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size ++
    }

    insertinfront(target,value){
        let node = new Node(value)
        let current=this.head
        if(target===this.head.value){
            node.next=this.head
            this.head = node
            return
        }
        while(current.next && current.next.value!==target ){
            current =  current.next
        }
        if(!current.next){
            console.log("inavlid target")
        }
        else{
            node.next = current.next
            current.next = node
        }
        this.size ++
    }
    insertafter(target,value){
        let node =new Node(value)
        if(!this.head){
            node.next = this.head
            this.head = node
            return
        }
            let current = this.head
            while(current!==null && current.value!==target ){
                current=current.next
            }
            if(!current){
                console.log("invalid")
            }
            else{
                node.next= current.next
                current.next = node
            }
            this.size ++

    }

    printList(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }

    reverse(){
        let current=this.head
        let prev = null
        let next
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    removeindex(index){
        let current = this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        let target = current.next
         current.next = target.next
        
    }
}

const link = new Linkedlist
link.append(12)
link.prepend(9)
link.append(21)
link.prepend(1)
link.insert(45,2)
link.insertinfront(45,99)
link.insertafter(45,88)
link.reverse()
link.removeindex(2)
link.printList()
