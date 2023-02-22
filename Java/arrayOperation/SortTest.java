import java.util.Arrays;

public class SortTest {
    public static void main(String[] args){
        int[] arr = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 11};
        System.out.println(Arrays.toString(arr));
        for (int i = 0; i< arr.length - 1; i++){
            for(int j = 0; j< arr.length - i - 1; j++){
                if(arr[j] > arr[j+1] ){
                    int tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
