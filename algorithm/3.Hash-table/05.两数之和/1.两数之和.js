/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回 [0, 1]

 */

// 方案1 暴力双循环
// var twoSum = function(nums, target) {
//     let length = nums.length
//     if(length == 0 || length == 1){ return }
//     for (let i = 0; i < length; i++) {
//             for (let j = i + 1; j < length; j++) {
//                 if (nums[i] + nums[j] == target) {
//                     return [i, j]
//                 }
//             }
//     }
//     return null
// }

var twoSum = function(nums, target){
    if (nums.length < 2) { return [] }
    let hash = {}
    for(let i = 0; i < nums.length ; i++){
        if (hash[target - nums[i]] !== undefined) {
            // 此时匹配到了hash表里面有这个做差完的属性
            return [hash[target - nums[i]], i]
        }
        // 没有匹配上，则将改值录入到hash表中
        hash[nums[i]] = i
    }
    return []
}

console.log(twoSum([-1,-2,-3,-4,-5], -8));
