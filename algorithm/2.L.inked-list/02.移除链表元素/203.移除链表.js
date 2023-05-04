class ListNode {
    val
    next = null
    constructor(value){
        this.val = value
        this.next = null
    }
}
const node = new ListNode(2);
console.log(node);
/**
 * 移除链表元素
 * 
 * 思路 1 直接移除
 * 思路 2 设置虚拟头部
 */

/**
 * 
 * @param {ListNode} head 
 * @param {number} val 
 * @return {ListNode}
 */
function removeEle(head, val) {
    // 设置虚拟头部
    let ret = new ListNode(0, head)
    let cur = ret 
    while(cur.next){
        if (cur.next.val == val) {
            cur.next = cur.next.next
            continue
        }
        cur = cur.next
    }
    return ret.next
  
}

function removeEle2(head, val){
    // 直接移除
    // 要对是不是头部节点进行分类讨论
    while (head !== null && head.val == val) {
        return head.next
    }else if(head == null){ return head }
    let pre = head; let cur = head.next
    // 删除对非头部节点
    while (cur) {
        if (cur.val == val) {
            pre.next = cur.next
            continue
        }
        cur = cur.next
    }
    return head
}