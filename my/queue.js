class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first ? this.first.value : null
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.last !== null) {
      this.last.next = newNode
      this.last = newNode
    } else {
      this.last = newNode
      this.first = newNode
    }

    this.length++
    return value
  }

  //     dequeue() {
  //         if (this.first !== null) {
  //             const node = this.first
  //             this.first = this.first.next
  //             if (this.first === null) {
  //                 this.last = null
  //             }
  //             this.length--
  //             return node.value
  //         }

  //         return null
  //     }

  dequeue() {
    if (!this.first) {
      return null
    }

    if (this.first === this.last) {
      this.last = null
    }

    const node = this.first
    this.first = this.first.next
    this.length--
    return node.value
  }
}

let qu = new Queue()
