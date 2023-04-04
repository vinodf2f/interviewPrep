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

const printDfs = (root) => {
  if (root == null) return;
  const resultQueue = [root];

  while (resultQueue.length) {
    const current = resultQueue.pop();
    console.log(current.value);

    if (current.right) resultQueue.push(current.right);
    if (current.left) resultQueue.push(current.left);
  }
};

// Recursive way

// const printDfs = (root) => {
//   if (root == null) return [];
//   const leftTree = printBfs(root.left);
//   const rightTree = printBfs(root.right);

//   return [root, ...leftTree, ...rightTree];
// };

console.log(printDfs(n1));
