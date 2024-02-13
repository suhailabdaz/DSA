class treenode{
    constructor(value){
        this.value=value
        this.children=[]
        this.size=0
    }

    addchild(node){
        this.children[this.size]=node
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
            let parentnode=searchnode(this.root,parentvalue)
            if(!parentnode){
                console.log("no parentnode available")
                return
            }
            parentnode.addchild(node)
        }
    }

    searchnode(node,value){
        if(!node) return null
        if(node.value == value) return node
        for(const child of node.children){
            nodetoselect=this.searchnode(child,value)
            if(nodetoselect)return nodetoselect
        }
    }
}