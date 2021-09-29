//1
function countToFifty(){
  for (let i = 1; i < 51; i++) {
     let current = i
     console.log(current)
  }
}

//2
function countFromOne(integer){
  for(let i =1; i <= integer; i++) {
    let ten = i
     console.log(ten)
  }
}

//3
function threeOrFiveInFifty(){
    for (let i = 1; i < 51; i++) {
      let divisible = i  
        if ((divisible % 3 === 0) || (divisible % 5 === 0)) {
            console.log(divisible)
        }
    }
}

//4
function threeOrFive(parameter){
  for (let i = 1; i <= seventyFive; i++) {
      let divisible = i  
        if ((divisible % 3 === 0) || (divisible % 5 === 0)) {
            console.log(divisible)
        }
    }
}


//countToFifty();
//countFromOne(10);
//threeOrFiveInFifty();
//threeOrFive(75);