public class ArrayRoate {
    static void LeftRoate(int[] arr,int left,int right){
            while(left<right){
                int temp=arr[left];
                arr[left]=arr[right];
                arr[right]=temp;
                left++;
                right--;
            }
    }
    public static void main(String[] args) {
        int[] arr={64, 34, 25, 12, 22, 11, 90};
        int len=arr.length;
        int key=4;
          //0(n)->time complexity
           ArrayRoate.LeftRoate(arr, 0,key-1);
           ArrayRoate.LeftRoate(arr,key,len-1);
          ArrayRoate.LeftRoate(arr,0,len-1);

        // for(int i=0;i<key;i++){  0(n2) ->time complexity
        //     int temp=arr[0];
        //     for(int j=0;j<len-1;j++){
        //          arr[j]=arr[j+1];
        //     }
        //     arr[len-1-i]=temp;

        // }
        for(int i=0;i<len;i++){
            System.out.print(arr[i]+" ");
        }
    }
}
