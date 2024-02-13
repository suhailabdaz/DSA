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

    isEmpty(){
        return this.root==null
    }

    insert(value){
        const newNode= new treenode(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertnode(this.root,newNode)
        }
    }

    insertnode(parent,newNode){
        if(newNode.value<parent.value){
            if(parent.left==null){
                parent.left=newNode
            }else{
                this.insertnode(parent.left,newNode)
            }
        }else{
            if(parent.right==null){
                parent.right=newNode
            }else{
                this.insertnode(parent.right,newNode )
            }
        }
    }

    
    
    searchnode(root,value){
        if(!root){
            return false
        }
        else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.searchnode(root.left,value)
            }else{
                return this.searchnode(root.right,value)
            }
        }
    }
    
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }

    levelorder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }if(curr.right){
                queue.push(curr.right)
            }
        } 
    }

    min(root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }

    max(root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }

}


const tree=new bst()

tree.insert(1)
tree.insert(3)
tree.insert(-1)
tree.insert(2)
tree.insert(10)

// tree.postorder(tree.root)

// tree.levelorder()
console.log(tree.min(tree.root));
console.log(tree.max(tree.root));

// console.log(tree.searchnode(tree.root,-99));