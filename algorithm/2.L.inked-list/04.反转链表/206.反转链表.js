/**
 * 
 * 题意：反转一个单链表。
 * 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 * 
 * 思路
 *  定义新的链表实现对链表元素的反转浪费内存空间
 *  正确思路是改变next指针的指向
 */

/**
 * 双指针法
 */
var reverseList = function (head) {
    if (!head || head.next == null) { return head }
    let temp = null, pre = null, cur = head
    while (cur) {
        // *******分析第一次循环*******
        // 保存第二个节点到temp
        temp = cur.next
        // 将null(也就是反转后的第一个节点)赋给cur.next，其实也就是改变指针方向
        cur.next = pre
        // pre往前走一格，从null-->cur
        pre = cur
        // cur往前走一格，从cur-->cur.next(temp)
        cur = temp
        // *******分析第二次循环*******
        /**
         * 保存第三个节点到temp
         * 将第二个节点，也就是一开始的cur赋值给第三个节点的next，也就是改变第二个箭头方向
         * pre往前走一格
         * cur往前走一格
         */
    }
    return pre
}

/**
 * 递归法
 */
var reverseByRecursion = function (pre, head) {
    if (!head) { return pre }
    const temp = head.next
    head.next = pre
    pre = head
    return reverseByRecursion(pre, temp)
}
var reverseList = function (head) {
    return reverseByRecursion(null, head)
}

/**
 * 使用栈解决反转链表
 */
var reverseByStack = function (head) {
    // 链表为空
    if (head == null) { return null }
    // 链表只有一个元素，直接返回
    if (head.next == null) { return head }
    // 正常情况
    // 创建栈，每一个节点入栈
    const stack = new Stack();
    let cur = head
    while (cur != null) {
        stack.push(cur)
        cur = cur.next
    }
    // 创建一个虚拟头节点
    const pHead = new ListNode(0)
    cur = pHead
    while(!stack.isEmpty()){
        const node = stack.pop()
        cur.next = node
        cur = cur.next
    }
    // 最后一个元素赋空
    cur.next = null
    return pHead.next

}

// js没有栈类，这里实现一个栈类
class Stack {
    constructor() {
        this.item = []
    }
    push(e) {
        this.item.push(e)
    }
    pop() {
        return this.item.pop()
    }
    isEmpty() {
        return this.item && this.item.length === 0
    }
}

