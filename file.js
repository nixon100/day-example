function findOddEven(num = false) {
    const add = new Promise((resolve = ()=> {}, reject =() => {}) =>{
 setTimeout(()=>{
    if (num){
        resolve("EVEN");
}else{
        reject("ODD");
    }

},5000);

});
}
findOddEven(false)

.then((result)=> console.log(result))
.catch((error)=> console.log(error));







