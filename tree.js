class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree{

    constructor() {
        this.idx = -1;
        this.request = []
        // this.front = null
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

    PostOrderTreversal(root) {  //O(n)
        
        if (root == null) return;

        
        this.PostOrderTreversal(root.left);
        this.PostOrderTreversal(root.right)
        console.log(root.data)

    }

    LevelTreversal(root) {  //O(n)
        this.request.push(root);

        while (this.request.length > 0) {
            let current = this.request.shift();
            // this.request.pop()
            console.log(current.data)
            if(current.left!=null) this.request.push(current.left)
            if(current.right!=null) this.request.push(current.right)
        }
    }

    height(root) {

        if (root == null) return 0;

        let leftHight = this.height(root.left)
        let rightHight=this.height(root.right)

        return Math.max(leftHight,rightHight) + 1
    }
    count(root) {

        if (root == null) return 0;

        let leftCount = this.count(root.left)
        let rightCount=this.count(root.right)

        return (leftCount+rightCount) + 1
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
console.log(tree.LevelTreversal(root))

console.log(tree.height(root))
console.log(tree.count(root))
