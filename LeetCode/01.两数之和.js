/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 双循环
    let length = nums.length, sum = 0
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length ; j++) {
            sum = nums[i] + nums[j]
            if (sum == target) {
                return [i,j]
            }
        }
    }
};
let nums = [1,2,3], target = 6
console.log(twoSum(nums, target));
