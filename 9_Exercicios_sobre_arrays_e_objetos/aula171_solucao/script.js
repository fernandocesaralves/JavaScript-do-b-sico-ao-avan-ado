let nums = [1,2,3,4,5,6];

let nums2 = [1,2,3];


function verificarElementosArray(arr) {
    if (arr.length >= 5) {
        console.log("muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificarElementosArray(nums);
verificarElementosArray(nums2);