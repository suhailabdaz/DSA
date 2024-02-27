class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binST{
constructor(){
    this.root=null
}

    insert(value){
        let newNode = new treenode(value)
        if(!this.root){
            this.root=newNode
        }else{
            this.insertnode(newNode,this.root)
        }
    }

    insertnode(newnode,root){
            if(newnode.value<root.value){
                if(root.left==null){
                    root.left=newnode
                }else{
                    this.insertnode(newnode,root.left)
                }
            }else{
                if(root.right==null){
                    root.right=newnode
                }else{
                    this.insertnode(newnode,root.right)
                }
            
        }
    }

    searchnode(value){
        return this.search(this.root,value)
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value<root.value){
                return this.search(root.left,value)
            }else if(root.value<value){
                return this.search(root.right,value)
            }else{
                return true
            }
        }
    }

    preorder(root=this.root){
        if(root){ 
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
        }
    }

    inorder(root=this.root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    postorder(root=this.root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }
    min(node=this.root){
        if(!node.left){
            return node.value
        }
         return this.min(node.left)
    }

    max(node=this.root){
        if(!node.right){
            return node.value
        }
        return this.max(node.right)    
    }


    delete(value){
        this.root=this.deletenode(this.root,value)
    }

    deletenode(root,value){
        if(!root){
            return root
        }
        if(root.value<value){
            return this.deletenode(root.right,value)
        }else if( root.value>value){
            return this.deletenode(root.left,value)
        }else{
            if(!root.left && !root.right){
                return null
            }if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deletenode(root.right,root.value)
        }
        return root
    }
}


const tree=new binST()

tree.insert(3)
tree.insert(1)
tree.insert(2)
tree.insert(99)
tree.insert(0)
tree.insert(109)
tree.delete(2)
// console.log(tree.searchnode(9));
tree.preorder()
// tree.inorder()
// tree.postorder()

// console.log(tree.min());
// console.log(tree.max());

