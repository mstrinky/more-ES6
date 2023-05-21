// // one
// const numbers= (a,b,c) => a*b*c;
// const multiply  = numbers(2,3,4);
// console.log(multiply );

// // two 
// const lines = `I am a coder. 
// I love to code. 
// I love to eat biriyani`;
// console.log(lines);

// // three 
// const number = (a,b=3)=>a+b;
// const add = number(2);
// console.log(add);

// four 
const friendsFilter = (friends) =>{
    let evenArray = [];
    for(let i = 0; i<friends.length; i++){
    if(friends[i].length%2===0){
    evenArray.push(friends[i]);
    }
    
    }
    return evenArray;
}
// console.log(friends[3].length);

const friends = ['ring','ping','ching','sing'];
const declareFuntion = friendsFilter(friends);
console.log(declareFuntion);

// five 
const square = (a,b,c) => a*a + b*b + c*c ;
const doSquare = square(4,3,2);
console.log(doSquare);

// six 
const sixTimes = [3,6,4,7,9].map(x=>x*6);
console.log(sixTimes);

// filter and find 
const allNumbers = [4,5,6,7,8,2,15,7,78,10,56,32];
const fives = allNumbers.find(num => num%5 ===0 );
const fivesAll = allNumbers.filter(num=> num%5 ===0);
console.log(fives);
console.log(fivesAll);