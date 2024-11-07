function hello(){
    console.log("hello");

}
hello();
function add(a,b){
    return(a+b);
}
const hello1=()=>console.log("arrow function ")
const sum=add(34,54);
console.log("sum",sum);
const add1=(a,b)=>(a+b);
const sum1=add1(134,254);
console.log(sum1)

const person={
    name:"hello",
    number:5153135,
    age:20
    
}
const{name,number,age}=person;
console.log(name)
console.log(number);
console.log(age);

const map =new Map ([
["key 1","js"],
[123,"java"],
[234,456],
["lan1","60"]

    ]);
    console.log(map.get(123));
const num=[2,4,5,6,7,8,9];
const a=num.filter((n)=>(n%2==0));
console.log(a);
const b=num.filter((n)=>(n%2==0)).map((n)=>(n*3));
console.log(b);
const c=num.filter((n)=>(n%2==0)).map((n)=>(n*3)).reduce((n,s)=>(n+s));
console.log(c);

const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("execute promise");
        //resolve();
        reject("network error")

    }
);

mypromise.then(()=>{
    console.log("All Set");
}).catch((err)=>{
    console.log("Error is",err);
}).finally(()=>{
    console.log("executed final block");
})
