let liftedUp = null

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    if (value === undefined) {
      this.head = null
      this.tail = null
      this.length = 0
      return
    }

    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return newNode
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return newNode
  }

  remove(index) {
    if (index < 0) {
      return false
    }

    if (length === 0) {
      return false
    }

    let i = -1
    let current = this.head
    let prev = null
    while (current) {
      if (++i === index) {
        if (current === this.head) {
          this.head = this.head.next
          this.length--
          if (this.head === null) {
            this.tail = null
          }
          return current
        }
        prev.next = current.next
        this.length--
        if (prev.next === null) {
          this.tail = prev
        }

        return current
      }
      prev = current
      current = current.next
    }

    return false
  }

  prepend(value) {
    const newNode = new Node(value)

    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return newNode
    }

    newNode.next = this.head
    this.head = newNode
    this.length++
    return newNode
  }

  lookup(index) {
    if (this.length === 0) return undefined

    if (index > this.length - 1) return undefined

    let i = -1
    let current = this.head
    while (current) {
      if (++i === index) {
        return current.value
      }

      current = current.next
    }
  }

  insert(value, index) {
    if (this.length === 0) {
      return false
    }

    if (index < 0) {
      return false
    }

    const newNode = new Node(value)

    if (this.head === null && index === 0) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return newNode
    }

    let current = this.head
    let prev = null
    let i = -1
    while (current) {
      if (++i === index) {
        if (current === this.head) {
          newNode.next = this.head
          this.head = newNode
          this.length++
          return newNode
        }
        newNode.next = current
        prev.next = newNode
        this.length++
        return newNode
      }
      prev = current
      current = current.next
    }

    return false
  }

  removeLast() {
    if (this.length === 0) {
      return false
    }

    return this.remove(this.length - 1)
  }

  all() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}

;(function () {
  function fillList(list) {
    let current = list.head
    for (let i = 11; i < 20; i++) {
      newList.append(i)
    }
  }

  const newList = new LinkedList(5)

  fillList(newList)
  newList.all()

  liftedUp = newList
})()
