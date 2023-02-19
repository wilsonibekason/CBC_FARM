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
  // 0 (n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) return (this.head = node);
    else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = tjis.head.node;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next + removedNode.next;
    }
    this.size++;
    return removedNode;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size++;
      return value;
    } else {
    }
  }
  // 0(1)
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
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index + 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = nide;
      this.size++;
    }
  }
}

const list = new LinkedList();

console.log(list.isEmpty(), list.getSize(), list.prepend(20));
console.table(
  list.prepend(30),
  list.print(),
  list.prepend(40),
  list.print(),
  list.insert(30, 30),
  list.print(),
  list.removeFrom(10)
);

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

/// GET CHILD DOM TO BE DISPLAYED TO THE APPLICATION
const children = document.getElementByID("schoolclass");

class Classes {
  constructor(_students, _chairs, _tables, _ageGrade) {
    this.students = _students;
    this.tables = _tables;
    this.ageGrade = _ageGrade;
    this.class = _chairs ? _chairs : null;
    // each class is represented as a Node and implemenrts tbe total number of students in the class
  }
  getClassNodes() {
    return Math.floor(Math.round(this.student));
  }
}

class MyEnvironment {
  constructor(
    _ages,
    _classes,
    modules,
    _staffs,
    _teachers,
    _parents,
    _Guests,
    _security,
    _others
  ) {
    this.ages = _ages;
    this.classes = _classes;
    this.staffs = _staffs;
    this.teachers = _teachers;
    this.guests = _Guests;
    this.security = _security;
    this.others = _others;
    this.mainResultedPreference = {};
  }
  getNumber() {
    const { ages, classes, staffs, teachers, guests, others } = this;
    const result = null;
  }
  isLoading() {}
  isError() {}
  isErrorLoading() {}
  getClassNode() {}
  getTotalClasses() {}
  getConservedListEndPoints() {
    let lists = [];
    for (let i = 0; i <= i + lists.length; i++) {
      if (isLoading()) return null && getClassNode();
      else getTotalCLasses();
    }
  }
}

const myEnvironment = new MyEnvironment(10, 20);
console.table(myEnvironment.getNumber());
//Array.prototype.slice.call
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
const array = [];

class OrderedList {
  constructor(_locationPopulate) {
    (this.location = _locationPopulate),
      (this.locations = this.locations),
      (this.producers = []);
  }
  getLocation() {
    let node = null;
    if (typeof node !== null && !this.location) return (node = this.locations);
  }
}

const constructOrder = new OrderedList({
  name: "wilson",
  age: 40,
  title: "Becoming SuperNatural".toString(),
  level: "30%",
});

/// Define An Electron Shape

class ElectronNuetrons {
  constructor(neutron_values, neutron__atomic_filedirectoryentry) {
    this.neutron_values = neutron_values;
    this.neutron__atomic_filedirectoryentry =
      neutron__atomic_filedirectoryentry;
    this.next = null;
    this.end = null;
  }
}

class Electron {}

// append add a new Node at the End of the List
