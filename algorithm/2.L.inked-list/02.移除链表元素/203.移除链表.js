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
    // 删除头部节点
    while(head !== null && head.val === val){
        head = head.next
    }
    
}