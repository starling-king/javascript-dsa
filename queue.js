class RequestQueue {
    constructor() {
        this.requests = [];
    }

   
    enqueue(request) {
        this.requests.push(request);
        console.log(`Added to queue: ${request}`);
    }

    
    dequeue() {
        if (this.requests.length === 0) return "Queue is empty";

        
        const currentRequest = this.requests.shift();
        return `Processing: ${currentRequest}`;
    }


    peek() {
        if (this.requests.length === 0) return null;
        return this.requests[0];
    }
}


const apiQueue = new RequestQueue();
apiQueue.enqueue("User Login");
apiQueue.enqueue("Fetch Database");
apiQueue.enqueue("Process Payment");

console.log(apiQueue.dequeue()); 
console.log(apiQueue.dequeue()); 