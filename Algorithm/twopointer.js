function twopointer(arr,target) {  //array must be sorted 
    
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        
        let sum = arr[left] + arr[right];
        
        if (sum == target) {
            return [left,right]
        }
        else if (sum<target) {
            left++
        } else {
            right--
        }

    }


}

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let target = 15;
console.log(twopointer(arr,target))