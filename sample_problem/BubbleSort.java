public class BubbleSort {
    public static void main(String args[]){
        int[] arr={64, 34, 25, 12, 22, 11, 90};
        int len=arr.length;
        for(int i=0;i<len;i++){
        for(int j=i+1;j<len;j++){
            if(arr[i]>arr[j]){
                int temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

            }
        }
    }
    for(int i=0;i<len;i++){
        System.out.print(arr[i]+" ");
    }
    }
}
