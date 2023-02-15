import { CircularStack } from './index.js';

describe('CircularStack', () => {
    let stack: CircularStack<number>;

    beforeEach(() => {
        stack = new CircularStack<number>(3);
    });

    it('should be empty when created', () => {
        expect(stack.size).toBe(0);
    });

    it('should tell correct capacity', () => {
        expect(stack.capacity).toBe(3);
    });

    it('should add an item to the top of the stack', () => {
        stack.push(1);
        expect(stack.size).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it('should remove the topmost item from the stack', () => {
        stack.push(1);
        stack.push(2);
        const item = stack.pop();
        expect(item).toBe(2);
        expect(stack.size).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it('should overwrite the bottommost item when the stack is full', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.size).toBe(3);
        expect(stack.peek()).toBe(4);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBeUndefined();
    });

    it('should return undefined when trying to remove from an empty stack', () => {
        expect(stack.pop()).toBeUndefined();
    });

    it('should return undefined when trying to peek at an empty stack', () => {
        expect(stack.peek()).toBeUndefined();
    });

    it('should clear all elements from the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.size).toBe(3);
        stack.clear();
        expect(stack.size).toBe(0);
    });
});
