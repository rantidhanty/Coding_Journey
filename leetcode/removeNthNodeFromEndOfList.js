/**
 * Definition for singly-linked list.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

//function create linkedlist from array
function createLinkedList(arr){
    let head = new ListNode(arr[0]);
    let current = head;

    for(let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;    
}

//Solution
let removeNthFromEnd = function(head, n){
    let res = new ListNode(0, head)
    let dummy = res;

    for(let i = 0; i < n; i++){
        head = head.next;
    }
    while(head){
        head = head.next;
        dummy = dummy.next;
    }
    dummy.next = dummy.next.next;
    return res.next
}

//function print linkedlist
function printLinkedList(head){
    let result = [];
    while(head){
        result.push(head.val);
        head = head.next;
    }
    console.log(result)
}

let head = createLinkedList([1,2,3,4,5]);
let updateHead = removeNthFromEnd(head, 2)
printLinkedList(updateHead);