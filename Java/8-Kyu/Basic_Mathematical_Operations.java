// Basic_Mathematical_Operations
public class Basic_Mathematical_Operations {
  public static Integer basicMath(String op, int v1, int v2) {
    if (op == "+") {
      return v1 + v2;
    }
    else if (op == "-") {
      return v1 - v2;
    }
    else if (op == "*") {
      return v1 * v2;
    }
    else if (op == "/") {
      return v1 / v2;
    }
    return 0;
  }
}

// public class Basic_Mathematical_Operations{
//   public static Integer basicMath(String op, int v1, int v2)
//   {
//   switch (op) {
//     case "-":
//       return v1 - v2;
//     case "+":
//       return v1 + v2;
//     case "*":
//       return v1 * v2;
//     case "/": {
//       if (v2 == 0)
//         throw new IllegalArgumentException("Division by zero");
//       return v1 / v2;
//     }
//     default:
//       throw new IllegalArgumentException("Unknown operation: " + op);
//     }
//   }
// }
