//1
function countToTen(){
    for (let i=1; i<=10; i++){
        console.log(i)
    }
}

//2
function countFromOne(number){
for (let k=1; k<= number; k++){
    console.log(k)
}    
}

//3
function countEveryEven(n){
    for(let i =0; i<=n; i++){
    if (i%2===0){
        console.log(i)
    }
    }
}

//4
function countEveryOdd(y){
  for (let i=0; i<=y; i++){
      if(i%2 >0){
          console.log(i)
  }
  }
}

//5 
let evennum=0;
function countEvens(array)
{
    for (let i=0;i< array.length; i++){
        if (array[i]%2===0){
        evennum++
        }
    }
  return evennum
}

//countToTen()
//countFromOne(90)
//countEveryEven(10)
//countEveryOdd(10)
//countEven([1,3,7,17,19])
console.log(countEvens([1,3,7,16,19]))