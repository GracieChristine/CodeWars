public class Reversed_Strings {
  public static String solution(String str) {
    char ch[] = str.toCharArray();
    String reverse = "";

    for (int i = ch.length - 1; i >= 0; i--) {
      reverse += ch[i];
    }
    return reverse;
  }
}

// public class Reversed_Strings {
//   public static String solution(String str) {
//     return new StringBuilder(str).reverse().toString();
//   }
// }
