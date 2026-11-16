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

}

const tree=new Tries()

words = ['the', 'a', 'there', 'their', 'any']


for (let i = 0; i < words.length; i++){
    tree.create(words[i]);
}