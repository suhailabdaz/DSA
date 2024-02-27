class treenode{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

    insert(value){
        const newnode=new treenode(value)
        if(!this.root){
            this.root=newnode
            return
        }
        this.insertnode(newnode,this.root)
    }

    insertnode(node,parent){
        if(node.value<parent.value){
            if(parent.left==null){
                parent.left=node
            }else{
                this.insertnode(node,parent.left)
            }
        }else{
            if(parent.right==null){
                parent.right=node
            }else{
                this.insertnode(node,parent.right)
            }
        }
    }

    searchnode(value){
        return this.search(value,this.root)
    }

    search(value,parent){
        if(!parent){
            return false
        }
        else if(parent.value==value){
            return true
        }
        else if(value<parent.value){
            return this.search(value,parent.left)
        }else{
            return this.search(value,parent.right)
        }
    }

    preorder(node=this.root){
        if(node){
            console.log(node.value);
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    inorder(node=this.root){
        if(node){
            this.inorder(node.left)
            console.log(node.value);
            this.inorder(node.right)
            
        }
    }
    postorder(node=this.root){
        if(node){
        this.postorder(node.left)
        this.postorder(node.right)
        console.log(node.value);
        }
    }

    bfs(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let current=queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    min(root=this.root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root=this.root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root= this.deletenode(value,this.root)
    }
    deletenode(value, root) {
    if (!root) {
        return root;
    }

    if (value < root.value) {
        root.left = this.deletenode(value, root.left);
    } else if (value > root.value) {
        root.right = this.deletenode(value, root.right);
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deletenode(root.value, root.right);
    }
    return root;
}

}

const tree=new bst()

tree.insert(2)
tree.insert(1)
tree.insert(5)
tree.insert(-1)
tree.insert(8)
tree.insert(4)
tree.delete(5)
tree.preorder()

