public class Century_From_Year {
  public static int century(int number) {
    return (number % 100) > 0 ? ((number / 100) + 1) : (number / 100);
  }
}
