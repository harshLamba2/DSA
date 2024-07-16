class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    insert(data){

        let node=new Node(data);

        if(!this.head)
            return this.head=node;

        let nodeList=this.head;

        while(nodeList.next){
            nodeList=nodeList.next;
        }

        nodeList.next=node;

    }

    printReversed(){
        if(!this.tail) return;

        let nodeList=this.tail;

        while(nodeList.prev){
            console.log(nodeList);
            console.log();
            console.log();
            nodeList=nodeList.prev;
        }

        console.log(nodeList);

    }

    reverse(){

        if(!this.head)
            return;
    
        let head=this.head;

        while(head.next){
            
            let next=head.next
            head.next.prev=head;
            // delete head.next;
            head=next;
        }

        this.tail=head 

    }

}


let linkedList=new LinkedList();

for(let i=1; i<1000; i++)
    linkedList.insert(i);


linkedList.reverse();

linkedList.printReversed();