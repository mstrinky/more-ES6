const users = [{id:1,name:'rinky',age:22,job:'engineer'}];
console.log(users[0].job);

const people = {
    id:1, 
    name:'rinky', 
    age:22, 
    address:{
    first:"thakurgaon road",
    second:"bania para gov. primary school"
}}
const findPeople = people.address.second;
console.log(findPeople);
