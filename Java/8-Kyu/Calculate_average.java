public class Calculate_average {
  public static double find_average(int[] array){
    return java.util.stream.IntStream.of(array).average().getAsDouble();
  }
}

// import java.util.Arrays;
// public class Calculate_average {
//   public static double find_average(int[] array) {
//     return Arrays.stream(array).average().orElse(0);
//   }
// }
//
// public class Calculate_average {
//   public static double find_average(int[] array) {
//   double sum=0;
//   double avg=0;
//   for (int i=0;i<array.length;i++)
//       sum+=array[i];
//       avg=sum/array.length;
//       return avg;
//   }
// }
