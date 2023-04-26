import java.util.*;

class Solution {
    public int solution(int[] num_list) {
        int sum = Arrays.stream(num_list).sum();
        int mul = Arrays.stream(num_list).reduce(1, (x, y) -> x * y);
        int squareSum = sum * sum;
        
        return (mul < squareSum) ? 1 : 0;
    }
}