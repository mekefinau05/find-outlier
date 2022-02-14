// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.


function outlier(integers) {
    let evens = []
    let odds = []
    integers.forEach((i, index) => {
        console.log(`Index:${index} ->${i}`)
        i%2 === 0 ? evens.push(i) : odds.push(i)
    })
    return evens.length<2?evens[0]:odds[0]
}
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// [160, 3, 1719, 19, 11, 13, -21]



// function findOutlier(integers) {
//     let evens = []
//     let odds = []

//     for (let i = 0; i < integers.length; i++) {
//         let num = integers[i]

//         if (num % 2 === 0) {
//             evens.push(num)
//         } else {
//             odds.push(num)
//         }
//     }

//     if (evens.length === 1) {
//         return evens[0]
//     } else {
//         return odds[0]
//     }
// }

// // with ternaries
// function findOutlier(integers) {
//     let evens = []
//     let odds = []
//     integers.forEach(e => e % 2 === 0 ? evens.push(e) : odds.push(e))
//     return odds.length === 1 ? odds[0] : evens[0]
//   }