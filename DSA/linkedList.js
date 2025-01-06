    //Membuat Linked List
    /**
     * node class
     */
    class Node {
        constructor(data){
            this.data = data; //data yang disimpan
            this.next = null; //pointer ke node selanjutnya (default null)
        }
    }

    /**
     * Linked List class
     */
    class LinkedList {
        constructor(){
            this.head = null; //node pertama (awal linked list)
        }
        
        append(data){
            const newNode = new Node(data);

            //jika linked list masih kosong
            if(this.head === null){
                this.head = newNode;
                return;
            }
            let current = this.head;

            //jika linked list tidak kosong
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode; //sambungkan node baru
        }
        //menampilkan element - element dari linked list
        print(){
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
    mylist.append(1);
    mylist.append(2);
    mylist.append(3);
    mylist.print();