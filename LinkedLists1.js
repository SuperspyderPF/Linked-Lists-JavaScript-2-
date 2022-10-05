class Node{
    constructor(val){
        this.val = val 
        this.next = null
        
    }
}

const a = new Node(2)
const b = new Node(5)
const c = new Node(26)
const d = new Node(55)

a.next = b
b.next = c
c.next = d
function printLinkedList(head){
    let current = head 
    while(current != null) {
        console.log(current.val )
        current = current.next
    }
}
function recursivePrintLinkedList(head){
    if(head === null) return 
    console.log(head.val)
    recursivePrintLinkedList(head.next)
}
function array(head){
    const values = []
    let current = head
    while(current != null){
        values.push(current.val)
        current = current.next
    }
    return values 
}
function ar(head){
    const values = []
    filledValues(head, values)
    return values
}
function filledValues(head, values){
    if(head === null) return
    values.push(head.val)
    filledValues(head.next, values)
    
}
function sumLinkedList(head){
    let sum = 0
    let current = head
    while(current != null){
        sum += current.val
        current = current.next
        
    }
    return sum
}
function sumList(head){
    if(head === null )return 0
    return head.val + sumList(head.next)
}

function inList(head, target){
    let current = head 
    while(current != null){
        if(current.val === target) return true
        current = current.next
    }
    return false 
    
}
function recInList(head, target){
    if (head === null ) return false
    if(head.val === target)return true
    return recInList(head.next, target)
}
function search(head, target){
    let current = head 
    while(current != null){
        if(current.val == target){
            return true
            
        }
        current = current.next
    }
    return false 
}
printLinkedList(a)
alert("")
recursivePrintLinkedList(a)
alert("")
array()
alert("")
alert(ar(a))
alert("")
alert(sumList(a))
alert("")
alert(inList(a, 25))
alert("")
alert(recInList(a, 5))
alert("")
alert(search(a, 25))