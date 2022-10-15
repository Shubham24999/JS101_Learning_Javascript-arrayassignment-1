let str="My name is Shubham umar Gupta";
let count=0;
for(let i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    count++;
  }
}
if(str.length!=0){
  console.log(count);
} else{
  console.log("empty string");
}