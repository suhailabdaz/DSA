var removeElements = function(head, val) {
    let current = head 
    let prev = null
    while(current){
        if(current.val==val){
            if(current==head){
                head=current.next
                current = head
                prev = null
            }else{
                 prev.next=current.next
                 current = prev.next
                 
            }
            
           
            
        }else{
            prev=current
            current = current.next
        }
         

    } 
    return head
};