class Node {
    constructor(data) {

        this.data = data;
        this.left = null;
        this.right = null;

    }
}

class BinarySurchTree {

    insert(root, value) {

        if (root === null) {
            return new Node(value)
        }

        if (value < root.data) {
            root.left = this.insert(root.left, value)
        } else {
            root.right = this.insert(root.right, value)
        }

        return root;

    }

    inorder(root) {
        if (root === null || root === undefined) return;

        this.inorder(root.left)
        console.log(root.data)
        this.inorder(root.right)

        return root

    }

    surch(root, key) {

        if (root == null) return false;

        if (root.data === key) {
            return true
        }

        if (root.data > key) {
            return this.surch(root.left, key)
        } else {
            return this.surch(root.right, key)
        }

    }

    deleteNode(root, key) {

        if (root == null) return null;

        if (root.data > key) {

            root.left = this.deleteNode(root.left, key)

        } else if (root.data < key) {

            root.right = this.deleteNode(root.right, key)

        } else {

            if (root.left == null) {
                let temp = root.right
                // delete(root)
                return temp
            } else if (root.right == null) {
                let temp = root.left
                // delete (root)
                return temp
            } else {
                let IS = this.getInorderSuccessor(root.right)
                root.data = IS.data;
                root.right = this.deleteNode(root.right,IS.data)
            }

        }

        return root;    

    }

    getInorderSuccessor(root) {
        while (root != null && root.left != null) {
            root = root.left;
        }

        return root; 
    }

}

const arr = [3, 2, 1, 5, 6, 4]
const tree = new BinarySurchTree();
let root = null
key = 1

for (let i = 0; i < arr.length; i++) {
    root = tree.insert(root, arr[i])
}

console.log("\n Before:\n")
tree.inorder(root)

tree.deleteNode(root, 2)

console.log("\n After:\n")
tree.inorder(root)

console.log(tree.surch(root, key))
