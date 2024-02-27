class treenode{
    constructor(value){
        this.value=value
        this.children=[]
    }

    addchild(value){
        const newnode=new treenode(value)
        this.children.push(newnode)
    }
}

class treeds{
    constructor(){
        this.root=null
    }


    insert(value,parent){
        const node=new treenode(value)
        if(!this.root){
            this.root=node
        }else{
            let parentnode=this.searchnode(parent,this.root)
            if(parentnode){
                parentnode.addchild(node)
            }else{
                console.log("no parent node found");
            }
        }
    }

    searchnode(value,node){
        if(!node){
            return null
        }if(node.value===value)return node
        for(const child of node.children){
            let nodefound = this.searchnode(value,child)
            if(nodefound){
                return nodefound
            }
        }
        return null
    }

    delete(value){
        if(!this.root){
            console.log("no root found");
        }if(this.root.value==value){
            this.root=null
        }else{
            this.deletenode(value,this.root)
        }
    }
    deletenode(value,node){
        node.children=node.children.filter(child=>child.value!==value)
        for(const child of node.children){
            this.deletenode(value,child)
        }
    }
}


const tr=new treeds()

tr.insert(5)
tr.insert(3,5)
tr.insert(45,5)
tr.delete(3)
console.log(tr.root.children);