class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree{

    constructor() {
    this.idx=-1
    }
    
    buildTree(preOrder) {  //O(n)
        
        this.idx++;

        if(preOrder[this.idx]===-1 || preOrder[this.idx]===undefined) return null

        let root = new Node(preOrder[this.idx]);
        root.left = this.buildTree(preOrder)
        root.right = this.buildTree(preOrder)

        return root;

    }

    PreOrderTriversal(root) { //O(n)
    
        if (root === null || root === undefined) return;

        console.log(root.data)
        this.PreOrderTriversal(root.left)
        this.PreOrderTriversal(root.right)


    }

    InOrderTreversal(root) {
        
        if(root===null || root === undefined) return

        this.InOrderTreversal(root.left);
        console.log(root.data)
        this.InOrderTreversal(root.right)

    }

    PostOrderTreversal(root) {
        
        if (root == null) return;

        
        this.PostOrderTreversal(root.left);
        this.PostOrderTreversal(root.right)
        console.log(root.data)

    }

    LevelTreversal(root) {
        
    }

}

const preOrder = [1, 2, -1,-1,3, 4, -1, -1, 5, -1, -1];
const tree = new BinaryTree();
const root = tree.buildTree(preOrder);

console.log("The ROOT value is : ",root.data)
console.log("The LEFT value is : ",root.left.data)
console.log("The RIGHT value is : ", root.right.data)

console.log(tree.PreOrderTriversal(root))
console.log(tree.InOrderTreversal(root))
console.log(tree.PostOrderTreversal(root))
