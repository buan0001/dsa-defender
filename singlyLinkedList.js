export default class SinglyLinkedList {
  head = null;
  constructor(head = null) {
    this.head = head;
  }

  add(data) {
    console.log("head in add", this.head);

    const freshNode = new Node(data, this.head);
    this.head = freshNode;
  }

  remove(data) {
    const foundNote = this.getNodeWith(data)
    if (foundNote){
        return this.removeNode(foundNote);
    }
  }
  getFirst() {
    return this.getFirstNode().data
  }
  getLast() {
    return this.getLastNode().data
  }
  getFirstNode() {
    return this.head;
  }
  getLastNode() {
    let node = this.head;
    while (node.next)
    {
        node = node.next
    }
    console.log("Last node", node);
    console.log("THe last node is:",node);
    // this.dumpList()

    return node;
  }

  getNextNode(node) {
    return node.next;
  }
  
  getNodeWith(data) {
    let current = this.head;
    if (current.data == data){
        return current;
    }
    else {
        while (current){
            if (current.data == data){
                return current;
            }
            current = current.next
        }
    }
  }
  removeFirstNode() {
    if (this.head) {
      this.head = this.head.next;
      console.log("Head after remove first:", this.head);
    }
  }
  removeLastNode() {
    let current = this.head;
    let previous = null;
    if (!this.head.next) {
      this.head = null;
    } else {
      while (current) {
        if (current.next) {
          previous = current;
        }
        current = current.next;
      }
      previous.next = null;
    }
    // console.log("List after remove last:");
    // this.dumpList();
  }

  removeNode(node) {
    if (node instanceof Node){
        console.log("Issa node");
    }
    else {
        console.log("aint a node");
        return
    }

    let current = this.head;
    let previous = null;
    if (current == node) {
      this.head = current.next;
    } else {
      while (current != node) {
        previous = current;
        current = current.next;
        if (!current){
            console.log("Node not found");
            return
        }
      }
    //   console.log("List before removing a specific node:");
    //   this.dumpList();
      previous.next = current.next;
    //   console.log("List after removing a specific node:");
    //   this.dumpList();
    }
  }

  clear() {
    this.head = null;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current){
        count++
        current = current.next;
    }
    console.log("count", count);
    return count;
  }
  dumpList() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

class Node {
  data = null;
  next = null;
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }

  setNext(newNext) {
    this.next = newNext;
  }
}
