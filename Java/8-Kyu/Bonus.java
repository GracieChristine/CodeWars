public class Bonus {
  public static String bonusTime(final int salary, final boolean bonus) {
    return bonus ? "£" + salary * 10 : "£" + salary;
  }
}

// public class Bonus{
//   public static String bonusTime(final int salary, final boolean bonus) {
//     return "\u00A3" + (bonus ? 10 : 1) * salary;
//   }
// }
