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
        
        // Traverse all the array till start of sorted array at the right and swap elements in between if necessory
        public static void bubSor(int[] array){
        for(int i=0;i<array.length;i++){
            for(int j=0;j<array.length-i-1;j++){
                if (array[j]>array[j+1]){
                    int temp = array[j+1];
                    array[j+1]=array[j];
                    array[j]=temp;
                }
            }
        }
        System.out.print(Arrays.toString(array));
    }
        
        //sorted array at left side and unsorted array at right side from which one by one machting with each of unsorted uptil bigger one 
        public static void insSor(int[] array){
        for(int i=1;i<array.length;i++){
            int j = i-1;
            int tempValue = array[i];
            while(j>=0 && array[j]>tempValue){
                    array[j+1]=array[j];
                j--;
            }
            array[j+1]=tempValue;
        }
        System.out.print(Arrays.toString(array));
    }
        
        // Selection Sort; compare each number with each number to find min and swap min index with cuurent index; left side will be sorted list  
          public static void selSor(int[] array){
        for(int i = 0;i<array.length-1;i++) {
            int minIndex = i;
        for(int j = i+1;j<array.length-i;j++) {
        if(array[minIndex]>array[j])
        minIndex = j;
        }
            int temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
        System.out.print(Arrays.toString(array));
    }
        
    }
