function printSubArray(arr) {

    let n = arr.length

    for (let start = 0; start < n; start++) {
        for (let end = 0; end < n; end++) {
            for (let i = start; i <= end; i++) {
                console.log(arr[i], '\n')

            }

        }
    }


}

function MaximumSumSubArray(arr) {
    let n = arr.length;

    for (let start = 0; start < n; start++) {
        let ms = 0;
        let cs = 0;
        for (let end = 0; end < n; end++) {
            cs += arr[end]
            ms = Math.max(cs, ms)
        }
        return ms
    }
}

function MMS_using_Kadans_Algorithm(arr) {
    let n = arr.length
    let cs = 0;
    let ms = 0;
    for (let i = 0; i < n; i++) {

        cs += arr[i]
        ms = Math.max(cs, ms)

        if (cs < 0) {
            cs = 0
        }
    }
    return ms
}

arr = [1, 2, 3, 4, 5]
// printSubArray(arr)
// console.log(MaximumSumSubArray(arr))
console.log(MMS_using_Kadans_Algorithm(arr))