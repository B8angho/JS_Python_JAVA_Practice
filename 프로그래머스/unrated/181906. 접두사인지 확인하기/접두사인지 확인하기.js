function solution(my_string, is_prefix) {
    const answer = [];
    const prefix = [...my_string].reduce((a, c, i) => {
        const sliceWord = my_string.slice(0, i+1);
        
        return [...a, sliceWord];
    },[])
    return prefix.includes(is_prefix) ? 1 : 0;
}