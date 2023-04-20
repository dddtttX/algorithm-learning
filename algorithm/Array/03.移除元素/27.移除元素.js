/**
 * 题目
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

var nums = [0, 1, 2, 2, 3, 0, 4, 2]
var val = 2

// 方法一，暴力双循环
var removeEle = function (nums, val) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (val == nums[i]) {
            for (let j = i + 1; j < length; j++) {
                nums[j - 1] = nums[j]
            }
            i--
            length--
        }
    }
    console.log(nums);
    return length
}
console.log(removeEle(nums,val));
