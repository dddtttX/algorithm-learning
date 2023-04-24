/**
 * 有序数组的平方
 * 
 *  给你一个按 非递减顺序 排序的整数数组 nums，
 * 返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 
 */
// 方法一，暴力循环加排序
// function sortedSquares(nums) {
//     let length = nums.length
//     for(let i = 0; i < length; i++){
//         nums[i] = nums[i] * nums[i]
//     }
//     nums.sort((a,b) => {
//         return a-b
//     })
//     return nums
// }
var nums = [-4, -1, 0, 3, 10]
console.log(sortedSquares(nums));
// 方法二，双指针法
// function sortedSquares(nums) {
//     // 一前一后，两两比较，因为平方后都是正数
//     let length = nums.length
//     let k = length - 1
//     let result = new Array(length).fill(0)
//     let left = 0 , right = nums.length -1
//     while( left <= right ){
//         if( nums[left] * nums[left] < nums[right] * nums[right]){
//             result[k--] = nums[right] * nums[right]
//             right --
//         }else{
//             result[k--] = nums[left] * nums[left]
//             left ++
//         }
//     }
//     return result
// }
// 方法三，极简
function sortedSquares(nums){
   return nums.map( i => i * i).sort((a,b) => a-b)
}
