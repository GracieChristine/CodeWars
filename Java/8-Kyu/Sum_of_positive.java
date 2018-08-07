public class Sum_of_positive{
  public static int sum(int[] arr) {
    int sum = 0;
    for (int i : arr)
      if (i > 0) {
        sum += i;
      }
  return sum;
  }
}

// import java.util.Arrays;
// public class Sum_of_positive{
//   public static int sum(int[] arr){
//     return Arrays.stream(arr).filter(v -> v > 0).sum();
//   }
// }
