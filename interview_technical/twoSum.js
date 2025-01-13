/**
 * 
 * @param {[]} nums 
 * @param {number} target 
 * @returns {number[] | string}
 */
const twoSum = (nums, target) => {
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[j] === target - nums[i]){
    //             return [i, j]
    //         }
    //     }
    // }
    // return "not found"

    //create variable hash
    let hash = {};
    //loop through the array
    for(let i = 0; i < nums.length; i++){
        //create variable complenent
        let complement = target - nums[i];
        //logic
        if(complement in hash){
            return [hash[complement], i]
        }
        hash[nums[i]] = i
    }
    return "not found"
}

console.log(twoSum([1,2,3,1,5,9,6], 5));