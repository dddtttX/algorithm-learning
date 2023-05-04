/**
 * 
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 */

/**
 * 
 * 思路：
 *  双指针：快指针先走n+1，此后快慢同时走，
 *  直至快指针指向null，此时慢指针指向的即是要删除的元素
 * 
 */

var removeNthFromEnd = function (head, n) {
    // 虚拟指针
    const ret = new ListNode(0, head)
    let fast = ret, slow = ret
    // fast指针先走n+1
    while (n--) { fast = fast.next }
    // 两指针同时走
    while (fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }
    // 此时fast指向null，slow指向要删除的元素
    // 让slow指向要删除的元素的后一个元素，完成删除
    slow.next = slow.next.next
    return ret.next
}
