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
        else{
            this.insertnode(newnode,this.root)
        }
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
    
    search(value,root=this.root){
        if(root==null){
            return false
        }
        else{
            if(value==root.value){
                return root
            }else if(value<root.value){
                return this.search(value,root.left)
            }else{
                return this.search(value,root.right)
            }
        }
    }

    delete(value){
        this.root=this.deletenode(this.root,value)
    }
    deletenode(node,value){
        if(!node){
            return node
        }
        if(value<node.value){
            node.left= this.deletenode(node.left,value)
        }else if(value> node.value){
            node.right= this.deletenode(node.right,value)
        }else{
            if(!node.left && !node.right){
                return null
            }else if(!node.left){
                return node.right
            }else if(!node.right){
                return node.left
            }
            const minValue = this.min(node.right);
            node.value = minValue;
            node.right = this.deletenode(node.right, minValue);
        }
        return node
    }

    min(node=this.root){
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    max(node=this.root){
        if(!node.right){
            return node.value
        }
        return this.max(node.right)
    }

    inorder(node=this.root){
        if(node){
            this.inorder(node.left)
            console.log(node.value);
            this.inorder(node.right)
        }
    }

    preorder(node=this.root){
        if(node){
            console.log(node.value);
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node=this.root){
        if(node){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value);
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

    predecessor(value){
        let node=this.search(value)
        if(!node){
            return null
        }
        if(node.left){
            node=node.left
            while(node.right){
                node=node.right
            }
            return  node
        }

        let ancestor=this.root
        let predecessor=null
        while(node!==ancestor){
            if(node.value<ancestor.value){
                ancestor=ancestor.left
            }else{
                predecessor=ancestor
                ancestor=ancestor.right
            }
        }
        return predecessor
    }

    successor(value){
        let node=this.search(value)
        if(!node)return null
        if(node.right){
            node=node.right
            while(node.left){
                node=node.left
            }
            return node
        }

        let ancestor=this.root
        let successor=null
        while(node!==ancestor){
            if(node.value>ancestor.value){
                ancestor=ancestor.right
            }else{
                successor=ancestor
                ancestor=ancestor.left
            }
        }
        return successor
    }

    commonancestor(value1,value2,root=this.root){
        let node1=this.search(value1)
        let node2=this.search(value2)
        if(!node1 || !node2){
            return null
        }
        if(!root||node1==root || node2==root ){
            return root
        }

        let left=this.commonancestor(value1,value2,root.left)
        let right=this.commonancestor(value1,value2,root.right)

        if(left && right){
            return root
        }

        return left?left :right
    }

    validate(root=this.root){
        if(!root){
            return true
        }
        if(root.left && this.max(root.left)>=root.value){
            return false
        }
        if(root.right && this.min(root.right)<root.value){
            return false
        }
        if(!this.validate(root.left) || !this.validate(root.right)){
            return false
        }
        return true
    }

    depth(value, root = this.root, depth = 0) {
        if (!root) {
            return -1;
        }
        let node = this.search(value);
        if (!node) {
            return -1;
        }
        if (root === node) {
            return depth;
        }
        return Math.max(
            this.depth(value, root.left, depth + 1),
            this.depth(value, root.right, depth + 1)
        );
    }
    

    height(value){
        let node=this.search(value)
        if(!node){
            return -1
        }
        return this.heighthelper(node)
    }

    heighthelper(node){
        if(!node){
            return -1
        }
        return 1+Math.max(this.heighthelper(node.left),this.heighthelper(node.right))
    }
}


const tree=new bst

tree.insert(10)
tree.insert(4)
tree.insert(18)
tree.insert(1)
tree.insert(23)
tree.insert(-7)
tree.insert(6)
tree.insert(3)
tree.insert(2)
// console.log(tree.predecessor(23));
// console.log(tree.successor(23));
// tree.delete(4)
// tree.inorder()
// console.log("//////");
// tree.preorder()
// console.log("//////");
// tree.postorder()
// console.log("//////");
// tree.levelorder()

// console.log(tree.commonancestor(4,23));

// console.log(tree.validate());

console.log(tree.depth(4));