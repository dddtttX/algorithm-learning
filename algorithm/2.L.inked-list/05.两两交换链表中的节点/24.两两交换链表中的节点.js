/**
 * 
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 */

var swapPairs = function(head){
    // 设置一个空节点
    let ret = new ListNode(0, head)
    // 将空节点设置为临时节点
    let temp = ret
    // 以下的遍历需要建立在存在后两项的情况下
    while (temp.next && temp.next.next) {
        //**********对第一次循环进行分析********** */
        // 将第二项设置为cur,是临时节点的后两项
        let cur = temp.next.next
        // 将第一项设置为pre，是临时节点的后一项
        let pre = temp.next
        // 将第二项指针指向第一项
        cur.next = pre
        // 将空节点的指针指向第二项
        temp.next = cur
        // 此时以上步骤已经实现第一二项的交换
        // 此时pre为第二项，将pre赋值给temp，为下一次循环做准备
        temp = pre
        
    }
    return ret.next
}