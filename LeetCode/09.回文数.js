/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 双指针
    let left = 0, right = x.toString().length - 1
    let arr = x.toString().split("")
    console.log(arr);
    
    console.log(right);
    
    let flag = false
    while(left <= right){
        if(arr[left] !== arr[right]){
            return false
        }else{ flag = true }
        left++
        right--
    }
    return flag
};

console.log(isPalindrome(12111));
