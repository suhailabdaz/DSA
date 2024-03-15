class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}
class Linkedlkist{
    constructor(){
        this.head=null
        this.size = 0
    }
    isempty(){
        return this.size==0
    }
    prepend(value){
        let node = new Node(value)
        if(!this.isempty()){
            node.next=this.head
        }
        this.head=node
        this.size++
    }
    printlist(){
        if(this.isempty()){
            return  false
        }else{
            let current=this.head
            while(current){
                console.log(current.value);
                current=current.next
            }

        }
    }
    append(value){
        let node = new Node(value)
        if(this.isempty()){
            this.head=node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next=node
        }
        this.size ++
    }
    insert(value,index){
        let node=new Node(value)
        if(this.isempty()){
            this.head=node
        }else{
            let current=this.head
            for(let i=0;i<index-1;i++){
                current= current.next
            }
            node.next=current.next
            current.next = node
        }
        this.size ++
    }
    deletehead(){
        if(this.isempty()){
            return false
        }
        else{
            if(this.size==1){
                this.head=null
            }else{
                this.head=this.head.next
            }
            this.size --
        }
    }
    deleteAtEnd(){
        if(this.isempty()){
            return false
        }
        else{
            if(this.size==1){
                this.head=null
            }else{
                let current=this.head
                while(current.next.next){
                    current=current.next
                }
                current.next=null
            }
            this.size --
        }

    }
    getsize(){
        let count =0
        let current=this.head
        while(current){
            count ++
            current=current.next
        }
        console.log(count)
    }
    reverse(){
        if(this.isempty()){
            return 
        }else{
            if(this.size==1){
                return 
            }else{
                let prev=null
                let current= this.head
                while(current){
                    let next = current.next
                    current.next=prev
                    prev=current
                    current=next
                    this.head=prev
                }
            }
        }
    }
    isCycle(){
        let slow=this.head
        let fast = slow.next
        while(fast && fast.next){
            if(slow==fast){
                return true
            }
            slow=slow.next
            fast = fast.next.next
        }
        return false
    }
    cycle(){
        let res = this.head.next
        res.next = this.head
    }
    middle(){
        let slow=this.head
        let fast = slow
        while(fast&&fast.next&&fast.next.next){
            slow=slow.next
            fast = fast.next.next
        }
        return slow

    }
    sort(){
        let stay=this.head
        while(stay){
            let mover=stay.next
            while(mover){
                if(mover.value<stay.value){
                    let temp=mover.value
                    mover.value=stay.value
                    stay.value=temp
                    
                }
                mover=mover.next

            }
            stay=stay.next
        }
    }
    palindrome(){
        
    }
    duplicate(){
        let current=this.head
        while(current){
            let runner=current
            while(runner.next){
                if(runner.next.value===current.value){
                    runner.next=runner.next.next
                }else{
                runner=runner.next
                }
                }
            current=current.next
        }
    }
}


module.exports={
    Node,Linkedlkist
}