let chunks = (arr, number) => {
    let chunked = [];

    for (const arr_ele of arr) {

        let last =chunked[chunked.length-1];
        if (!last || last.length === number) {
            chunked.push([arr_ele])
        } else {
            last.push(arr_ele)
        }

    }
    return chunked;
}

console.log({"chuked_data" : chunks([1,2,3,4,5,6,7,8], 3)}) // [[1,2,3],[4,5,6],[7,8]]