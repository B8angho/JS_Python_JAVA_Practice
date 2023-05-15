import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Solution {
  static String[] score = {"A+", "A0", "A-", "B+", "B0", "B-", "C+", "C0", "C-", "D0"};
  public static void main(String[] args) throws IOException{
    Scanner sc =new Scanner(System.in);
    int T = sc.nextInt();
    for(int tc = 1; tc <= T; tc++) {

      int N = sc.nextInt();
      int K = sc.nextInt();

      double find_score = 0.0;
      Double result[] = new Double[N];

      for(int i = 0; i < N; i++) {
        int mid_score = sc.nextInt();
        int fin_score = sc.nextInt();
        int sub_score = sc.nextInt();

        double sum = 0.35*mid_score + 0.45*fin_score + 0.20*sub_score;
        result[i] = sum;
        if(i+1 == K) find_score = sum;
      }
      Arrays.sort(result, Collections.reverseOrder());

      int index = 0;
      for(int i = 0; i < N; i++) {
        if(result[i] == find_score) {
          index = i;
        }
      }
      index = index/(N/10);
      System.out.println("#" + tc + " " + score[index]);
    }
    sc.close();
  }
}