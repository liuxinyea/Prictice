

let matrix=[
    [0 , 1 , 2 ],
    [3 , 4 , 5 ],
    [6 , 7 , 8 ],
    [9 , 10, 11]
];
// let matrix=[
//     [0 , 1 , 2 , 3],
//     [4 , 5 , 6 , 7],
//     [8 , 9 , 10, 11]
// ];
//1. 递增的维度
//2. 方向的变化，什么时候该回转，某个方向上不能再递增或者递减时即为回转的时机（方向状态）
//3. 回转时的值记录，回转时的值是本次遍历的起始依据
let m=4,n=3;
let point={x:0,y:0};//用于记录回转时的值
let addX=true;//0:x轴，1：y轴
let turn=true;
let res=[];
let min=Math.min(m,n);
while(turn){
    if(point.x==0&&point.y==0){
        res.push(matrix[0][0]);
        point.y+=1;//{x:1,y:0}记录转向后起始的坐标点
        continue;
    }else{
        try {
            if(addX){
                let nowX,nowY;
                for(let y=0;y<=Math.min(point.y,min-1);y++){
                    nowX=point.x+y;
                    nowY=point.y-y;
                    res.push(matrix[nowX][nowY])
                }
                addX=!addX;
                point.x=nowX;
                point.y=nowY;
                if(point.x<n-1){
                    point.x+=1;
                }else if(point.y<m-1){
                    point.y+=1;
                }else{
                    //到头了
                    turn=false;
                }
            }else{
                let nowX,nowY;
                for(let x=0;x<=Math.min(point.x,min-1);x++){
                    nowX=point.x-x;
                    nowY=point.y+x;
                    res.push(matrix[nowX][nowY])
                }
                point.x=nowX;
                point.y=nowY;
                addX=!addX;
                if(point.y<m-1){
                    point.y+=1;
                }else if(point.x<n-1){
                    point.x+=1;
                }else{
                    //到头了
                    turn=false;
                }
            }
        } catch (error) {
            // console.log(error)
            console.log(point)
            console.log(res)
            turn=false;
        }
    }


}
