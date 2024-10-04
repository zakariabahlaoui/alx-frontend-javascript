# ALX FrontEnd — ES6 classes

0x02. ES6 classes

`OOP`
`JavaScript`
`ES6`

## 1. Defining a Class

In ES6, a class can be defined using the class keyword.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## 2. Adding Methods to a Class

Methods are added directly within the class definition.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

const person = new Person('El-OUARDY', 27);
console.log(person.greet()); // "Hello, my name is El-OUARDY."
```

## 3. Static Methods

Static methods are defined using the static keyword. They are called on the class itself, not on instances of the class.

#### Why use a static method?

Static methods are useful for utility functions that don't require an instance of the class to operate.
Example:

```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); // 8
```

## 4. Extending a Class

A class can inherit from another class using the extends keyword.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // "Rex barks."
```

## 5. Metaprogramming and Symbols

Symbols are a new primitive type in ES6, mainly used for metaprogramming.

Example:

```javascript
const mySymbol = Symbol('description');

const obj = {
  [mySymbol]: 'value',
};

console.log(obj[mySymbol]); // "value"
```

## Metaprogramming Example with Symbols:

Symbols can be used to create private properties or methods, which can’t be accidentally accessed or overwritten.

```javascript
const _privateMethod = Symbol('privateMethod');

class MyClass {
  [_privateMethod]() {
    return 'This is a private method';
  }

  publicMethod() {
    return this[_privateMethod]();
  }
}

const instance = new MyClass();
console.log(instance.publicMethod()); // "This is a private method"
```

## Contact Me

**Twitter:** https://twitter.com/_ELOUARDY \
**Email:** ouadia@elouardy.com
