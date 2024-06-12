class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

const stringStack = new Stack<string>();
stringStack.push("Hola");
stringStack.push("Mundo");
stringStack.push("MI_nombre es");
stringStack.push("Johana");

console.log(stringStack.peek()); // Salida: "Johana"
console.log(stringStack.pop()); // Salida: "Johana"
console.log(stringStack.size()); // Salida: 3
console.log(stringStack.isEmpty()); // Salida: false
stringStack.clear();
console.log(stringStack.isEmpty()); // Salida: true