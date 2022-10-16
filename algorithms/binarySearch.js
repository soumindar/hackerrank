let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [5, 25, 50, 120];

let rankedUnique = [...new Set(ranked)];
let ans = [];
for (let i in player) {
    let l = 0;
    let r = rankedUnique.length-1;
    let mid;
    while (r >= l) {
        mid = Math.floor((l+r)/2);
        if (player[i] == rankedUnique[mid]) {
            break;
        }
        if (player[i] > rankedUnique[mid]) {
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    

    if (player[i] == rankedUnique[mid]) {
        ans.push(mid+1);
    } else if (player[i] > rankedUnique[mid]) {
        ans.push(mid+1);
    } else {
        ans.push(mid+2);
    }
}

console.log(ans);