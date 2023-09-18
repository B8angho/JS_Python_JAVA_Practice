function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return (arr1.length > arr2.length) ? 1 : -1
    }
    const arr1S = arr1.reduce((a, c) => a+c,0);
    const arr2S = arr2.reduce((a, c) => a+c,0);
    if(arr1S === arr2S) return 0;
    return arr1S > arr2S ? 1 : -1;

}