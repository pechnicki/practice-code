function cookies(k,arr){
    if (arr.filter((e) => e >= k).length == arr.length){
        return 0
    }

    arr.sort((a,b) => parseInt(a) - parseInt(b))
    arr.push(arr[0]+2*arr[1])
    arr = arr.splice(2,arr.length)
    if (arr.length == 1 && arr[0] < k){
        return NaN
    }
    result = cookies(k,arr)+1
    return parseInt(result) ? result : -1
}


console.log(cookies(7,[1, 2, 3, 9, 10, 12]))
console.log(cookies(10,[1, 1, 1]))
console.log(cookies(8467293,[13, 47, 74, 12, 89, 74, 18, 38]))