/**
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3 输出: [ [ 1, 2, 3 ],
             [ 8, 9, 4 ],
             [ 7, 6, 5 ] ]

 */

var generateMatrix = function (n) {
    let startX = 0;   // 起始位置
    let startY = 0;   // 起始位置
    let loop = Math.floor(n / 2);   // 旋转圈数
    let mid = Math.floor(n / 2);    // 中间位置
    let offset = 1;    // 控制每一层填充元素个数
    let count = 1;     // 更新填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while (loop--) {
        let col = startY, row = startX;
        // 从左到右
        for (; col < startY + n - offset; col++) {
            res[row][col] = count++
        };
        // 从上到下
        for (; row < startX + n - offset; row++) {
            res[row][col] = count++
        }
        // 从右到左
        for (; col > startY; col--) {
            res[row][col] = count++
        }
        // 从下到上
        for (; row > startX; row--) {
            res[row][col] = count++
        }
        startX++
        startY++
        offset += 2
    }
    if (n % 2 == 1) {
        res[mid][mid] = n * n
    }
    return res
};
console.log(generateMatrix(5));