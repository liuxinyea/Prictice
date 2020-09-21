/*
 * @Author: liuxinye
 * @Date: 2020-04-01 16:32:16
 * @LastEditors: liuxinye
 * @LastEditTime: 2020-09-18 08:12:56
 * @Description: 排序算法练习
 */

class Sort{
    constructor(){

    }
    //冒泡排序
    static bubblingSort(array){
        let length=array.leng;
        for(let i=0;i<length;i++){
            let temp=null;
            //每遍循环把最大值找出来，冒泡到未排序序列的最后
            for(let j=0;j<length-i;j++){
                if(array[j]>array[j+1]){
                    temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
            if(!temp){//表明此趟循环未发现顺序不对的，说明未处理队列都是有序的
               break;
            }
        }
        return array;
    }
    //选择排序
    static selectionSort(array){
        let length=array.length;
        for(let i=0;i<length;i++){
            let minIndex=i;
            for(let j=i+1;j<length;i++){
                if(array[i]>array[j]){
                    minIndex=j;
                }
            }
            if(minIndex!=i){
                let temp=array[i];
                array[i]=array[minIndex]
                array[minIndex]=temp;       
            }
        }
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
    //快速排序,随便去一个数，以其为基准左右划分，以此递归
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
        return Sort.quickSort(left).concat(target).concat(Sort.quickSort(right));
    }
    //堆排序
    static heapSort(array){
        console.log("sort");

    }
}
let array=[1,3,4,5,2,10,9,8];
let result=Sort.quickSort(array);
console.log(result);

