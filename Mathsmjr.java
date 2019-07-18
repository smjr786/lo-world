   public class Testbed {
   public static boolean isPalin(String str){
        int mid1;
        int mid2;
        int j;
        if(str.length()%2 == 1){
            // odd
            mid1 = (str.length()/2)+1;
            mid2 = (str.length()/2)-1;
        }else{
            // even
            mid1 = str.length()/2;
            mid2 = (str.length()/2)-1;
        }
        j = mid2;
        for (int i = mid1;i<str.length();i++){
            if(str.charAt(j) != str.charAt(i))
                return false;
            j--;
        }
        return true;

    }

    public static boolean isPrime(int x){
 if(x == 1 || x ==0){
     return false;
 }else{
        for (int i= 2;i<=x/2;i++){
            if(x%i == 0){
                return false;
            }
        }
 }
        return true;
    }

    public static boolean isOdd(int x){
        if(x%2==0)
            return false;
        return true;
    }
}
