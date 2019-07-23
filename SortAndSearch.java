public class SortAndSearch{
public static void binSea(int[] sortedArray,int x,int l,int r){
        if(l<=r){
            int mid = (l + r ) / 2;
            if(sortedArray[mid] == x)
                System.out.print(" Element found at index "+mid);
            else if(sortedArray[mid] > x)
                binSea(sortedArray,x,l,mid-1);
            else if(sortedArray[mid] < x)
                binSea(sortedArray,x,mid+1,r);
        }else{
            System.out.print(" Not Found ");
        }
    }
    }
