/**
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。
 * 
 * 你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 */

var canConstruct = function (ransomNode, magazine) {
    const reSet = new Array(26).fill(0)
    const base = "a".charCodeAt()
    for (const i of magazine) {
        reSet[i.charCodeAt() - base]++
    }
    for (const i of ransomNode) {
        const index = i.charCodeAt() - base
        if (!reSet[index]) {
            return false
        }
        reSet[index]--
    }
    return true
}
console.log(canConstruct("aa", "aab"))
