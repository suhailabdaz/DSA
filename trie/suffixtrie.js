class trienode{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class suffixtree{
    constructor(){
        this.root=new trienode()
    }

    insert(word){
        for(let i=0;i<word.length;i++){
            this.builtsuffixtrie(word.substring(i))
        }
    }

    builtsuffixtrie(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new trienode()
            }
            node=node.children[char]
        }
        node.endof=true
    }

    containsSuffix(word){
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
}

const tr=new suffixtree()

tr.insert("apple");
console.log(tr.containsSuffix("ppleeee") );
