
// Exercise 1
/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  };
console.log(checkAge(20));
// the arrow function 
const CheckAge = age => age>18 ? true : ('Do you have your parents permission to access this page?') ;
console.log(CheckAge(20));
*/ 

const pow = (x,n) => {
    let m = x ;
    for ( let i = 1 ; i<n ; i ++){
        x=m*x;
        
    }
    return x ;
}
console.log(pow(2,10))

