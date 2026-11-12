class HistoryStack {
    constructor() {
        this.actions=[]
    }

    executeAction(action) {
        this.actions.push(action)
        console.log(`Executed ${action}`)
    }

    undo() {
        if(this.actions.length==0) return "Nothing to undo"

        const lastaction = this.actions.pop()
        return `Undoint ${lastaction}`
    }

    peek() {
        if (this.actions.length == 0) return null;
        return this.actions[this.actions.length -1]
    }

}

const canvasHistory = new HistoryStack();
canvasHistory.executeAction("Add 'left-target-1' Node");
canvasHistory.executeAction("Connect Node to MongoDB");
canvasHistory.executeAction("Change color to red");

console.log(canvasHistory.undo()); 
console.log(canvasHistory.undo()); 