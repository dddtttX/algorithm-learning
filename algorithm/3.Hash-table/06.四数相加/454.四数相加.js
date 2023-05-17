/** 
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1 之间，最终结果不会超过 2^31 - 1 。
 */

var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const twoSumMap = new Map()
    let count = 0
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            let sum = n1 + n2
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
        }
    }
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            let sum = n3 + n4
            count += (twoSumMap.get(0 - sum) || 0) + 1
        }
    }
    return count
}
let A = [1, 2],
    B = [-2, -1],
    C = [-1, 2],
    D = [0, 2]
console.log(fourSumCount(A, B, C, D));

