class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

const root=new treenode(1)
const leftnode=new treenode(2)
const rightnode=new treenode(3)
const leftchildnode=new treenode(4)
const rightchildnode=new treenode(5)
const leftchildnodeleaf=new treenode(6)
const rightchildnodeleaf=new treenode(7)

root.left=leftnode
root.right=rightnode
leftnode.left=leftchildnode
leftnode.right=rightchildnode
rightnode.left=leftchildnodeleaf
rightnode.right=rightchildnodeleaf

console.log(root);
