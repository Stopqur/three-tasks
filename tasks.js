'use strict'

//    №1

const arr = [0, 1, 1]

function fibonachi(len) {
    if (arr.length !== len) {
        arr.push(fibonachi(len - 1) + arr[arr.length - 2]) 
        return arr[arr.length - 1]
    } return arr[len - 1]
}

// fibonachi(5)



//    №2

const allStr = ['hello', 'nero', 'no', 'iStanbul', 'iodel']

function findSameStr(strArray) {
    strArray = strArray
    .map(item => item[0] + item[item.length - 1])
    .map((item, index, array) => (index !== array[array.length - 1]) ? item === array[index + 1] : null)
    strArray.pop()
    console.log(strArray)
}

// findSameStr(allStr)



//    №3


function matrix(num) {
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


matrix(7)
