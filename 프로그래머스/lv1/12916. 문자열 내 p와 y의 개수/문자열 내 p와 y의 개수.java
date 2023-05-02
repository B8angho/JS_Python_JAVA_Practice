class Solution {
    boolean solution(String s) {
        int pCount = 0;
        int yCount = 0;
        
        String[] arr = s.toLowerCase().split("");
        
        for (int i = 0; i < arr.length; i++) {
            if("p".equals(arr[i])) {
                pCount++;
            } else if ("y".equals(arr[i])) {
                yCount++;
            }
        }
        
        return (pCount != yCount) ? false : true;
    }
}