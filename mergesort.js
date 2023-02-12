/*
Merge sort:

If n < 2, array already sorted. Return that array.
If n >= 2:
    -Sort left half
    -Sort right half
    -Merge those halves
*/
function mergeSort(numList) {
    let mergedList = numList;

    if (numList.length > 1) {
        const midpoint = Math.floor((numList.length) / 2);
        const leftList = numList.slice(0, midpoint);
        const rightList = numList.slice(midpoint);

        mergeSort(leftList);
        mergeSort(rightList);
        
        let i = 0;
        let j = 0;
        let k = 0;
        
        while (i < leftList.length && j < rightList.length){
            if (leftList[i] < rightList[i]) {
                mergedList[k] = leftList[i];
                ++i;
            } else {
                mergedList[j] = rightList[j];
                ++j;
            }
            ++k;
        }
    
        while (i < leftList.length) {
            mergedList[k] = leftList[i];
            ++i;
            ++k;
        }
    
        while (j < rightList.length) {
            mergedList[k] = rightList[j];
            ++j;
            ++k;
        }


        return mergedList;
    } else {
        return numList;
    }
} 

let a = [3, 2, 1, 4, 6, 5];
console.log('Sorting: ' + a);
console.log('Sorted array: ' + mergeSort(a));
