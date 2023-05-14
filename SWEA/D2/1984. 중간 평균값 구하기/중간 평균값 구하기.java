
import java.util.*;

public class Solution {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int T = sc.nextInt();
		
		for(int t = 1; t <= T; t++) {
			int max = Integer.MIN_VALUE;
			int min = Integer.MAX_VALUE;
			
			int num, sum = 0;
			for(int i = 0; i < 10; i++) {
				num = sc.nextInt();
				
				sum += num;
				max = Math.max(max, num);
				min = Math.min(min, num);
			}
			sum = sum - max - min;
			int result = (int)Math.round(sum/8.0);
			System.out.println("#" + t + " " + result);
		}
	}
}
