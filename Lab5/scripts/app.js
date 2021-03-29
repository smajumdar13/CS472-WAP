const nums =[1,9,3,22,5];

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

