function pickingNumbers(a) {
    // Write your code here
    let freq = Array(100).fill(0);
    
    for (let i in a) {
        freq[a[i]]++;
    }
    
    let max = -1;
    for (let i = 0; i < freq.length-1; i++) {
        if(freq[i] + freq[i+1] > max) {
            max = freq[i] + freq[i+1];
        }
    }
    
    return max;
}

let a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));
