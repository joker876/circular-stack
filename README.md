# circular-stack
![npm](https://img.shields.io/npm/v/circular-stack?label=version) ![NPM](https://img.shields.io/npm/l/circular-stack) ![npm bundle size](https://img.shields.io/bundlephobia/min/circular-stack)

A fixed-size auto-overwriting stack implementation.

## Highlights
* Supports TypeScript!
* Supports Node and browser
* Includes full JSDoc documentation
* Very lightweight!
* Contains tests


## Installation
### NodeJS
```
npm install circular-stack --save
```

### Browser
Import the script:
```html
<script src="https://joker876.github.io/circular-stack/circular-stack.min.js">
```
And import the class from a global object:
```js
new CircularStack.CircularStack(/* capacity */);
```

## Usage

```typescript
import CircularStack from 'circular-stack';
```

### Constructor
```typescript
new CircularStack<T = any>(capacity: number);
```
CircularStack constructor takes the stack's maximum capacity as its only argument. Capacity is optional, and defaults to `100`.

The type of the elements can also be specified explicitly. The default type is `any`.

```typescript
const stack = new CircularStack(50);
// or with specified type
const stack = new CircularStack<number>(50);
```

### Members

* `size` - the amount of elements on the stack.
* `capacity` - the meximum number of elements on the stack. Exceeding this value will cause the elements to be overwritten when pushed.

### Methods
#### push
```typescript
stack.push(item: T): void
```
Pushes a new item onto the stack.

If the size of the stack reaches the capacity, it overwrites the oldest item.

```typescript
stack.push(5);
```

#### pop
```typescript
stack.pop(): T | undefined
```
Removes the top element on the stack, and returns it.

If the stack is empty, returns `undefined`.

```typescript
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // >>>>> 3
stack.pop(); // >>>>> 2
stack.pop(); // >>>>> 1
stack.pop(); // >>>>> undefined
```

#### peek
```typescript
stack.peek(): T | undefined
```
Returns the top element of the stack without removing it.

If the stack is empty, returns `undefined`.

```typescript
stack.push(1);
stack.peek(); // >>>>> 1
stack.peek(); // >>>>> 1
```

#### clear
```typescript
stack.clear(): void
```
Clears all elements from the stack.

```typescript
stack.push(1);
stack.push(2);
stack.push(3);
stack.clear();
stack.peek(); // >>>>> undefined
```
