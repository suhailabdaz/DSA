class graph{
    constructor(){
        this.adjacencylist={}
    }

    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.adjacencylist[vertex1]=new Set() 
        }
        if(!this.adjacencylist[vertex2]){
            this.adjacencylist[vertex2]=new Set()
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)

    }

    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex +"=>"+[...this.adjacencylist[vertex]]);
        }
    }

    hasedge(vertex1,vertex2){
        return this.adjacencylist[vertex1].has(vertex2)&&this.adjacencylist[vertex2].has(vertex1)
    }

    removeedge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }

    removevertex(vertex){
        for(let ver of this.adjacencylist[vertex] ){
            this.removeedge(ver,vertex)
        }
        delete this.adjacencylist[vertex]
    }

    dfs(startingVertex){
        const result=[]
        const visited={}

        const dfshelper=(vertex)=>{
            if(!vertex){
                return null
            }
            visited[vertex]=true
            result.push(vertex)
            this.adjacencylist[vertex].forEach(connection => {
                if(!visited[connection]){
                    return dfshelper(connection)
                }
            });
        }
        dfshelper(startingVertex)
        return result
    }

    bfs(startingVertex){
        const queue=[startingVertex]
        const visited={}
        const result=[]

        visited[startingVertex]=true
        while(queue.length){
            let currentvertex=queue.shift()
            result.push(currentvertex)
            this.adjacencylist[currentvertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    queue.push(neighbour)
                }
            })
        }
        return result
    }

}

const gr=new graph()

gr.addVertex("A")
gr.addVertex("B")
gr.addEdge("A","B")
gr.addEdge("A","C")
gr.addEdge("2","A")
// gr.removeedge("A","C")
// gr.removevertex("C")
console.log(gr.bfs("A")
);
// console.log(gr.hasedge("A","B"));
