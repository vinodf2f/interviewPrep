class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

const n1 = new Node(1);
n1.left = new Node(2);
n1.right = new Node(3);
n1.left.left = new Node(4);

//       1
//     2    3
//  4   5  6   7

const printBfs = (root) => {
  if (root == null) return;
  const resultQueue = [root];

  while (resultQueue.length) {
    const current = resultQueue.shift();
    console.log(current.value);

    if (current.left) resultQueue.push(current.left);
    if (current.right) resultQueue.push(current.right);
  }
};

printBfs(n1);
