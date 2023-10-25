public class Mat{
    public static void main(String args[]){
          int arr[][]={{1,2,3,4},
                        {5,6,7,8},
                        {9,10,11,12},
                        {13,14,15,16}};
         int row=arr.length,col=arr[0].length;
       
        if(row>2 && col>2){
        for(int i=0;i<row;i++){
            for(int j=0;j<col/2 ;j++){
                int temp=arr[i][j];
                 arr[i][j]=arr[i][j+2];
                 arr[i][j+2]=temp; 
            }
        }
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
    }
    else{
        System.out.println("plz enter a matrix above 2x2");
    }
    }
 }