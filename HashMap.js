//Array of linked list

class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashMap {
    constructor() {
        this.n = 0;   //n-number of nodes
        this.N = 4;   //N-Bucket Length
        this.bucket = new Array(this.N).fill(null);
    }

    HashFunction(key) {
        const strKey = String(key);
        let hash = 0;
        const PRIME = 31;
        for (let i = 0; i < strKey.length; i++) {
            const charCode = strKey.charCodeAt(i);
            hash = (hash * PRIME + charCode) % this.N;
        }
        return hash;
    }

    surchInLL(key, bi) {
        let ll = this.bucket[bi]
        while (ll !== null) {
            if (ll.key == key) {
                return ll
            }
            ll = ll.next;
        }
        return -1
    }

    rehash() {
        const oldbucket = this.bucket
        this.bucket = new Array(this.N*2).fill(null)
        this.n = 0

        for (let i = 0; i < oldbucket; i++){
            let current = oldbucket[i];
            while (current != null) {
                this.put(current.key, current.value);
                current = current.next;
            }
        }
    }

    put(key, value) {
        let bi = HashFunction(key)
        let di = surchInLL(key, bi) //di- data index

        if (di == -1) {   //Key dosen't exist
            const newNode = new Node(key, value, this.bucket[bi])
            this.bucket[bi] = newNode;
            this.n++

        } else {   //key exist
            di.value = value
        }

        const lambda = this.n / this.N;
        const k = 2.0
        if (lambda > k) this.rehash();
    }

}