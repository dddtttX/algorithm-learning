/**
 * 
 * 获取链表第index个节点的数值
 * 在链表的最前面插入一个节点
 * 在链表的最后面插入一个节点
 * 在链表第index个节点前面插入一个节点
 * 删除链表的第index个节点
 * 
 */

class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function () {
    this._size = 0
    this._head = null
    this._tail = null
}

/**
 * 获取链表第index个节点的数值
 */
MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this._size) { return null }
    // 设置虚拟头节点
    let cur = new ListNode(0, this._head)
    while (index >= 0) {
        // 设置头部节点后更改了链表每个节点的位置，但只对index之前的做处理和遍历
        cur = cur.next
        index--
    }
    return cur
}
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this._size) { return -1 }
    // 获取当前节点
    return this.getNode(index).val
}

/**
 * 在链表的最前面插入一个节点
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val, this._head)
    this._head = node
    if (!this._tail) {
        this._tail = node
    }
    this._size++
}

/**
 * 在链表的最后面插入一个节点
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val, null);
    if (this._tail) {
        this._tail.next = node
    } else { this._head = node }
    this._tail = node
    this._size++
}

/**
 * 在链表第index个节点前面插入一个节点
 */
MyLinkedList.prototype.addAtIndex = function (val, index) {
    // 几种不正常的情况
    // 1.头部插入
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    // 2.尾部插入
    if (index === this._size) {
        this.addAtTail(val)
        return
    }
    // 3.不插入
    if (index > this._size) { return }

    // 正常情况
    // 先获取前一个node的值
    let curNode = this.getNode(index - 1)
    let node = new ListNode(val, curNode.next)
    curNode.next = node
    this._size++
}

/**
 * 删除链表的第index个节点
 */
MyLinkedList.prototype.delAtIndex = function (index) {
    // 删除的index小于0或大于链表长度
    if (index < 0 || index >= this._size) { return }
    // 删除头部节点
    if (index == 0) {
        this._head.next ? this._head = this._head.next : this._tail = null
        this._size--
        return
    }
    // 正常情况
    let curNode = this.getNode(index - 1)
    curNode.next = curNode.next.next
    // 处理尾节点
    if (index == this._size - 1) {
        this._tail = curNode
    }
    this._size--
}