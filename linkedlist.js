class Node{
    constructor(value) {
        this.value = value
        this.next=null
    }
}

class Linkedlist{
    constructor() {
        this.head = null;
    }

    append(value) {
        const newnode = new Node(value)
        
        if (!this.head) {
            this.head = newnode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current=current.next
        }

        current.next=newnode
        
    }

    find(value) {
        let current = this.head

        while (current) {
            if (current.value == value) return current;
            current = current.next
        }
        return null;
    }

    update(oldvalue, newvalue) {
        let nodeToupdate = this.find(oldvalue)

        if (nodeToupdate) {
            nodeToupdate.value = newvalue;
            return true;
        } 
        return false
    }

    remove(value) {

        if (!this.head) return;

        if (this.head.value == value) {
            this.head=this.head.next
            return;
        }

        let current = this.head
        
        while (current.next && current.next.value !== value) {
            current = current.next
        }

        if (current.next) {
            current.next=current.next.next
        }

    }

}

const mySystem = new Linkedlist()

mySystem.append('Task A')
mySystem.append('Task B')

mySystem.update('Task B','urgent Task B')

mySystem.remove('Task A')

console.log(mySystem.find('urgent Task B'))