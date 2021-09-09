class Stack {
    constructor() {
        this.top = -1;
        this.items = {}
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value
    }

    pop() {
        const newItems = {}
        Array.from(this.items).forEach(item => newItems.push({
            [`${newItems[item.top]}`]: item.items
        }))
        const popVal = this.items[`${this.top}`]
        delete this.items[this.top]
        this.top -=1;
        return popVal
    }
}

exports.Stack = Stack