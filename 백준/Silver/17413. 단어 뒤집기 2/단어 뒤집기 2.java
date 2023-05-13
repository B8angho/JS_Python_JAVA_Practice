import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 문자열 입력
		String str = br.readLine();
		
		// 결과 값을 출력할 StringBuilder
		StringBuilder sb = new StringBuilder();
		
		// '<' , '>' 를 판별하기 위한 flag
		boolean flag = false;

		// LIFO를 이용하기 위한 스택 자료구조
		Stack<Character> stack = new Stack<>();

		for(int i = 0; i < str.length(); i++) {
			// '<'를 만났을 때 스택이 비어있지 않으면 모든 원소를 꺼내고 flag를 true로
			if(str.charAt(i) == '<') {
				while(!stack.isEmpty()) {
					sb.append(stack.pop());
				} 
				flag = true;
			}
			// '>'를 만나면 flag를 false로 입력 후 '>'를 저장 
			else if(str.charAt(i) == '>') {
				flag = false;
				sb.append(str.charAt(i));
				continue;
			}

			// flag가 true이면 '>'를 만나기 전까지 그대로 입력
			if(flag == true) {
				sb.append(str.charAt(i));
			}
			// flag가 false면 괄호 이외의 문자를 처리
			else if(flag == false) {
				// 해당 인덱스의 i 번째 문자가 공백일 경우, 모든 원소를 POP수행 후 공백 추가
				if(str.charAt(i) == ' ') {
					while(!stack.isEmpty()) {
						sb.append(stack.pop());
					}
					sb.append(' ');
					continue;
				} else {
					// 그 외의 경우 스택에 문자 추가
					stack.push(str.charAt(i));
				}
			}
			// 반복문이 마지막 횟수일 때, 스택이 비어있지 않다면 원소 추가
			if(i == str.length() - 1) {
				while(!stack.isEmpty()) {
					sb.append(stack.pop());
				}
			}
		}
		System.out.println(sb);
	}
}



