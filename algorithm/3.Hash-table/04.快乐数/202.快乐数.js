/**
 * 编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。
当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法了。
 */

var isHappy = function (n) {
    let m = new Map()
    const getSum = num => {
        let sum = 0
        while (n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }
    while (true) {
        if (m.has(n)) return false
        if (n === 1) return true
        m.set(n, 1)
        n = getSum(n)
    }
}
console.log(isHappy(68))
