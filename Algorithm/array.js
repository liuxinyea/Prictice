let matrix=[
    [0 , 1 , 2 ],
    [3 , 4 , 5 ],
    [6 , 7 , 8 ],
    [9 , 10, 11]
];
//  matrix=[
//     [0 , 1 , 2 , 3],
//     [4 , 5 , 6 , 7],
//     [8 , 9 , 10, 11]
// ];
//1. 递增的维度
//2. 方向的变化，什么时候该回转，某个方向上不能再递增或者递减时即为回转的时机（方向状态）
//3. 回转时的值记录，回转时的值是本次遍历的起始依据
let m=matrix[0].length,n=matrix.length;
let point={x:0,y:0};//用于记录回转时的值
let addX=true;//0:x轴，1：y轴
let turn=true;
let res=[];
let min=Math.min(m,n);
while(turn){
    if(addX){
        let nowX=point.x,nowY=point.y;
        while(nowX<=n-1&&nowY>=0){
            point.x=nowX;
            point.y=nowY;
            res.push(matrix[nowX][nowY]);
            nowX+=1;
            nowY-=1;
        }
        addX=!addX;
        if(point.x<n-1){
            point.x+=1;
        }else if(point.y<m-1){
            point.y+=1;
        }else{
            //到头了
            turn=false;
        }
    }else{
        let nowX=point.x,nowY=point.y;
        while(nowX>=0&&nowY<=m-1){
            point.x=nowX;
            point.y=nowY;
            res.push(matrix[nowX][nowY]);
            nowX-=1;
            nowY+=1;
        }
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
}
console.log(res);
