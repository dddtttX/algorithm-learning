/**
    如果哈希值比较少、特别分散、跨度非常大，使用数组就造成空间的极大浪费！
 * 
    题意：给定两个数组，编写一个函数来计算它们的交集。

    输入：nums1 = [1,2,2,1] num2 = [2,2] 输出：[2]
    输入：nums1 = [4,9,5] num2 = [9,4,9,8,4] 输出：[9,4]
 */

var intersection = function (num1, num2) {
    if (num1.length < num2.length) {
        // 令num1 > num2
        const _ = num1
        num1 = num2
        num2 = _
    }
    const nums1Set = new Set(num1)
    const resSet = new Set()
    for (let i = num2.length - 1; i >= 0; i--) {
        nums1Set.has(num2[i]) && resSet.add(num2[i])
    }
    return Array.from(resSet)
}
