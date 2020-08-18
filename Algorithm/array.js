/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let xSet=new Set();
    let ySet=new Set();
    let ln=matrix.length;
    let xln=matrix[0].length;
    for(let i=0;i<ln;i++){
        matrix[i].forEach((item,j)=>{
           if(item==0){
               xSet.add(i);
               ySet.add(j);
           }
        })
    }
    xSet.forEach((x)=>{
        for(let i=0;i<xln;i++){
            matrix[x][i]=0;
        }
    })
    ySet.forEach((y)=>{
        for(let i=0;i<ln;i++){
            matrix[i][y]=0;
        }
    })
};
let data=[
    [0 , 1 , 2 , 3],
    [4 , 5 , 6 , 7],
    [8 , 9 , 10, 11]
];
setZeroes(data)
console.log(data);
let data=[
    [0 , 1 , 2 ],
    [3 , 4 , 5 ],
    [6 , 7 , 8 ],
    [9 , 10, 11]
];
let m=3,n=4;
let dx=0;
let dy=0;
let addX=true;//0:x轴，1：y轴
let res=[];

dx==0&&dy==0
res.push(matrix[0][0])
addX=!addX;//addX=false
dx=dy+1;//dx=1

dx==1&&dy==0
res.push(matrix[1][0])
res.push(matrix[0][1])
addX=!addX;//addX=true
dy=dx+1;//dy=2

dy==2
res.push(matrix[0][2])
res.push(matrix[1][1])
res.push(matrix[2][0])
addX=!addX;//addX=false
if(dy+1>x){
    dx=dy;//dx=2
}

res.push(matrix[2,1]);
res.push(matrix[1,2]);
res.push(matrix[0,3]);    

if(addX&&++dx<=m-1){
   for(let x=dx;x>=0;x--){ 
       for(let y=0;y<dx;y++){
         res.push(matrix[x][y]);
       }
   }
}
if(!addX&&++dy<=n-1){

}