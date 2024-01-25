class Hash{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            bucket=[[key,value]]
            this.table[index]=bucket
    }else{
        const sameKeyelement=bucket.find(item=>item[0]===key)
        if(sameKeyelement){
            sameKeyelement[1]=value
        }else{
            bucket.push([key,value])
        }
    }
    }

    get(key){
        let index=this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            const sameKeyelement=bucket.find(item=>item[0]===key)
            if(sameKeyelement){
                return sameKeyelement[1]
            }
        }
        return undefined
    }

    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            const sameKeyelement=bucket.find(item=>item[0]===key)
            if(sameKeyelement){
                bucket.splice(bucket.indexOf(sameKeyelement),1)
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i])
            console.log(i,this.table[i])
        }
    }
}

const newhash = new Hash(30)

newhash.set("abc","suhail")
newhash.set("def","dumbachi")
newhash.set("efd","hello")
newhash.set("efd","hoola")
// newhash.remove('def')
newhash.display()
