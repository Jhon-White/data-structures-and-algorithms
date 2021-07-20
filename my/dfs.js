class Node {
  constructor(value) {
    this.right = null
    this.left = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return true
    }

    let current = this.root
    while (current) {
      if (value === current.value) {
        return false
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return true
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return true
        }
        current = current.right
      }
    }

    return false
  }

  lookup(value) {
    if (this.root === null) {
      return null
    }

    let current = this.root
    while (current) {
      if (value === current.value) {
        return current
      }

      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return null
  }
}

function traverse(node) {
  const tree = { value: node.value }

  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)

  return tree
}

function dfs(root) {
  const stack = []
  const list = []
  let node = null

  if (root === null) {
    return null
  }
  stack.push({ element: root, toLeft: false, toRight: false })

  while (stack.length > 0) {
    // peek the last node in the stack
    node = stack[stack.length - 1]
    if (node.toLeft === false && node.toRight === false) {
      list.push(node.element.value)
    }

    if (!node.toLeft) {
      if (node.element.left) {
        node.toLeft = true
        stack.push({ element: node.element.left, toLeft: false, toRight: false })
        continue
      } else {
        node.toLeft = true
      }
    }

    if (!node.toRight) {
      if (node.element.right) {
        node.toRight = true
        stack.push({ element: node.element.right, toLeft: false, toRight: false })
        continue
      } else {
        node.toRight = true
      }
    }

    if (node.toLeft && node.toRight) {
      stack.pop()
    }

    //         node = stack.pop()
    //         node = stack.pop()
    //         if (node && !node.toRight) {
    //             stack.push({element: node.element.right, toLeft: false, toRight: false})
    //         }
  }

  console.log(list)
}

function bfs_recursive(root) {
  const queue = []
  const list = []
  let node = null

  if (root === null) {
    return list
  }
  queue.push(root)

  //    function traverse() {
  //         node = queue.shift()

  //         if (node) {
  //             list.push(node)
  //             if (node.left) {
  //             queue.push(node.left)
  //             }

  //             if (node.right) {
  //                 queue.push(node.left)
  //             }
  //             traverse()
  //         }

  //     }

  function traverse() {
    if (queue.length === 0) {
      return
    }

    node = queue.shift()
    list.push(node.value)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    traverse()
  }

  traverse()
  return list
  //     console.log(list)
  //     console.log(queue)
}

let tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(5)

console.log("BFS")
console.log(bfs_recursive(tree.root))
console.log("DFS")
dfs(tree.root)

// let res = JSON.stringify(traverse(tree.root))

//       9
//    4     20
//  1  6  15  170
//    5

// remove
// 1. if node dosen't have childs, we can remove safely
// 2. if node has only the left child, the left child takes place the to be deleted node
// 3. if node has only the right child, the right child takes place the nto be deleted node
// 4. if node has the both childs
