/**
 * 
 * @param {[]} nums 
 * @param {number} target 
 * @returns {number[] | string}
 */
const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] === target - nums[i]){
                return [i, j]
            }
        }
    }
    return "not found"
}

console.log(twoSum([1,2,3,1,5,9,6], 20));