// const cummulativeSum = (limit) => {
//     let total = 0, count = 1
//     while(count <= limit){
//         total += count
//         count += 1
//     }
//     return total;
// }
// console.log(cummulativeSum(10))


// const cummulativeSum = (limit) => {
//     let total = [], count = 0
//     while(count <= limit){
//         total.push((total[total.length - 1] || 0) + count)
//         count += 1
//     }
//     return total;
// }
// console.log(cummulativeSum(10))

const cummulativeSum = (limit) => {
    let total = 0
    let count = 1
    let result = []
    while(count <= limit){
        const before = total
        total += count;
        result.push(`[${before} + ${count} = ${total}]`)
        count += 1
    }
    const hasil = { result}
    return hasil
}
console.log(cummulativeSum(10))