import java.util.*;

public class Solution {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int T = sc.nextInt();
		
		for(int t = 1; t <= T; t++) {
			String str = sc.next();
			
			int result = 1;
			for(int i = 0; i < str.length()/2; i++) {
				if(str.charAt(i) != str.charAt(str.length()-1-i)) {
					result=0;
					break;
				}
			}
			System.out.println("#" + t + " " + result);
		}

		
		
		
	}
}
