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