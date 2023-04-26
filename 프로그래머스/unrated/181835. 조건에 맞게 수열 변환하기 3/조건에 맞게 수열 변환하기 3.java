import java.util.*;

class Solution {
    public int[] solution(int[] arr, int k) {
        if (k % 2 == 0) {
            return Arrays.stream(arr).map(x -> x + k).toArray();
        } else {
            return Arrays.stream(arr).map(x -> x * k).toArray();
        }
    }
}