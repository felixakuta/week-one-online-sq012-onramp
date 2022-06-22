function sumMix(arr) {
    let sum=0;
    arr.forEach(item => {
        if(typeof item==="string"){
            item=Number(item);
            sum+=item;
        }
        else{
            sum+=item;
        
     }
        
    });
    return sum;
    
 }

     module.exports = sumMix

     console.log(sumMix([23,1,5,"1","6"]));

