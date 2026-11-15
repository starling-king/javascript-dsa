class Node{

    constructor() {
        
        this.childern=[]
        this.eow=false;


    }

}

class Trie {

    insert(root,word) {     //O(L)
        
        // let root = root;
        
        for (let i = 0; i < word.length; i++){
            let char = word[i];

            if (root.childern[char] == null) {
                root.childern[char] = new Node();
            }

            if (i == word.length - 1) {
                root.eow = true;
            }

            root = root.childern[char]
        }

        // root.eow = true;

    }

    search(root, key) {
        
        for (let i = 0; i < key.length; i++){
            
            let idx = key[i];

            if (root.childern[idx] == null) {
                return false
            }

            if (i == key.length - 1 && root.childern[idx].eow==false) {
                return false;
            }

        }

        return true

    }

}


const arr = ['The', 'a','there','their','any']
const root = new Node()
const myTrie = new Trie();

for (let word of arr) {
    myTrie.insert(word, root);
}

console.log(myTrie.search(root,'there'));
console.log(myTrie.search(root,'a'));
console.log(myTrie.search(root,'an'));
console.log(myTrie.search(root,'thor'));