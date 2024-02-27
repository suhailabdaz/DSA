class trienode{
    constructor(){
        this.children={}
        this.endof=false
    }
}

class trie{
    constructor(){
        this.root=new trienode()
    }

    insert(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new trienode()
            }
            node=node.children[char]
        }
        node.endof=true
        console.log(word+"=>inserted");
    }

    check(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.endof
    }

    delete(word){
        this.deletehelper(this.root,word,index=0)
    }

    deletehelper(node,word,index){
        if(word.length==index){
            if(!node.endof){
                return
            }
            node.endof=false
            
            return Object.keys(node).length==0
        }
        let char=word[index]
        if(!node.children[char])return 
        let nodetodelete=this.deletehelper(node.children[char],word,index+1)
        if(nodetodelete){
            delete node.children[char]
            return Object.keys(node).length==0
        }
        return false 

}
}


const tr=new trie()
tr.insert("apple")
tr.insert("apal")
console.log(tr.check("app"));