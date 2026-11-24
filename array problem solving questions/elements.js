function MoveZerosInLast(nums) {
    
    let sizeing = nums.length;
    
    if (sizeing == 0) return null;

    let por=0

    for (let i = 0; i < sizeing; i++){
        if (nums[i] !== 0) {
            nums[por]=nums[i]
            por++
        }
    }

    for (let i = por; i < sizeing; i++) {
        nums[i] = 0;
    }

    return nums

}


nums = [0, 1, 0,0, 3, 12]
console.log(MoveZerosInLast(nums))
