
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

        return node;
    }

}


let linkedList=new LinkedList();


let mid=null;
let end=null
for(let i=1; i<10000; i++){
    let inserted=linkedList.insert(i);
    if(i===995)
        mid=inserted;

    if(i===5999)
        end=inserted;
}

end.next=mid;

console.log(findLoopInLinkedList(linkedList.head));

function findLoopInLinkedList(head){

let pointer1=head;
let pointer2=head;

let i=0;
while(pointer1 && pointer2 && (pointer1!==pointer2 || i===0) ){
    pointer1=pointer1?.next ?? null;
    pointer2=pointer2?.next?.next ?? null;

    i++
}

if(pointer1==pointer2)
    return 'Loop Detected in '+i+' iterations' ;

return 'No Loop'
}