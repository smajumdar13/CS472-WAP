const nums =[1,9,3,22,5];
// the biggest number in the array
function max(n){
    let temp=0;
    for(let i=0; i<n.length-1; i++){
        if(n[i]>n[i+1]){
            temp=n[i];
        } else {
            temp=n[i+1];
        }
    }
    return temp;
}
console.log(max(nums));
document.write(max(nums));
document.write("<br>");

// biggest number among three numbers
const maxNumOfThree = [1,2,3];
function maxOfThree(a,b,c) {
    let temp=0;
    if(a>b & a>c) temp = a;
    else if(b>c & b>a) temp = b;
    else temp=c;
    return temp;
}
console.log(maxOfThree(42,61,19));
document.write(maxOfThree(42,61,19));
document.write("<br>");

// is a vowel or is not
function isVowel(n) {
    if(n==="a" || n==="e" || n==="i" || n==="o" || n==="u" ) return true;
    return false;
}
console.log(isVowel("c"));
document.write(isVowel("c"));
document.write("<br>");

// sum of all numbers
const numbers = [1,2,3,4];
function sum(array){
    let temp=0;
    for(let i=0; i<array.length; i++){
        temp += numbers[i];
    }
    return temp;
}
console.log(sum(numbers));
document.write(sum(numbers));
document.write("<br>");

// product of all numbers
function multiply(array){
    let temp=1;
    for(let i=0; i<array.length; i++){
        temp *= numbers[i];
    }
    return temp;
}
console.log(multiply(numbers));
document.write(multiply(numbers));
document.write("<br>");

const string = "Hello, world!";
function reverse(str){
    let strTemp="";
    for(let i=0; i<str.length; i++){
        strTemp += str[str.length-1-i];
    }
    return strTemp;
}
console.log(reverse(string));
document.write(reverse(string));
document.write("<br>");

