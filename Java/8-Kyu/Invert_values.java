public class Invert_values {
  public static int[] invert(int[] array) {
    if (array.length == 0) {
      return array;
    }
    else {
      for (int i = 0; i < array.length; i++) {
        array[i] = -array[i];
      }
    }
    return array;
  }
}

// public class Invert_values {
//   public static int[] invert(int[] array) {
//     return java.util.Arrays.stream(array).map(i -> -i).toArray();
//   }
// }
