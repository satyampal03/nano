
const nums = [3,52,4,3,4,2,4];

let target = 7;

// var twoSum = function(nums, target) {
    let output = [];
    let pre = 0;
    for(let i = 0; i < nums.length; i++){

        pre  = i;
        
        if( pre + nums[i] === target){
            output.push(pre);
            output.push(i);

            continue;
        }

    }

    console.log(output);
// };

// twoSum();
