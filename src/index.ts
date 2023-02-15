

function incrementIndex(index: number, limit: number) {
    return index === limit - 1 ? 0 : index + 1;
}
function decrementIndex(index: number, limit: number) {
    return index === 0 ? limit - 1 : index - 1;
}

/**
 * CircularStack is a generic implementation of a circular buffer data structure.
 * The CircularStack has a fixed capacity and when the stack is full, adding an item will overwrite the oldest item.
 * 
 * @template T - The type of items stored in the CircularStack
 */
export class CircularStack<T> {
    /**
     * An array to store the items in the CircularStack.
     */
    private _storage!: T[];

    /**
     * The index of the topmost item in the CircularStack.
     */
    private _topIndex: number = 0;

    /**
     * The index of the bottommost item in the CircularStack.
     */
    private _bottomIndex: number = 0;

    /**
     * The capacity of the CircularStack, the maximum number of items that can be stored in the buffer.
     */
    private _capacity!: number;

    /**
     * Constructs a new CircularStack with the given capacity.
     * If no capacity is provided, the default capacity is set to 100.
     * 
     * @param {number} [capacity=100] - The capacity of the CircularStack
     */
    constructor(capacity = 100) {
        this._capacity = capacity;
        this._storage = new Array(capacity);
    }

    /**
     * Adds an item to the top of the CircularStack.
     * If the buffer is full, the bottommost item will be overwritten.
     * 
     * @param {T} item - The item to add to the CircularStack
     */
    push(item: T): void {
        this._topIndex = incrementIndex(this._topIndex, this._capacity);
        if (this._topIndex === this._bottomIndex) {
            this._bottomIndex = incrementIndex(this._bottomIndex, this._capacity);
        }
        this._storage[this._topIndex] = item;
    }

    /**
     * Removes and returns the topmost item from the CircularStack.
     * 
     * @returns {(T | undefined)} The topmost item in the CircularStack, or undefined if the buffer is empty
     */
    pop(): T | undefined {
        const item = this._storage[this._topIndex];
        delete this._storage[this._topIndex];
        this._topIndex = decrementIndex(this._topIndex, this._capacity);
        return item;
    }

    clear(): void {
        this._storage = new Array(this._capacity);
        this._topIndex = 0;
        this._bottomIndex = 0;
    }

    /**
     * Returns the topmost item in the CircularStack without removing it.
     * 
     * @returns {(T | undefined)} The topmost item in the CircularStack, or undefined if the buffer is empty
     */
    peek(): T | undefined {
        return this._storage[this._topIndex];
    }

    /**
     * The number of items currently stored in the CircularStack
     */
    get size(): number {
        if (this._topIndex >= this._bottomIndex) return this._topIndex - this._bottomIndex;
        return this._capacity - (this._bottomIndex - this._topIndex) + 1;
    }

    get capacity(): number {
        return this._capacity;
    }
}