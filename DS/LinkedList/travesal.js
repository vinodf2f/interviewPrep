class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;

const printList = (head) => {
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
};
// 1->2 -> 3 -> 4
//

const printListReverse = (head) => {
  let preNode = null;
  let current = head;
  while (current !== null) {
    const temp = current.next;
    current.next = preNode;
    preNode = current;
    current = temp;
  }
  printList(preNode);
};

printListReverse(n1);
