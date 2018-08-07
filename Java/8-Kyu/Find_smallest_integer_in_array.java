// Find_smallest_integer_in_array

public class Find_smallest_integer_in_array {
  public static int findSmallestInt(int[] args) {
		int smallest = Integer.MAX_VALUE;
		for (int i : args)
			smallest = (smallest > i) ? i : smallest;
		return smallest;
	}
}
