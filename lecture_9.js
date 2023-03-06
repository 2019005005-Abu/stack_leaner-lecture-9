const generatingTwoRandomNumber=(max,whatdoYouWant)=>{
    const random_1=Math.floor(Math.random()*max);
    const random_2=Math.floor(Math.random()*max);
    const result=whatdoYouWant(random_1,random_2);
    return result;
}

generatingTwoRandomNumber(100,function(ran_1,ran_2){
  console.log(ran_1,ran_2)
})

 const plus=generatingTwoRandomNumber(100,(ran_1,ran_2)=>ran_1+ran_2);
console.log(plus);

function sqr(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}

function power(p){
    return function(n){
    let result=1;
    for(let i=1;i<=p;i++){
       result=result*n;
    }
    return result;
 }
}

const square=power(2)
console.log("SQR",square);
console.log(square(4));
console.log(square(3));
console.log(power(2)(3))
console.log(power(2)(4))

//-----------------------------------
//--------------------------------------
//lexical scope
//step:1-lexing/parsing/tokenize
//step:2-compile
//step:3:run
//-------------------------------------------
//-------------------------------------

const a=10;
function mostouter(){
  function outer(){
    console.log(a);
  }
}
mostouter();

//block scope
{
 const noScopr="scoped";
 {
  {
    {
      console.log(noScopr);
    }
  }
 }
}
//lexical scope
//global scope
//local scope


function A(){
  console.log("I am A");

  function B() {
     A();
  }

  function C(){
     B()
     B()
  }

  function D(){
    C();
    A();
  }
 D() 
}

function makeRandom(max){
  const random_1=Math.floor(Math.random()*max);
  const random_2=Math.floor(Math.random()*max);
  const result=random_1+random_2;
  return result;
}
const r=makeRandom(15);
console.log(r);


( async function MyFullName(name){
  console.log(name);
})('Abu Al Shahriar Rifat')





