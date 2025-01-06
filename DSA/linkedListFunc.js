// Membuat Node
function createNode(data) {
  return {
    data: data, // Elemen yang disimpan
    next: null, // Pointer ke node berikutnya
  };
}

// Membuat Linked List
function createLinkedList() {
  let head = null;

  return {
    // Menambah elemen di akhir
    append(data) {
      const newNode = createNode(data);
      if (head === null) {
        head = newNode; // Jika linked list kosong
      } else {
        let current = head;
        while (current.next !== null) {
          current = current.next; // Traverse ke node terakhir
        }
        current.next = newNode;
      }
    },

    // Menambah elemen di awal
    prepend(data) {
      const newNode = createNode(data);
      newNode.next = head;
      head = newNode;
    },

    // Menghapus elemen tertentu
    remove(data) {
      if (head === null) return; // Jika linked list kosong
      if (head.data === data) {
        head = head.next; // Hapus node pertama
        return;
      }

      let current = head;
      while (current.next !== null && current.next.data !== data) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next; // Hapus node berikutnya
      }
    },

    // Membalik linked list
    reverse() {
      let current = head;
      let prev = null;
      let next = null;

      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      head = prev;
    },

    // Menghitung panjang linked list
    length() {
      let current = head;
      let count = 0;

      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    },

    // Menampilkan isi linked list
    print() {
      let current = head;
      const result = [];
      while (current !== null) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(" -> "));
    },
  };
}

// Contoh Penggunaan
const myList = createLinkedList();
myList.append(2);
myList.append(3);
myList.append(4);
myList.prepend(1);
myList.remove(3);
myList.reverse();
console.log("Panjang Linked List:", myList.length());
myList.print();
