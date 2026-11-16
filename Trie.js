class Node{
    constructor() {
        this.eow = false;
        this.children={}
    }
}

class Tries{
    constructor() {
        this.root = new Node()
    }
    
    create(words) {
        let currentroot = this.root
        
        if (currentroot == null) {
            return currentroot=new Node()
        }

        for (let char of words) {
            if (currentroot.children[char] == null) {
                currentroot.children[char]=new Node()
            }
            currentroot = currentroot.children[char]
        }
        currentroot.eow = true;


    }

    surch(key) {
        let currentroot = this.root

        for (let char of key) {
            
            if (!currentroot.children[char]) {
                return false
            } 

            currentroot = currentroot.children[char]

        }
        return currentroot.eow === true;
    }

}

const tree=new Tries()

words = ['the', 'a', 'there', 'their', 'any']

for (let i = 0; i < words.length; i++){
    tree.create(words[i]);
}

console.log(tree.surch("any"))
console.log(tree.surch("an"))
console.log(tree.surch("a"))
console.log(tree.surch("the"))
console.log(tree.surch("their"))
console.log(tree.surch("there"))
console.log(tree.surch("bat"))



