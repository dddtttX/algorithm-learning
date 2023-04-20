/**
 *  题目：
        给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
        如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 */

/**
 *     题解：    
        目标值在数组所有元素之前
        目标值等于数组中某一个元素
        目标值插入数组中的位置
        目标值在数组所有元素之后

 */


var nums = [2, 4, 8, 12, 18, 23]
// var target = 1
// var target = 4
// var target = 5
var target = 32

// 自己暴力解决方案
var mySearchInsert = function (nums, target) {
    let min = nums[0]
    let indexs = nums.length - 1
    let max = nums[indexs]
    if (target < min) {
        return 0
    } else if (target > max) {
        nums.push(target)
        return indexs + 1
    } else {
        for (let i = 0; i <= indexs; i++) {
            if (target == nums[i]) {
                return i
            } else if (i !== indexs && target > nums[i] && target < nums[i + 1]) {
                return i + 1
            }
        }
    }
}

// 代码随想录的暴力解法 自己的解法忽略了有序数组，导致遍历的重复条件判断
var codeSearchInsert = function (nums, target) {
    // 直接遍历，只要target小于等于某个数字，就输出这个数字对应的索引
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    // 如果从小到大遍历都找不到，就说明是最大的，索引为数组长度
    return length
}

// 二分查找的解法
var divSearchInsert = function (nums, target) {
    // 左闭右闭
    let l = 0, r = nums.length - 1, ans = nums.length
    while (l <= r) {
        let mid = l + Math.floor((r - l) >> 1)
        if (target > nums[mid]) {
            l = mid + 1
        } else {
            ans = mid
            r = mid - 1
        }
    }
    return ans
}



console.log(divSearchInsert(nums, target));
