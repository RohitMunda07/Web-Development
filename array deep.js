// const myArr = []
//     % DebugPrint(myArr)

// organisation of array by v8 engine
// types of array

/* 
1. continious,
    [1,2,3,4]
2. holey
 [1, ,2, ,5]

 further they both contain all below types

 SMI {small integer}
 Packed element // it will contain all types of data
 Double {float, string, function}
 here properties are termed as elemnt
*/

const myArr2 = [1,2,3,4,5,6,7]
// Packed SMI array -> constain only integer numbers
const myArr3 = [1,2.1,3.5]
// Packed Double array -> constain only decimal numbers
// once the array is downgrade it cannot be reversed
myArr2[10]=25
// it will make a holy array

// checks for array 

// bound check (range or length check)
// hasOwnProperty(myArr3, 6) (element is present at [6])
// hasOwnProperty(myArr3.prototype, 7)
// hasOwnProperty(Object.prototype, 7)

// holes are very expensive in js

// SMI > Double > Packed
// H_SMI > H_Double > H_Packed

const arrFour = new Array(3)
// just 3 holes -> Holey_SMI_Element
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = [] // much optimised than above
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

// both will make double
// arrFive.push(NaN) 
// arrFive.push(Infinity)

// atlast use predefined loop forEach, for-of, etc