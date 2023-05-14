import java.util.*;
// 예시 : N이 5이면 1-2+3-4+5 = 3
public class Solution {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int T = sc.nextInt();
		
		for(int t = 1; t <= T; t++) {
			int N = sc.nextInt();
			int result = 0;
			for(int i = 1; i <= N; i++) {

				
				if(i % 2 == 0) {
					result -= i;
				} else {
					result += i;
				}
			}
			System.out.println("#" + t + " " + result);
		}
	}
}
