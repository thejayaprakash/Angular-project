public class InsertionSort {
    public static void main(String args[]){
        int[] arr={64, 34,12,3,89};
        int len=arr.length,j;
        for(int i=0;i<len-1;i++){
              j=i+1;
            int temp=arr[j];
            
            while (j>0) {
                if(arr[i]>temp){
                    arr[j]=arr[j-1];
                      j--;
                }else{
                    break;
                }
              
            }
            arr[j]=temp;

        }
        for(int i=0;i<len;i++){
            System.out.print(arr[i]+" ");
        }
    }
}
