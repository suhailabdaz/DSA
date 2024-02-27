class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

    insert(value,root=this.root){
        const newnode=new treenode(value)
        if(!this.root){
            this.root=newnode
        }else{
            if(value<root.value){
                if(!root.left){
                    root.left=newnode
                }else{
                    this.insert(value,root.left)
                }
            }else{
                if(!root.right){
                    root.right=newnode
                }else{
                    this.insert(value,root.right)
                }
            }
        }
    }

    secondmin(root=this.root)
{
    if(root.left){
        this.secondmin(root.left)
        return root.value
    }
}}