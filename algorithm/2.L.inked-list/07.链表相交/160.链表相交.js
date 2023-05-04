/**
 * 
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的节点。
 * 如果两个链表没有交点，返回 null 图示两个链表在节点 c1 开始相交：
 * 
 */

/**
 * 
 * 思路
 *  先获取两个链表的长度，找到和短的那条对齐的位置
 *  判断指针是否相同
 */
var getListLen = function (head) {
    let len = 0, cur = head
    while (cur) {
        len++
        cur = cur.next
    }
    return len
}

var getIntersectionNode = function (headA, headB) {
    let curA = headA, curB = headB,
        lenA = getListLen(headA),
        lenB = getListLen(headB)
    if (lenA < lenB) {
        // 链表交换变量
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA]
    }
    // 得到差值
    let i = lenA - lenB
    // 得到真正的curA
    while (i-- > 0) {
        curA = curA.next
    }
    // 遍历A剩下的和B，遇到相同的即为交点，跳出循环
    while (curA && curA !== curB) {
        curA = curA.next
        curB = curB.next
    }
    return curA
}