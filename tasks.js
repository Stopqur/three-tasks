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

let flag = 0

function matrix(num) {
    let arr = [[]]

    for(let i = 0; i < num; i++) {
        arr[i] = []
        for(let j = 0; j < num; j++) {
            arr[i][j] = 0
        }
    }

    // while(flag !== num * 2) {
        for(let val = num; val > 2; val --) {
            ribsValues(arr, num, val)

        }
    // } 

    console.log(arr)
}

function ribsValues(arr, num) {    
    for(let i = 0; i < num; i++) {
        arr[i] = []
        for(let j = 1; j <= num; j++) {
            arr[i].push(j)
        }
        arr[i][num - 1] = i + num
    }
    
    flag = arr[arr.length - 1][arr.length - 1]

    for(let i = arr.length - 1; i > 0; i--) {
        if(i === arr.length - 1) {
            for(let j = arr[arr.length - 1].length - 2; j > arr[arr.length - 1].length - 1 - num; j--) {
                arr[i][j] = ++flag 
            }
        }
        arr[i][0] = ++flag        
    }
}

matrix(5)
