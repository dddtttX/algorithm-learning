/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，
 * 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0。
 */
// 方法一，暴力解法
// function minSubArrayLen(nums, s){
//     let sum, length
//     let result = Infinity
//     for(let i = 0; i < nums.length; i++){ //设置起点
//         sum = 0
//         for(let j = i; j < nums.length; j++){
//             sum += nums[j]
//             if(sum >= s){
//                 length = j - i + 1
//                 result = result < length ? result : length
//                 break
//             }
//         }
//     }
//     return result == Infinity ? 0 : result
// }
// 方法二，双指针
function minSubArrayLen(nums, s){
    let left = 0, right = 0, length = nums.length
    let sum = 0; let ans = Infinity
    while(right < length){
        sum += nums[right]
        while(sum >= s){
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return ans === Infinity ? 0 : ans
}
let s = 7, nums = [2,3,1,2,4,3] 
console.log(minSubArrayLen(nums, s));
