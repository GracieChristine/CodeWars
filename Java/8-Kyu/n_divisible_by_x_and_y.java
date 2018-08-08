public class n_divisible_by_x_and_y {
	public static boolean isDivisible(long n, long x, long y) {
		if (n % x == 0 && n % y == 0) {
      return true;
    }
    else if (n % x != 0 && n % y == 0) {
      return false;
    }
    else if (n % x == 0 && n % y != 0) {
      return false;
    }
    else {
      return false;
    }
	}
}

// public class n_divisible_by_x_and_y {
//   public static Boolean isDivisible(long n, long x, long y) {
//       return (n % x == 0) && (n % y == 0);
//   }
// }
