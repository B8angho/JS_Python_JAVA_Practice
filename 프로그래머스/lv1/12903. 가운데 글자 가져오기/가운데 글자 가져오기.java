class Solution {
    public String solution(String s) {
        String answer = "";
        int length = s.length();
        int mid = length / 2;
        answer = (length % 2 == 1) ? s.substring(mid, mid+1) : s.substring(mid-1, mid + 1);
        return answer;
    }
}