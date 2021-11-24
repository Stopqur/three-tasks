'use strict'

//    №1

function createFibonachi(len, argArr) {
    if(typeof argArr === 'undefined') {
        argArr = [0, 1]
    }

    if (len < 2) {
        console.log('Введите значение, больше 2')
    } else {
        if (argArr.length !== len) {      
            argArr.push(createFibonachi(len - 1, argArr) + argArr[argArr.length - 2]) 
            return argArr[argArr.length - 1]
        } else {
            return argArr[len - 1]
        }
    }

}

createFibonachi(6)
// console.log(arr)





//    №2

const allStr = ['hello', 'hero', 'po', 'iStanbul', 'iodel']

function findSameStr(strArray) {
    // strArray = strArray
    // .map(item => item[0] + item[item.length - 1])
    // .map((item, index, array) => (index !== array.length - 1) ? item === array[index + 1] : null)
    // strArray.pop()
    // console.log(strArray)
    strArray = strArray.map((item, index, arr) => {
        if(index !== arr.length - 1) {
            let nextStr = arr[index + 1]
            return (item[0] + item[item.length - 1]) === nextStr[0] + nextStr[nextStr.length - 1]
        } else {
             return null
        }
    })
    strArray.pop()
    console.log(strArray)
}

// findSameStr(allStr)



//    №3

function createMatrix(num) {
    let flag = 1
    let arr = [[]]

    for(let i = 0; i < num; i++) {
        arr[i] = []
        for(let j = 0; j < num; j++) {
            arr[i][j] = 0
        }
    }

    for(let val = num; val > num / 2; val--) {

       // Top-Right
       for(let i = num - val; i < val; i++) {
            if(i === num - val) {
                for(let j = num - val; j < val; j++) {
                    arr[i][j] = flag
                    flag++
                }
                flag--
            }
            arr[i][val - 1] = flag
            flag++
        }
        
        // Bottom-Left
        for(let i = val - 1; i > num - val; i--) {
            if(i === val - 1) {
                for(let j = val - 2; j > num - val; j--) {
                    arr[i][j] = flag
                    flag++
                }
            }
            arr[i][num - val] = flag++        
        }
    }
    flag--
    console.log(arr)
}

// createMatrix(10)
