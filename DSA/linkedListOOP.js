/**
 * Belajar Linked List
 * Linked List adalah kumpulan elemen (node) yang saling terhubung. Setiap node memiliki dua bagian utama:
 * 1. Data: Menyimpan nilai.
 * 2. Pointer (next): Menunjuk ke node berikutnya.
 * 
 * Node adalah struktur data yang menyimpan elemen/isi (data) serta pointer (next) ke node berikutnya.
 * Elemen adalah data atau nilai yang disimpan di dalam sebuah node.
 *
 * Analogi untuk Memahami:
 * Bayangkan linked list seperti rangkaian gerbong kereta:
 *
 * - Node adalah gerbong kereta.
 * - Elemen adalah barang yang ada di dalam gerbong.
 * - Pointer adalah koneksi antara gerbong-gerbong.
 *
 * Node ≠ elemen, meskipun sering dianggap sama.
 * Node adalah wadah (struktur lengkap), sedangkan elemen hanya bagian dari node, yaitu data yang disimpan.
 */

/**
 * Node Class
 * Setiap elemen dalam linked list disebut node. Kita buat dulu class Node:
 */
class Node {
  constructor(data) {
    this.data = data; //data yang disimpan
    console.log(this.data);
    this.next = null; //pointer ke node selanjutnya (default null)
  }
}

/**
 * LinkedList Class
 * Sekarang kita buat class LinkedList untuk mengelola node:
 */
class LinkedList {
  constructor() {
    this.head = null; //node pertama (awal linked list)
  }

  //menambah elemen di akhir
  append(...data) {
    let current = this.head;
    data.forEach(d => {
      const newNode = new Node(d);
      console.log(newNode);
      //jika linked list masih kosong
      if (this.head === null) {
        this.head = newNode;
        return;
      }
      //jika linked list tidak kosong
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode; //sambungkan node baru
    });
    return this;
  }

  //menambah elemen di awal (insert at Head)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //Menghapus elemen dengan nilai tertentu.
  remove(data) {
    if (this.head === null) return; //jika linked list masih kosong
    if (this.head.data === data) {
      //jika node pertama dihapus
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next; //cari node sebelum node yang akan dihapus
      console.log(current);
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  //mencari elemen dengan nilai tertentu
  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true; //node ditemukan
      }
      current = current.next;
    }
    return false; //node tidak ditemukan
  }
  //membalik urutan elemen
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  //menghitung panjang linked list
  length() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  //menampilkan element - element dari linked list
  print() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

//contoh penggunaan
const mylist = new LinkedList();
console.log(mylist.append(2, 3, 4));
mylist.append(3);
mylist.append(4);
mylist.prepend(1);
mylist.remove(3);
console.log(mylist.find(20));
mylist.reverse();
console.log(mylist.length());
mylist.print();
