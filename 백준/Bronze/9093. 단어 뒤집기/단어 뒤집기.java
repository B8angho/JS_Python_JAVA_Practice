import java.io.*;
import java.util.*;


public class Main {

	public static void main(String[] args) throws IOException {
 
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int num = Integer.parseInt(br.readLine());
		StringBuilder answer = new StringBuilder();
		for (int i = 0; i < num; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			while (st.hasMoreTokens()) {
				StringBuilder sb = new StringBuilder(st.nextToken());
				answer.append(sb.reverse()+" ");
			}
			answer.append("\n");
		}
		System.out.println(answer);
	
	
	}

}