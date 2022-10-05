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

function getIndex(head, index){
    if(head === null) return null
    if(index === 0) return head.val
    return getIndex(head.next, index - 1)
    
}
function getval(head, index){
    let current = head
    let count = 0
    while(current != null){
        if(count === index) return current.val
        count += 1
        current = current.next
    }
    return null
}

var reverseList = function(head) {
    let previous = null
    let current = head
    while(current){
        const next = current.next
        current.next = previous 
        previous = current
        current = next
    }
    return previous 
    
};
function revert(head){
    let prev = null
    let current = head
    while(current != null){
        const next = current.next 
        current.next = prev  
        prev = current 
        current = next
    }
    return prev 
    
}
function fu(head, prev = null){
    if(head === null) return prev
    const next = head.next
    return fu(next, head)
    
}
alert(getIndex(a, 1))
alert("")
alert(getval(a, 6))
alert("")
alert(fu(a))
alert("")