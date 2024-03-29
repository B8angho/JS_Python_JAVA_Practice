import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        return Arrays.stream(arr)
                .map(num -> {
                    if (num % 2 == 0 && num >= 50) {
                        return num / 2;
                    } else if (num % 2 != 0 && num < 50) {
                        return num * 2;
                    } else {
                        return num;
                    }
                })
                .toArray();
    }
}