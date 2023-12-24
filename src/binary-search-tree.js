const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {


  _root = null;

  root() {
    return this._root;
  }

  insertNode(node, data) {
    if (node.data < data) {
      if (!node.right) {
        node.right = new Node(data);
      } else {
        this.insertNode(node.right, data)
      }
    }
    else if (node.data > data) {
      if (!node.left) {
        node.left = new Node(data);
      } else {
        this.insertNode(node.left, data)
      }
    }
  }
  add(data) {
    if (!this._root) {
      this._root = new Node(data);
    }
    this.insertNode(this._root, data);
  }

  has(data) {
    if (this.findNode(this._root, data)) {
      return true;
    } else {
      return false;
    }
  }
  findNode(node, data) {
    if (node.data === data) {
      return node;
    }
    if (node.data < data) {
      if (!node.right) {
        return null;
      } else {
        return this.findNode(node.right, data)
      }
    }
    else if (node.data > data) {
      if (!node.left) {
        return null;
      } else {
        return this.findNode(node.left, data)
      }
    }
  }
  find(data) {
    return this.findNode(this._root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
  remove(data) {
    this._root = this.removeNode(this._root, data);
  }
  minNode(node) {
    if (node.left) {
      return this.minNode(node.left)
    } else {
      return node;
    }
  }
  maxNode(node) {
    if (node.right) {
      return this.maxNode(node.right)
    } else {
      return node;
    }
  }
  min() {
    return this.minNode(this._root).data;
  }

  max() {
    return this.maxNode(this._root).data;
  }
}

module.exports = {
  BinarySearchTree
};