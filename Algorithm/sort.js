/*
 * @Author: liuxinye
 * @Date: 2020-04-01 16:32:16
 * @LastEditors: liuxinye
 * @LastEditTime: 2020-04-02 10:49:47
 * @Description: 排序算法练习
 */

class Sort{
    constructor(){

    }
    //冒泡排序
    static bubblingSort(array){
        //length只取一次，提高性能
        let leng=array.length;
        for(let i=0;i<=leng-1;i++){
            let temp=null;
            for(let j=0;j<=leng-1-i;j++){
                if(array[j]>array[j+1]){
                   temp=array[j];
                   array[j]=array[j+1];
                   array[j+1]=temp;
                }
            }
            //优化，没有替换过说明顺序已经是对的，不再排序
            if(!temp)
              break;
        }
        return array;
    }
    //选择排序
    static selectionSort(array){
        //length只取一次，提高性能
        let leng=array.length;
        for(let i=0;i<=leng-1;i++){
           let minIndex=i;
           //每趟循环都找去剩余元素中的最小值，并放到已排序的元素的后面一位（替换）
           for(let j=i+1;j<=leng-1;j++){
               if(array[j]<array[minIndex]){
                    minIndex=j;
               }
           }
           let temp=array[minIndex];
           array[minIndex]=array[i];
           array[i]=temp;
        }
        return array;
    }
    //插入排序
    static insertionSort(array){
        for(let i=1;i<array.length;i++){
            let target=i;
            //拿已经排好的序列的后一位元素与之前排好序的所有元素进行比较
            for(let j=i-1;j>=0;j--){
                 if(array[target]<array[j]){
                     let temp=array[j]
                     array[j]=array[target];
                     array[target]=temp;
                     target=j;
                 }else{
                     break;
                 }
            }
        }
        return array;
    }
    //归并排序
    static mergeSort(array){
        console.log("sort");

    }
    //快速排序
    static quickSort(array){
         if(array.length<2){
             return array;
         }
         let target=array[0];
         let left=array.filter(item=>{
             if(item<target){
                 return item;
             }
         });
        let right=array.filter(item=>{
            if(item>target){
                return item;
            }
        });
        return Sort.quickSort(left).concat(target).concat( Sort.quickSort(right));
    }
    //堆排序
    static heapSort(array){
        console.log("sort");

    }
}
let array=[1,3,4,5,2,10,9,8];
let result=Sort.quickSort(array);
console.log(result);

