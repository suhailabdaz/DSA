class treenode{
    constructor(value){
        this.value=value
        this.children=[]
        this.size=0
    }

    addchild(node){
        this.children[this.size]=node
        this.size ++
    }
}

class tree{
    constructor(){
        this.root=null
    }

    insert(value,parentvalue=null){
        const node=new treenode(value)
        if(!this.root){
            this.root=node
        }else{
            let parentnode=this.searchnode(this.root,parentvalue)
            if (parentnode){
                parentnode.addchild(value)
            }else{
                console.log("no parentnode found")
            }
        }
    }

    searchnode(node,value){
        if(!node)return null
        if(node.value==value)return node
        for(const child of node.children){
            let nodefound=this.searchnode(child,value)
            if(nodefound)return nodefound
        }
        return null
    }

    delete(value){
        if(!this.root){
            console.log("root not found")
            return
        }if(this.root.value==value){
            this.root=null
            return
        }
        this.deleteNode(this.root,value)
    }

    deleteNode(node, value) {
        node.children = node.children.filter(child => child.value !== value);
        for (const child of node.children) {
            this.deleteNode(child, value);
        }
    }
}


const newtree=new tree()
newtree.insert(2)
newtree.insert(1,2)
newtree.insert(3,2)
newtree.delete(1)

console.log(newtree.root);



