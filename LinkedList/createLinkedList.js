class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
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

    print(){

        if(!this.head) return;

        let nodeList=this.head;

        while(nodeList.next){
            console.log(nodeList);
            console.log();
            console.log();
            nodeList=nodeList.next;
        }

        console.log(nodeList);

    }

}


let linkedList=new LinkedList();

for(let i=1; i<1000; i++)
    linkedList.insert(i);


linkedList.print();

