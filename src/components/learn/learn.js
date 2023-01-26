class Node {
  constructor(_value) {
    this.value = _value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Nodee is Empty");
    } else {
      let curr = this.head;
      let currentValues = "";
      while (curr) {
        currentValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(currentValues);
      return currentValues;
    }
  }
}

const list = new LinkedList();

console.log(list.isEmpty(), list.getSize(), list.prepend(20));

class Trapezium {
  constructor(_height, _base, _length, _width) {
    this.height = _height;
    this.width = _width;
    this.length = _length;
    this.base = _base;
  }

  getDimensions() {
    const { height, width, lenght, base } = this;
    if (width * height === lenght * base) {
      return width * base;
    }
    return (1 / 2(width * base)) % height;
  }
}

const trapezium = new Trapezium();
const dimensions = trapezium.getDimensions();

console.log("Response", dimensions);
