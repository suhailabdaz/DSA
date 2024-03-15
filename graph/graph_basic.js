class graph{
    constructor(){
        this.adjacencyList={}
    }

    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1]=new Set()
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2]=new Set()
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }

    display(){
        for(const vertex in this.adjacencyList){
            console.log(vertex+"=>",[...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex2].has(vertex1) &&
                this.adjacencyList[vertex1].has(vertex2))
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let ver of this.adjacencyList[vertex]){
            this.removeEdge(ver,vertex)
        }
        delete this.adjacencyList[vertex]
    }
}


const graphone=new graph()

graphone.addvertex("A")
graphone.addEdge("A","C")
graphone.addEdge("A","B")
graphone.removeVertex("B")
graphone.display()
// console.log(graphone.hasEdge("B","C"));