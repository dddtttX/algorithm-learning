/**
 * 二分查找
 */

var nums = [2, 4, 8, 12, 18, 23]
var target = 23

// 情况1，在左闭右闭下实现二分查找
var searchTest1 = function (nums, target) {
    let mid, left = 0, right = nums.length - 1
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] > target) { //左边
            right = mid - 1
        } else if (nums[mid] < target) { //右边
            left = mid + 1
        } else { //中间
            return mid
        }
    }
    return -1
}

// 情况1，在左闭右开下实现二分查找
var searchTest2 = function (nums, target) {
    let mid, left = 0, right = nums.length - 1
    while (left < right) { //左闭右开，nums[right]不在查找范围，不必包括此情况
        mid = left + ((right - left) >> 1)
        if (nums[mid] > target) { //左边
            right = mid
        } else if (nums[mid] < target) { //右边
            left = mid + 1
        } else { //中间
            return mid
        }
    }
    return -1
}
console.log(searchTest1(nums,target));

