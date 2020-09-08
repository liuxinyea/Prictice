
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //1.两次遍历，依次判断needle中的字符是否在haystack中存在
    //
    let lastIndex=-1;
    for(let i=0;i<needle.length;i++){
          let goOn=false;
          for(let j=0;j<haystack.length;j++){
              if(needle[i]==haystack[j]){
                  if(lastIndex==-1||j==lastIndex+1){
                     goOn=true;
                     lastIndex=j;
                  }
              }
          }
          if(!goOn){
              return -1;
             //  break;
          }else if(i==needle.length-1){
              return endIndex-needle.length;
          }
    }
 };
 console.log(strStr('hello','ll'));
