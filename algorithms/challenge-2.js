function filterArray(arr) {
    return arr.filter((elem)=>{return typeof elem==='number'});

}   

module.exports = filterArray

console.log(filterArray([1,2,3,4,"me","8"]));