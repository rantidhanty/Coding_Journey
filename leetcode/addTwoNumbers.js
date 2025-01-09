class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummyHead.next;
}

function listToArray(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

let addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummyHead.next;
};

// Testing
let l1 = arrayToList([3, 7, 2]);
let l2 = arrayToList([4, 1, 8]);
let result = addTwoNumbers(l1, l2);
console.log(listToArray(result));
