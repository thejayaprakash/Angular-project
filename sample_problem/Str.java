import java.util.HashMap;

public class Str {
    public static void main(String args[]){
        String str1="hello";
       String str2="hello";
       int[] fre=new int[26]; 
       for(int i=0;i<26;i++){
        fre[i]=0;
       }
    //    HashMap<String,Integer> hs=new HashMap<>();
       for(int i=0;i<str1.length();i++){
          fre[str1.charAt(i)-'a']++;
        


       }
        for(int i=0;i<str1.length();i++){
          fre[str2.charAt(i)-'a']--;
         }
         boolean flag=true;
         for(int i=0;i<26;i++){
            if(fre[i]!=0){
                flag=false;
            }
           
         }
         if(flag){
            System.out.println("anagram");
         }
         else{
            System.out.println("not anagram");
         }
    }
}
