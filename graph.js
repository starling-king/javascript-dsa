class Graph {
    constructor(V) {
        this.V = V;
        this.li = Array.from({ length: V }, () => [])

    }

    addEdge(u, v) {
        this.li[u].push(v)  //directed: single line among them 
        this.li[v].push(u)
    }

    print() {
        let c = this.V
        for (let i = 0; i < c; i++) {
            let line = `${i} : `;

            for (let neigh of this.li[i]) {
                line += `${neigh} `;
            }
            console.log(line);
        }
    }

    BFStreversal() {
        let Q = []
        let vis = new Array(this.V).fill(false);

        Q.push(0);
        vis[0] = true;

        let line = ''

        while (Q.length > 0) {
            let u = Q.shift()
            line+=`${u} `

            for (let v of this.li[u]) {
                if (!vis[v]) {
                    vis[v] = true;
                    Q.push(v)
                }
            }
        }
        console.log(line)
    }

}

const graph = new Graph(5)

graph.addEdge(0, 1)
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 3)
graph.addEdge(2, 4)

// graph.print()
graph.BFStreversal()
