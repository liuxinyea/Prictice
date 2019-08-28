let nums1 = [1,2,2,3], nums2 = [2,2,2,3,3,4]
/*方法1：暴力循环*/
let intersect1 = function(nums1, nums2) {
    let res=[];
    for(let i=0;i<nums1.length;i++){
        let key = nums2.indexOf(nums1[i]);
        if (key !== -1){
            res.push(nums2[key]);
            nums2.splice(key, 1)
        }

    }
    return res;
};
/*方法2：双指针*/
let intersect2 = function(nums1, nums2) {
    let res=[];
    let p1 = 0;
    let p2 = 0;
    //先排序
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] === nums2[p2]) {
            res.push(nums1[p1])
            p1++;
            p2++
        } else if(nums1[p1] < nums2[p2]) {
            p1++
        } else {
            p2++
        }
    }
    return res;
};
/*方法3*/
let intersect3= function(nums1, nums2) {
    /*方法三：map*/
    let res=[];
    let hash = new Map()
    for(let i = 0; i < nums1.length; i++) {
        if(hash.has(nums1[i])) {
            hash.set(nums1[i], hash.get(nums1[i]) + 1)
        } else {
            hash.set(nums1[i], 1)
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        let temp = nums2[i]
        let hashKey = hash.get(temp)
        if(hash.has(temp)) {
            res.push(temp)
            if(hashKey > 1) {
                hash.set(temp, hashKey - 1)
            } else {
                hash.delete(temp)
            }
        }
    }
    //作者：zhl1232
    //链接：https://leetcode-cn.com/problems/two-sum/solution/js-xie-leetcode-by-zhl1232/
    return res;
};
